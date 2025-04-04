import { create } from "zustand";
import { UserApi } from "@/api";
import apiClient from "@/lib/apiConfig";
const userIpi = new UserApi(apiClient);
export type useInfo = {
  username: string;
  userId: string;
  role: Role;
  avatar?: string;
  email?: string;
  tel?: string;
};

export enum Role {
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
  fetchUserInfo: () => Promise<void>;
  isLogin: () => boolean;
}

const useAuth = create<AuthState>((set, get) => ({
  userInfo: undefined,
  setToken: (token) => {
    localStorage.setItem("tk", token);
  },
  getToken: () => {
    const tk = localStorage.getItem("tk");
    return tk ?? undefined;
  },
  register: async (userId, password, role) => {
    const res = await userIpi.userRegisterPost({
      data: {
        userID: userId,
        password,
        role,
      },
    });
    if (res.code) {
      throw new Error("注册失败");
    }
    localStorage.setItem("tk", res?.data?.response || "");
  },
  login: async (userId, password) => {
    const res = await userIpi.userLoginPost({
      data: {
        userID: userId,
        password,
      },
    });
    if (res.code) {
      throw new Error("登录失败");
    }
    localStorage.setItem("tk", res?.data?.token || "");
  },
  fetchUserInfo: async () => {
    const res = await userIpi.userGetUserInfoPost({
      data: {},
    });
    if (res.code) {
      throw new Error("获取用户信息失败");
    }
    const data = res.data;
    const userInfo: useInfo = {
      username: data?.userInfo?.nickname || "",
      userId: data?.userInfo?.userID || "",
      role: data?.userInfo?.role || Role.STUDENT,
      avatar: data?.userInfo?.avatar || "",
      email: data?.userInfo?.email || "",
      tel: data?.userInfo?.tel || "",
    };
    set({ userInfo });
  },
  logout: async () => {
    localStorage.removeItem("tk");
    set({ userInfo: undefined });
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
  postUserInfo: async () => {
    const tk = get().getToken();
    if (!tk) {
      throw new Error("请先登录");
    }
    const userInfo = get().userInfo;
    const res = await userIpi.userSetUserInfoPost({
      data: {
        userInfo: {
          userID: userInfo?.userId,
          nickname: userInfo?.username,
          avatar: userInfo?.avatar,
          email: userInfo?.email,
          tel: userInfo?.tel,
        },
      },
    });
    if (res.code) {
      throw new Error("设置用户信息失败");
    }
  },
  isLogin: () => {
    const tk = get().getToken();
    return tk ? true : false;
  },
}));
export default useAuth;
