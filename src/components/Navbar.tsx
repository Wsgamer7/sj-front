"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useAuth from "@/hooks/useAuth";
import { Label } from "@/components/ui/label";
import { CourseApi, ModelsCourseModel } from "@/api";
import apiClient from "@/lib/apiConfig";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
const courseApi = new CourseApi(apiClient);
export default function Navbar() {
  const auth = useAuth();
  const router = useRouter();
  const [courses, setCourses] = useState<ModelsCourseModel[]>([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await courseApi.courseScanCoursePost({
        data: {},
      });
      setCourses(res?.data?.course_list || []);
    };
    fetchCourses();
  }, []);
  return (
    <div className="flex items-center justify-between px-4 py-2 w-full bg-white shadow-md">
      <a
        onClick={() => {
          router.push("/");
        }}
        className="text-2xl font-bold cursor-pointer"
        target="_blank"
      >
        Course.ai
      </a>
      <Menubar className="border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger>
            <Avatar>
              <AvatarImage src={auth.userInfo?.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </MenubarTrigger>
          <MenubarContent>
            <div className="pl-2 text-sm text-gray-500">
              {`${auth.userInfo?.username}`}
            </div>
            <MenubarItem
              onClick={() => {
                window.location.href = `/profile`;
              }}
            >
              修改个人信息
            </MenubarItem>
            <MenubarSeparator />
            <div className="pl-2 text-xs  text-gray-500">已加入的课程</div>
            <div className="flex flex-col gap-2">
              {courses.map((course) => (
                <MenubarItem
                  key={course.courseID}
                  onClick={() => {
                    window.location.assign(`/chat?courseId=${course.courseID}`);
                  }}
                >
                  {course.courseName}
                </MenubarItem>
              ))}
            </div>
            <MenubarSeparator />
            <MenubarItem
              onClick={() => {
                auth.logout().then(() => {
                  router.push("/login");
                });
              }}
            >
              登出
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
