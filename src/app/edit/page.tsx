"use client";
import { ModelsChapterModel, ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { CourseApi } from "@/api";
import apiClient from "@/lib/apiConfig";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
const courseApi = new CourseApi(apiClient);

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppSidebar } from "@/components/app-sidebar";
import useCourse from "@/hooks/useCourse";
import { Label } from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
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
        addChapterBtn={
          <AddChapterBtn
            addChapter={useCourseData.addChapter}
            existChapter={useCourseData.chapters}
            courseId={Number(courseId)}
          />
        }
        deleteChapter={useCourseData.deleteChapter}
      />
      <main className="relative w-full flex flex-col">
        <div className="absolute top-0 left-0 w-full bg-white">
          <Navbar />
        </div>
        <div className="p-5 px-6" style={{ paddingTop: "100px" }}>
          {useCourseData.isSelectCourse && useCourseData.course && (
            <div className="w-full h-full">
              <CourseEditor
                initCourse={useCourseData.course}
                setCourse={useCourseData.setCourse}
              />
            </div>
          )}
          {!useCourseData.isSelectCourse && useCourseData.selectedChapter && (
            <div className="w-full h-full">
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

function isPositiveInteger(str: string) {
  if (typeof str !== "string") {
    return false; // 如果不是字符串，直接返回 false
  }
  const num = parseInt(str, 10);
  return num > 0 && String(num) === str;
}

function CourseEditor({
  initCourse,
  setCourse,
}: {
  initCourse: ModelsCourseModel;
  setCourse: (course: ModelsCourseModel) => void;
}) {
  const [newCourse, setNewCourse] = useState<ModelsCourseModel>(initCourse);
  const handleSaveCourse = async () => {
    setCourse(newCourse);
    const res = await courseApi.courseUpdateCoursePost({
      data: {
        courseID: newCourse.courseID,
        courseName: newCourse.courseName,
        description: newCourse.description,
      },
    });
    if (res.code) {
      toast.error(res.msg);
      return;
    }
    toast.success("保存成功");
  };

  return (
    <div className="flex flex-col gap-2">
      <LabelWrapper label="课程名称">
        <Input
          value={newCourse.courseName}
          onChange={(e) =>
            setNewCourse({ ...newCourse, courseName: e.target.value })
          }
        />
      </LabelWrapper>
      <LabelWrapper label="描述">
        <Textarea
          className="h-[100px]"
          value={newCourse.description}
          onChange={(e) =>
            setNewCourse({ ...newCourse, description: e.target.value })
          }
        />
      </LabelWrapper>
      <div>
        <Button onClick={handleSaveCourse}>Save</Button>
      </div>
    </div>
  );
}

function ChapterEdit({
  initChapter,
  setChapter,
}: {
  initChapter: ModelsChapterModel;
  setChapter: (chapter: ModelsChapterModel) => void;
}) {
  const [newChapter, setNewChapter] = useState<ModelsChapterModel>(initChapter);
  useEffect(() => {
    setNewChapter(initChapter);
  }, [initChapter]);

  const handleSaveChapter = async () => {
    const res = await courseApi.courseUpdateChapterPost({
      data: {
        chapter: newChapter,
      },
    });
    if (res.code) {
      toast.error(res.msg);
      return;
    }
    setChapter(newChapter);
    toast.success("保存成功");
  };

  return (
    <div className="flex flex-col gap-2">
      <LabelWrapper label="章节名称">
        <Input
          value={newChapter.chapterName}
          onChange={(e) =>
            setNewChapter({ ...newChapter, chapterName: e.target.value })
          }
        />
      </LabelWrapper>
      <LabelWrapper label="章节内容">
        <Textarea
          value={newChapter.description}
          onChange={(e) =>
            setNewChapter({ ...newChapter, description: e.target.value })
          }
          className="h-[400px]"
        />
      </LabelWrapper>
      <div>
        <Button onClick={handleSaveChapter}>Save</Button>
      </div>
    </div>
  );
}

function LabelWrapper({
  label,
  children,
  className,
}: {
  label: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

const AddChapterBtn = ({
  addChapter,
  existChapter,
  courseId,
}: {
  addChapter: (index: number, chapter: ModelsChapterModel) => void;
  existChapter: ModelsChapterModel[];
  courseId: number;
}) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState("1");
  const [chapterName, setChapterName] = useState("");
  const [difficulty, setDifficulty] = useState("1");

  const handleSave = async () => {
    if (!isPositiveInteger(index)) {
      toast.error("章节号必须为正整数");
      return;
    }
    if (existChapter.find((chapter) => chapter.index === Number(index))) {
      toast.error("章节号已存在");
      return;
    }
    if (chapterName === "") {
      toast.error("章节名称不能为空");
      return;
    }
    const res = await courseApi.courseCreateChapterPost({
      data: {
        index: Number(index),
        courseID: courseId,
        chapterName,
        description: "",
        difficulty: Number(difficulty),
      },
    });
    if (res.code) {
      toast.error(res.msg);
      return;
    }
    addChapter(Number(index), {
      index: Number(index),
      chapterID: res.data?.chapterID!,
      chapterName,
      description: "",
      difficulty: Number(difficulty),
    });
    toast.success("创建成功");
    setOpen(false);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <Button variant="outline" className="w-full">
          新建章节
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2">
        <LabelWrapper label="章节号">
          <Input value={index} onChange={(e) => setIndex(e.target.value)} />
        </LabelWrapper>
        <LabelWrapper label="章节名称">
          <Input
            value={chapterName}
            onChange={(e) => setChapterName(e.target.value)}
          />
        </LabelWrapper>
        <LabelWrapper label="难度">
          <Select
            value={difficulty}
            onValueChange={(value) => setDifficulty(value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="选择难度" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">简单</SelectItem>
              <SelectItem value="1">中等</SelectItem>
              <SelectItem value="2">困难</SelectItem>
            </SelectContent>
          </Select>
        </LabelWrapper>
        <Button className="mt-3" onClick={handleSave}>
          保存
        </Button>
      </PopoverContent>
    </Popover>
  );
};
