"use client";
import { useSearchParams } from "next/navigation";
import useCourse, { useCourseReturn } from "@/hooks/useCourse";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useMessages from "@/hooks/useMessages";
import { useEffect, useState } from "react";
import Messages from "@/components/Message";
import ChatInput from "@/components/ChatInput";
import { CourseApi, MessageApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import useAuth from "@/hooks/useAuth";
import { Label } from "@radix-ui/react-label";
import Navbar from "@/components/Navbar";
import Markdown from "markdown-to-jsx";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
const messageApi = new MessageApi(apiClient);
const courseApi = new CourseApi(apiClient);

export default function Chat() {
  const searchParams = useSearchParams();
  const courseId = Number(searchParams.get("courseId"));
  const [isLoading, setIsLoading] = useState(false);
  const useCourseData = useCourse(courseId ?? undefined, setIsLoading, true);

  useEffect(() => {
    //让body无法滚动
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <TrueChat useCourseData={useCourseData} />
      )}
    </>
  );
}

type TabValue = "chat" | "questions" | "detail";

function TrueChat({ useCourseData }: { useCourseData: useCourseReturn }) {
  const [conversationId, setConversationId] = useState<number>(0);
  const auth = useAuth();
  const [tab, setTab] = useState<TabValue>("chat");
  const { messages, sendMessage } = useMessages(conversationId);
  const handleSelectChapter = async (chapterIndex: number) => {
    await auth.init();
    useCourseData.setSelectedChapterIndex(chapterIndex);
    const selectedChapter = useCourseData.chapters[chapterIndex];
    const res = await messageApi.messageGetConversationIdPost({
      data: {
        courseID: useCourseData.course?.courseID || 0,
        chapterID: selectedChapter?.chapterID || 0,
        userID: Number(auth.userInfo?.userId || 0),
      },
    });
    setConversationId(res.data?.conversationID ?? 0);
  };

  const questions = [
    {
      topic: useCourseData.selectedChapter?.topic1,
      answer: useCourseData.selectedChapter?.answer1,
    },
    {
      topic: useCourseData.selectedChapter?.topic2,
      answer: useCourseData.selectedChapter?.answer2,
    },
    {
      topic: useCourseData.selectedChapter?.topic3,
      answer: useCourseData.selectedChapter?.answer3,
    },
    {
      topic: useCourseData.selectedChapter?.topic4,
      answer: useCourseData.selectedChapter?.answer4,
    },
  ];
  const [selectAnswers, setSelectAnswers] = useState<(string | undefined)[]>([
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const getScore = () => {
    const score = selectAnswers.reduce((acc, answer, index) => {
      if (answer === questions[index].answer?.trim()) {
        return acc + 25;
      }
      return acc;
    }, 0);
    return score;
  };

  const score = getScore();

  useEffect(() => {
    if (score) {
      courseApi.courseUpdateChapterTopicScorePost({
        data: {
          chapterID: useCourseData.selectedChapter?.chapterID || 0,
          topicScore: score,
        },
      });
    }
  }, [score]);

  const chatScore = useCourseData.getScoreByIndex(
    useCourseData.selectedChapterIndex + 1
  );
  console.log(chatScore, "chatScore");
  return (
    <SidebarProvider>
      <AppSidebar
        course={useCourseData.course}
        chapters={useCourseData.chapters}
        selectedChapterIndex={useCourseData.selectedChapterIndex}
        setSelectedChapterIndex={handleSelectChapter}
        getScoreByIndex={useCourseData.getScoreByIndex}
        genNowChapterScore={useCourseData.genNowChapterScore}
        genNowCourseScore={useCourseData.genNowCourseScore}
      />
      <main className="w-full h-screen">
        <Navbar />
        <div
          style={{
            height: "calc(100% - 60px)",
          }}
        >
          {useCourseData.isSelectCourse && useCourseData.course && (
            <div className="p-4">
              <Label className="text-2xl font-bold">
                {useCourseData.course.courseName}
              </Label>
              <p className="text-sm text-gray-500">
                <Markdown>{useCourseData.course.description || ""}</Markdown>
              </p>
            </div>
          )}
          {!useCourseData.isSelectCourse && useCourseData.selectedChapter && (
            <div className="flex flex-col gap-4 p-4 h-full">
              <div className="flex justify-between">
                <Label className="text-2xl font-bold self-center">
                  {`${useCourseData.selectedChapter.chapterName}`}
                </Label>
                <div className="flex p-1 gap-1 rounded-md bg-white">
                  <Tab
                    label="Chat"
                    onClick={() => setTab("chat")}
                    activated={tab === "chat"}
                    score={chatScore}
                  />
                  <Tab
                    label="Questions"
                    onClick={() => setTab("questions")}
                    activated={tab === "questions"}
                    score={score}
                  />
                  <Tab
                    label="Detail"
                    onClick={() => setTab("detail")}
                    activated={tab === "detail"}
                  />
                </div>
              </div>
              {tab === "chat" && (
                <>
                  <Messages messagesData={messages} className="flex-1" />
                  <ChatInput onSend={sendMessage} />
                </>
              )}
              {tab === "questions" && (
                <div className="text-sm text-gray-500 flex flex-col gap-4">
                  {questions.map((question, index) => (
                    <Question
                      key={question.topic}
                      topic={question.topic || ""}
                      selectedAnswer={selectAnswers[index]}
                      selectAnswer={(newAnswer) => {
                        setSelectAnswers(
                          selectAnswers.map((answer, i) => {
                            if (i === index) {
                              return newAnswer;
                            }
                            return answer;
                          })
                        );
                      }}
                    />
                  ))}
                </div>
              )}
              {tab === "detail" && (
                <p className="text-sm text-gray-500">
                  <Markdown>
                    {useCourseData.selectedChapter?.description || ""}
                  </Markdown>
                </p>
              )}
            </div>
          )}
        </div>
      </main>
    </SidebarProvider>
  );
}

function Question({
  topic,
  selectedAnswer,
  selectAnswer,
}: {
  topic: string;
  selectedAnswer: string | undefined;
  selectAnswer: (answer: string) => void;
}) {
  const answers = ["A", "B", "C", "D"];
  return (
    <div className="flex flex-col gap-2">
      <div className="text-lg font-bold">{topic}</div>
      <div className="flex gap-2">
        {answers.map((answer) => (
          <div key={answer} className="flex items-center gap-2">
            <Checkbox
              key={answer}
              checked={selectedAnswer === answer}
              onCheckedChange={() => {
                selectAnswer(answer);
              }}
            />
            <div>{answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tab({
  label,
  onClick,
  activated,
  score,
}: {
  label: string;
  onClick?: () => void;
  activated: boolean;
  score?: number;
}) {
  return (
    <div
      className={cn(
        "px-2 py-1 bg-white relative font-medium cursor-pointer rounded-sm",
        activated && "bg-secondary"
      )}
      onClick={onClick}
    >
      {label}
      {score !== undefined && score > 0 && (
        <span className="absolute px-2 rounded-full bg-amber-200 -right-1 -top-2 text-sm text-gray-800">
          {score}
        </span>
      )}
    </div>
  );
}
