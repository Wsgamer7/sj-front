"use client";
import { useSearchParams } from "next/navigation";
export default function Chat() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");

  return <div>Chat</div>;
}
