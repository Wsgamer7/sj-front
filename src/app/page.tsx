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
import { CourseApi, ModelsUserModel } from "@/api";
import apiClient from "@/lib/apiConfig";
import { Button } from "@/components/ui/button";
const courseApi = new CourseApi(apiClient);
export default function Home() {
  const [courseList, setCourseList] = useState<ModelsCourseModel[]>([]);
  useEffect(() => {
    const fetchCourseList = async () => {
      const res = await courseApi.courseScanAllCoursePost({
        data: {},
      });
      if (res.code) {
        throw new Error("获取课程列表失败");
      }
      setCourseList(res.data?.all_course_list || []);
    };
    fetchCourseList();
  }, []);

  const handleCreateCourse = () => {};
  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      <Button onClick={handleCreateCourse}>创建课程</Button>
      <CourseList courseList={courseList} />
    </div>
  );
}

function CourseList({ courseList }: { courseList: ModelsCourseModel[] }) {
  return (
    <div className="w-full flex gap-2 flex-wrap">
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
  const [teacher, setTeacher] = useState<ModelsUserModel | undefined>(
    undefined
  );
  const [studentList, setStudentList] = useState<ModelsUserModel[]>([]);
  useEffect(() => {}, []);
  return (
    <div>
      <div>{course.courseName}</div>
      <div>{course.description}</div>
    </div>
  );
}
