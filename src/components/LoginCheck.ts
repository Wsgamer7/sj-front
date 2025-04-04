"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginCheck() {
  const router = useRouter();
  const userAuth = useAuth();
  useEffect(() => {
    if (!userAuth.isLogin()) {
      router.push("/login");
    }
  }, []);
  return null;
}
