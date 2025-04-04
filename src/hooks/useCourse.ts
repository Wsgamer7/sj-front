import { useEffect } from "react";

import { ModelsChapterModel } from "@/api";

import { ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import apiClient from "@/lib/apiConfig";
import { CourseApi } from "@/api";
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
      setChapters(res.data?.chapters || []);
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

  const addChapter = (index: number, chapter: ModelsChapterModel) => {
    const newChapters = [...chapters];
    newChapters.splice(index, 0, chapter);
    setChapters(newChapters);
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
  };
}
