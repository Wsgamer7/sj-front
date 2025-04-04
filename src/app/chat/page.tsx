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
const messageApi = new MessageApi(apiClient);

export default function Chat() {
  const searchParams = useSearchParams();
  const courseId = Number(searchParams.get("courseId"));
  const [isLoading, setIsLoading] = useState(false);
  const useCourseData = useCourse(courseId ?? undefined, setIsLoading);

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
        courseID: useCourseData.course?.id || 0,
        chapterID: selectedChapter.id,
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
      />
      <main className="w-full ">
        <SidebarTrigger />
        <div>
          {useCourseData.isSelectCourse && useCourseData.course && (
            <div className="p-4">
              <Label className="text-2xl font-bold">
                {useCourseData.course.courseName}
              </Label>
              <p className="text-sm text-gray-500">
                {useCourseData.course.description}
              </p>
            </div>
          )}
          {!useCourseData.isSelectCourse && useCourseData.selectedChapter && (
            <div>
              <h1>Chapter chatter</h1>
              <Messages messagesData={messages} />
              <ChatInput onSend={sendMessage} />
            </div>
          )}
        </div>
      </main>
    </SidebarProvider>
  );
}
