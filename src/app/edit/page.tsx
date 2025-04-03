"use client";
import { ModelsChapterModel, ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { CourseApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import { Sidebar } from "@/components/ui/sidebar";
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

export default function Edit() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const [course, setCourse] = useState<ModelsCourseModel>();
  const [isSelectCourse, setIsSelectCourse] = useState<boolean>(true);

  const [chapters, setChapters] = useState<ModelsChapterModel[]>([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);
  const selectedChapter = chapters[selectedChapterIndex];
  useEffect(() => {
    if (!courseId) {
      return;
    }
    const fetchCourse = async () => {
      const res = await courseApi.courseGetCoursePost({
        courseID: Number(courseId),
      });
      setCourse(res.data?.course);
    };
    const fetchChapters = async () => {
      const res = await courseApi.courseGetChaptersPost({
        courseID: Number(courseId),
      });
      setChapters(res.data?.chapters || []);
    };
    fetchCourse();
    fetchChapters();
  }, []);

  const createEmptyChapter = () => {
    const newChapter = {
      chapterID: undefined,
      chapterName: "",
      description: "",
    };
    setChapters([...chapters, newChapter]);
    setSelectedChapterIndex(chapters.length);
  };

  const handleSetChapter = (chapter: ModelsChapterModel) => {
    const newChapters = chapters.map((oldChapter) => {
      if (oldChapter.chapterID === chapter.chapterID) {
        return chapter;
      }
      return oldChapter;
    });
    setChapters(newChapters);
  };

  return (
    <div className="w-full ">
      <Sidebar />
      {isSelectCourse && course && (
        <div className="w-full h-full bg-red-500">
          <CourseEditor initCourse={course} setCourse={setCourse} />
        </div>
      )}
      {!isSelectCourse && selectedChapter && (
        <div className="w-full h-full bg-blue-500">
          <ChapterEdit
            initChapter={selectedChapter}
            setChapter={handleSetChapter}
          />
        </div>
      )}
    </div>
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
