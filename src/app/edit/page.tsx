"use client";
import { ModelsChapterModel, ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { CourseApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
const courseApi = new CourseApi(apiClient);

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, useForm, UseFormReturn } from "react-hook-form";
import {
  FormDescription,
  FormMessage,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "@/components/app-sidebar";
import useCourse from "@/hooks/useCourse";

export default function Edit() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const useCourseData = useCourse(courseId ?? undefined);
  return (
    <SidebarProvider>
      <AppSidebar
        course={useCourseData.course}
        chapters={useCourseData.chapters}
        selectedChapterIndex={useCourseData.selectedChapterIndex}
        setSelectedChapterIndex={useCourseData.setSelectedChapterIndex}
      />
      <main className="w-full ">
        <SidebarTrigger />
        <div>
          {useCourseData.isSelectCourse && useCourseData.course && (
            <div className="w-full h-full bg-red-500">
              <CourseEditor
                initCourse={useCourseData.course}
                setCourse={useCourseData.setCourse}
              />
            </div>
          )}
          {!useCourseData.isSelectCourse && useCourseData.selectedChapter && (
            <div className="w-full h-full bg-blue-500">
              <ChapterEdit
                initChapter={useCourseData.selectedChapter}
                setChapter={useCourseData.updateSelectedChapter}
              />
            </div>
          )}
        </div>
      </main>
    </SidebarProvider>
  );
}

const courseSchema = z.object({
  courseName: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

const chapterSchema = z.object({
  chapterName: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

function CourseEditor({
  initCourse,
  setCourse,
}: {
  initCourse: ModelsCourseModel;
  setCourse: (course: ModelsCourseModel) => void;
}) {
  const form = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: initCourse,
  });
  const onSubmit = (data: z.infer<typeof courseSchema>) => {
    setCourse(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="courseName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

function ChapterEdit({
  initChapter,
  setChapter,
}: {
  initChapter: ModelsChapterModel;
  setChapter: (chapter: ModelsChapterModel) => void;
}) {
  const form = useForm<z.infer<typeof chapterSchema>>({
    resolver: zodResolver(chapterSchema),
    defaultValues: initChapter,
  });
  const onSubmit = (data: z.infer<typeof chapterSchema>) => {
    setChapter(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="chapterName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Chapter Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
