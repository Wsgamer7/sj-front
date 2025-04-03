import { create } from "zustand";
import { UserApi } from "@/api";
import apiClient from "@/lib/apiConfig";
const userIpi = new UserApi(apiClient);
type useInfo = {
  username: string;
  userId: string;
  role: Role;
  avatar?: string;
  email?: string;
  tel?: string;
};

enum Role {
  TEACHER = 1,
  STUDENT = 2,
}

interface AuthState {
  userInfo: useInfo | undefined;
  setToken: (token: string) => void;
  getToken: () => string | undefined;
  register: (userId: string, password: string, role: Role) => Promise<void>;
  login: (userId: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUserInfo: (userInfo: useInfo) => void;
  postUserInfo: () => Promise<void>;
}

const useAuth = create<AuthState>((set) => ({
  userInfo: undefined,
  setToken: (token) => {
    localStorage.setItem("tk", token);
  },
  getToken: () => {
    const tk = localStorage.getItem("tk");
    return tk ?? undefined;
  },
}));

export default useAuth;
