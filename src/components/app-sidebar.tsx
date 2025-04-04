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

export function AppSidebar({
  course,
  chapters,
  selectedChapterIndex,
  setSelectedChapterIndex,
}: {
  course?: ModelsCourseModel;
  chapters: ModelsChapterModel[];

  selectedChapterIndex: number;
  setSelectedChapterIndex: (index: number) => void;
}) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel
            onClick={() => {
              setSelectedChapterIndex(-1);
            }}
          >
            {course?.courseName}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {chapters.map((chapter, index) => (
                <SidebarMenuItem
                  key={chapter.chapterID}
                  className={`${
                    index === selectedChapterIndex ? "bg-blue-500" : ""
                  }`}
                  onClick={() => setSelectedChapterIndex(index)}
                >
                  {chapter.chapterName}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
