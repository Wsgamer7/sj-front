"use client";
import { ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import { CourseApi } from "@/api";
import apiClient from "@/lib/apiConfig";
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
const courseSchema = z.object({
  courseID: z.number(),
  courseName: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
});

const chapterSchema = z.object({
  chapterID: z.number(),
  chapterName: z.string().min(2).max(50),
  description: z.string().min(2).max(50),
  createdAt: z.string(),
  difficulty: z.number(),
  courseID: z.number(),
});

export default function Edit() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const courseForm = useForm<z.infer<typeof courseSchema>>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      courseID: 0,
      courseName: "",
      description: "",
    },
  });
  useEffect(() => {
    if (!courseId) {
      return;
    }
    const fetchCourse = async () => {
      const res = await courseApi.courseGetCoursePost({
        courseID: Number(courseId),
      });
      courseForm.reset({
        courseName: res.data?.course?.courseName || "",
        description: res.data?.course?.description || "",
        courseID: res.data?.course?.courseID || 0,
      });
    };

    fetchCourse();
  }, []);

  const onSubmit = (data: z.infer<typeof courseSchema>) => {
    console.log(data);
  };

  return (
    <div>
      <Form {...courseForm}>
        <form
          onSubmit={courseForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={courseForm.control}
            name="courseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
