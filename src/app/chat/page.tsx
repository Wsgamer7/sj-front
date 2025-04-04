"use client";
import { useSearchParams } from "next/navigation";
import useCourse, { useCourseReturn } from "@/hooks/useCourse";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useMessages from "@/hooks/useMessages";
import { useEffect, useState } from "react";
import Messages from "@/components/Message";
import ChatInput from "@/components/ChatInput";
import { MessageApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import useAuth from "@/hooks/useAuth";
import { Label } from "@radix-ui/react-label";
import Navbar from "@/components/Navbar";
import Markdown from "markdown-to-jsx";
const messageApi = new MessageApi(apiClient);

export default function Chat() {
  const searchParams = useSearchParams();
  const courseId = Number(searchParams.get("courseId"));
  const [isLoading, setIsLoading] = useState(false);
  const useCourseData = useCourse(courseId ?? undefined, setIsLoading);

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

function TrueChat({ useCourseData }: { useCourseData: useCourseReturn }) {
  const [conversationId, setConversationId] = useState<number>(0);
  const auth = useAuth();
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
              <Label className="text-2xl font-bold self-center">
                {`${useCourseData.selectedChapter.chapterName}`}
              </Label>
              <Messages messagesData={messages} className="flex-1" />
              <ChatInput onSend={sendMessage} />
            </div>
          )}
        </div>
      </main>
    </SidebarProvider>
  );
}
