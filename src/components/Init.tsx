"use client";
import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Init() {
  const { isLogin, init } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!isLogin()) {
      // router.push("/login");
      return;
    }
    init();
  }, []);
  return null;
}
