"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { ModelsCourseModel } from "@/api/models/ModelsCourseModel";
import { CourseApi } from "@/api";
import apiClient from "@/lib/apiConfig";
const courseApi = new CourseApi(apiClient);
export default function Home() {
  const [courseList, setCourseList] = useState<ModelsCourseModel[]>([]);

  useEffect(() => {
    const fetchCourseList = async () => {
      const res = await courseApi.courseScanAllCoursePost();
      if (res.code) {
        throw new Error("获取课程列表失败");
      }
      setCourseList(res.data?.all_course_list || []);
    };
    fetchCourseList();
  }, []);
  return <CourseList courseList={courseList} />;
}

function CourseList({ courseList }: { courseList: ModelsCourseModel[] }) {
  return (
    <div>
      {courseList.map((course) => (
        <SingleCourse key={course.courseID} course={course} />
      ))}
    </div>
  );
}

function SingleCourse({ course }: { course: ModelsCourseModel }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>{course.courseName}</div>
      </SheetTrigger>
      <SheetContent>
        <CourseDetail course={course} />
      </SheetContent>
    </Sheet>
  );
}

function CourseDetail({ course }: { course: ModelsCourseModel }) {
  return (
    <div>
      <div>{course.courseName}</div>
      <div>{course.description}</div>
    </div>
  );
}
