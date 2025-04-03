"use client";
import { useSearchParams } from "next/navigation";

export default function Edit() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  return <div>Edit</div>;
}
