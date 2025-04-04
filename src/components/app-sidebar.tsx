import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModelsChapterModel, ModelsCourseModel } from "@/api";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
export function AppSidebar({
  course,
  chapters,
  selectedChapterIndex,
  setSelectedChapterIndex,
  addChapterBtn,
  deleteChapter,
  getScoreByIndex,
  genNowChapterScore,
  genNowCourseScore,
}: {
  course?: ModelsCourseModel;
  chapters: ModelsChapterModel[];
  selectedChapterIndex: number;
  setSelectedChapterIndex: (index: number) => void;
  addChapterBtn?: React.ReactNode;
  deleteChapter?: (chapterID?: number) => void;
  getScoreByIndex?: (index: number) => number;
  genNowChapterScore?: () => Promise<void>;
  genNowCourseScore?: () => Promise<void>;
}) {
  const pathname = usePathname();
  const canDelete = pathname.includes("edit");
  return (
    <Sidebar>
      <SidebarContent className="relative">
        <SidebarGroup className="flex flex-col gap-4">
          <SidebarGroupLabel
            className="text-xl font-bold text-amber-950 cursor-pointer"
            onClick={() => {
              setSelectedChapterIndex(-1);
            }}
          >
            {course?.courseName || "未命名课程"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {addChapterBtn}
              <div className="flex flex-col gap-2 w-full">
                {chapters.map((chapter, index) => (
                  <SidebarMenuItem
                    key={chapter.chapterID}
                    className={cn(
                      "group/item  relative rounded-md p-2 cursor-pointer hover:bg-secondary",
                      index === selectedChapterIndex && "font-bold bg-secondary"
                    )}
                    onClick={() => setSelectedChapterIndex(index)}
                  >
                    {`第${chapter.index}节: ${chapter.chapterName}`}
                    {canDelete && (
                      <X
                        className="w-4 h-4 hover:bg-gray-300 hidden rounded-xs group-hover/item:block absolute cursor-pointer right-2 top-1/2 -translate-y-1/2"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteChapter?.(chapter.chapterID);
                        }}
                      />
                    )}
                    {!canDelete && (
                      <div
                        className={cn(
                          "text-sm absolute right-2 top-1/2 -translate-y-1/2"
                        )}
                        style={{
                          display: getScoreByIndex?.(index)! ? "block" : "none",
                          color:
                            getScoreByIndex?.(index)! > 60 ? "green" : "red",
                        }}
                      >
                        {getScoreByIndex?.(index)!}
                      </div>
                    )}
                  </SidebarMenuItem>
                ))}
              </div>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {!canDelete && (
          <SidebarFooter className="absolute bottom-0 left-0 right-0">
            <Button
              variant="outline"
              className="w-full"
              onClick={genNowChapterScore}
            >
              完成章节
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={genNowCourseScore}
            >
              完成课程
            </Button>
          </SidebarFooter>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
