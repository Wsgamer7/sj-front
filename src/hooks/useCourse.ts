import { useEffect } from "react";

import { ModelsChapterModel } from "@/api";

import { ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import apiClient from "@/lib/apiConfig";
import { CourseApi } from "@/api";
import { toast } from "sonner";
const courseApi = new CourseApi(apiClient);

interface useCourseReturn {
  course: ModelsCourseModel | undefined;
  chapters: ModelsChapterModel[];
  selectedChapterIndex: number;
  isSelectCourse: boolean;
  selectedChapter: ModelsChapterModel | undefined;
  setSelectedChapterIndex: (index: number) => void;
  setCourse: (course: ModelsCourseModel) => void;
  setChapters: (chapters: ModelsChapterModel[]) => void;
  updateSelectedChapter: (chapter: ModelsChapterModel) => void;
  addChapter: (index: number, chapter: ModelsChapterModel) => void;
  deleteChapter: (chapterID?: number) => void;
}

export default function useCourse(courseId?: string): useCourseReturn {
  const [course, setCourse] = useState<ModelsCourseModel>();

  const [chapters, setChapters] = useState<ModelsChapterModel[]>([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(0);

  const isSelectCourse = selectedChapterIndex === -1;
  const selectedChapter = isSelectCourse
    ? undefined
    : chapters[selectedChapterIndex];
  useEffect(() => {
    if (!courseId) {
      return;
    }
    const fetchCourse = async () => {
      const res = await courseApi.courseGetCoursePost({
        data: {
          courseID: Number(courseId),
        },
      });
      setCourse(res.data?.course);
    };
    const fetchChapters = async () => {
      const res = await courseApi.courseGetChaptersPost({
        data: {
          courseID: Number(courseId),
        },
      });
      setChapters(
        res.data?.chapters?.sort((a, b) => (a.index || 0) - (b.index || 0)) ||
          []
      );
    };
    fetchCourse();
    fetchChapters();
  }, []);

  const updateSelectedChapter = (chapter: ModelsChapterModel) => {
    const newChapters = chapters.map((oldChapter) => {
      if (oldChapter.chapterID === chapter.chapterID) {
        return chapter;
      }
      return oldChapter;
    });
    setChapters(newChapters);
  };

  //index是chapter.index
  const addChapter = (index: number, chapter: ModelsChapterModel) => {
    const newChapters = [...chapters, chapter];
    newChapters.sort((a, b) => (a.index || 0) - (b.index || 0));
    setChapters(newChapters);
    const foucsArrIndex = newChapters.findIndex(
      (item) => item.index === chapter.index
    );
    setSelectedChapterIndex(foucsArrIndex);
  };

  const deleteChapter = async (chapterID?: number) => {
    if (!chapterID) {
      return;
    }
    const newChapters = chapters.filter((item) => item.chapterID !== chapterID);
    newChapters.sort((a, b) => (a.index || 0) - (b.index || 0));
    const res = await courseApi.courseDeleteChapterPost({
      data: {
        chapterID: chapterID,
      },
    });
    if (res.code) {
      toast.error(res.msg);
      return;
    }
    toast.success("删除成功");
    setChapters(newChapters);
    setSelectedChapterIndex(-1);
  };

  return {
    course,
    chapters,
    selectedChapterIndex,
    isSelectCourse,
    selectedChapter,
    setSelectedChapterIndex,
    setCourse,
    setChapters,
    updateSelectedChapter,
    addChapter,
    deleteChapter,
  };
}
