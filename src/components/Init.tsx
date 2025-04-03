import { useEffect } from "react";
import useAuth from "@/hooks/useAuth";

export default function Init() {
  const { fetchUserInfo, getToken } = useAuth();
  useEffect(() => {
    const tk = getToken();
    if (!tk) {
      return;
    }
    fetchUserInfo();
  }, []);
  return null;
}
