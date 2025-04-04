import { useEffect, useRef } from "react";

import { ModelsChapterModel } from "@/api";

import { ModelsCourseModel } from "@/api";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import apiClient from "@/lib/apiConfig";
import { CourseApi } from "@/api";
import { toast } from "sonner";
import useAuth from "./useAuth";
const courseApi = new CourseApi(apiClient);

export interface useCourseReturn {
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
  getScoreByIndex: (index: number) => number;
  genNowChapterScore: () => Promise<void>;
  genNowCourseScore: () => Promise<void>;
}

export default function useCourse(
  courseId?: number,
  setIsLoading?: (isLoading: boolean) => void,
  isChat: boolean = false
): useCourseReturn {
  const [course, setCourse] = useState<ModelsCourseModel>();

  const [chapters, setChapters] = useState<ModelsChapterModel[]>([]);
  const [selectedChapterIndex, setSelectedChapterIndex] = useState<number>(-1);

  const useAuthData = useAuth();

  const [chapterIndexToScore, setChapterIndexToScore] = useState<
    Record<number, number>
  >({});
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
    const fetchEditChapters = async () => {
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
    const fetchChatChapters = async () => {
      const res = await courseApi.courseGetChaptersByUserIdPost({
        data: {
          courseID: Number(courseId),
        },
      });

      const fetchedChapters: ModelsChapterModel[] = [];
      const newChapterIndexToScore: Record<number, number> = {};
      res.data?.chapters?.forEach((chapterWithScore) => {
        fetchedChapters.push(chapterWithScore.chapter!);
        newChapterIndexToScore[chapterWithScore.chapter?.index!] =
          chapterWithScore.score!;
      });
      setChapters(fetchedChapters);
      setChapterIndexToScore(newChapterIndexToScore);
    };
    let chapterPromise: Promise<void> = Promise.resolve();
    if (isChat) {
      chapterPromise = fetchChatChapters();
    } else {
      chapterPromise = fetchEditChapters();
    }
    Promise.all([fetchCourse(), chapterPromise]).finally(() => {
      setIsLoading?.(false);
    });
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
  const getScoreByIndex = (index: number) => {
    return chapterIndexToScore[index] || 0;
  };

  const genNowChapterScore = async () => {
    if (!selectedChapter) {
      toast.error("请先选择章节");
      return;
    }
    const res = await courseApi.courseGenChapterScorePost({
      data: {
        chapterID: selectedChapter?.chapterID,
        userID: Number(useAuthData.userInfo?.userId || 0),
      },
    });
    if (res.code) {
      toast.error(res.msg);
      return;
    }
    const newChapterIndex = selectedChapter.index!;
    const newChapterIndexToScore = {
      ...chapterIndexToScore,
      [newChapterIndex]: res.data?.score || 0,
    };
    setChapterIndexToScore(newChapterIndexToScore);
  };
  const genNowCourseScore = async () => {
    courseApi.courseGenCourseFinishPost({
      data: {
        courseID: course?.courseID,
        userID: Number(useAuthData.userInfo?.userId || 0),
      },
    });
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
    getScoreByIndex,
    genNowChapterScore,
    genNowCourseScore,
  };
}
