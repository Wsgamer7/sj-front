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
import {
  CourseApi,
  CourseApiCourseUserInfo,
  ModelsUserModel,
  UserApi,
} from "@/api";
import apiClient from "@/lib/apiConfig";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
const courseApi = new CourseApi(apiClient);
const userApi = new UserApi(apiClient);
export default function Home() {
  const router = useRouter();
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

  const handleCreateCourse = async () => {
    const res = await courseApi.courseCreateCoursePost({
      data: {},
    });
    const newCourseId = res.data?.courseID;
    if (!newCourseId) {
      toast.error("创建课程失败");
      return;
    }
    window.location.href = `/edit?courseId=${newCourseId}`;
  };
  return (
    <div className="w-full px-16 ">
      <div className="w-full fixed top-0 left-0">
        <Navbar />
      </div>
      <div className=" w-full mt-24 flex flex-col gap-11 justify-center items-center">
        <Button size="lg" onClick={handleCreateCourse}>
          创建课程
        </Button>
        <CourseList courseList={courseList} />
      </div>
    </div>
  );
}

function CourseList({ courseList }: { courseList: ModelsCourseModel[] }) {
  return (
    <div className="w-full flex gap-4 flex-wrap">
      {courseList.map((course) => (
        <SingleCourse key={course.courseID} course={course} />
      ))}
    </div>
  );
}

function SingleCourse({ course }: { course: ModelsCourseModel }) {
  return (
    <Sheet>
      <div className="flex flex-col gap-2 justify-center items-center relative w-[300px] aspect-video">
        <SheetTrigger asChild>
          <img
            className="rounded-md cursor-pointer hover:scale-105 transition-all duration-300"
            src={course.cover || ""}
            alt={course.courseName || ""}
          />
        </SheetTrigger>
        <div className="text-2xl font-mono">{course.courseName}</div>
      </div>

      <SheetContent>
        <CourseDetail course={course} />
      </SheetContent>
    </Sheet>
  );
}

function CourseDetail({ course }: { course: ModelsCourseModel }) {
  const { userInfo } = useAuth();
  const [teacher, setTeacher] = useState<ModelsUserModel | undefined>(
    undefined
  );
  const [studentList, setStudentList] = useState<CourseApiCourseUserInfo[]>([]);
  useEffect(() => {
    const fetchTeacher = async () => {
      const res = await userApi.userGetUserInfoByIdPost({
        data: {
          userID: course.createrID,
        },
      });
      if (res.code) {
        throw new Error("获取教师信息失败");
      }
      setTeacher(res.data?.userInfo);
    };
    const fetchStudentList = async () => {
      const res = await courseApi.courseGetCourseStudentsPost({
        data: {
          courseID: course.courseID,
        },
      });
      if (res.code) {
        throw new Error("获取学生列表失败");
      }
      setStudentList(res.data?.user_infos || []);
    };
    fetchTeacher();
    fetchStudentList();
  }, []);
  const handleJoinCourse = () => {
    if (!userInfo) {
      return;
    }
    courseApi.courseJoinCoursePost({
      data: {
        courseID: course.courseID,
        userID: Number(userInfo.userId),
      },
    });
  };
  const handleStartCourse = () => {
    window.location.href = `/chat?courseId=${course.courseID}`;
  };
  return (
    <div className="flex flex-col justify-between h-full p-5 ">
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">{course.courseName}</div>
        <div className="text-sm text-gray-500">{course.description}</div>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold">教师</div>
          <div className="relative flex gap-2 items-center">
            <img
              className="rounded-full w-10 h-10"
              src={teacher?.avatar || ""}
              alt={teacher?.nickname || ""}
            />
            <div className="text-sm text-gray-500">{teacher?.nickname}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold">学生</div>
          <div className="text-sm text-gray-500 max-h-[300px] overflow-y-auto">
            {studentList.map((item) => (
              <StudentBar
                key={item.user?.userID}
                student={item.user!}
                passed={item.passed || false}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={handleJoinCourse}>
          加入课程
        </Button>
        <Button onClick={handleStartCourse}>开始学习</Button>
      </div>
    </div>
  );
}

function StudentBar({
  student,
  passed,
}: {
  student: ModelsUserModel;
  passed: boolean;
}) {
  return (
    <div className="flex gap-2 items-center">
      <img
        className="rounded-full w-10 h-10"
        src={student.avatar || ""}
        alt={student.nickname || ""}
      />
      <div className="text-sm text-gray-500">{student.nickname}</div>
      <div className="text-sm text-gray-500">{student.userID}</div>
      {passed && <div className="text-sm text-green-500">已通过</div>}
      {!passed && <div className="text-sm text-red-500">未通过</div>}
    </div>
  );
}
