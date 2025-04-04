"use client";
import { useSearchParams } from "next/navigation";
import useCourse from "@/hooks/useCourse";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import useMessages from "@/hooks/useMessages";
import { useState } from "react";
import Messages from "@/components/Message";
import ChatInput from "@/components/ChatInput";
type ChatMeta = {
  courseId: string;
  chapterId: string;
  chatId: string;
};

export default function Chat() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const useCourseData = useCourse(courseId ?? undefined);

  const [chatMeta, setChatMeta] = useState<ChatMeta | undefined>(undefined);
  const { messages, sendMessage } = useMessages(chatMeta?.chatId);
  const handleSelectChapter = (chapterIndex: number) => {
    useCourseData.setSelectedChapterIndex(chapterIndex);
    //换成真的接口
    setChatMeta({
      courseId: courseId ?? "",
      chapterId: chapterIndex,
      chatId: "",
    });
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
            <div>
              <h1>Course details</h1>
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
