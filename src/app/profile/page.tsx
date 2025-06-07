"use client";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { CardHeader } from "@/components/ui/card";
import { CardTitle } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string>("");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>修改个人信息</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label>昵称</Label>
            <Input
              id="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label>头像</Label>
            <label htmlFor="avatar">
              {!avatarPreview && (
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 text-3xl font-bold cursor-pointer hover:bg-gray-300 transition-all select-none mb-2">
                  +
                </div>
              )}
              {avatarPreview && (
                <img
                  src={avatarPreview}
                  alt="头像预览"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    marginTop: 8,
                  }}
                />
              )}
            </label>
            <input
              type="file"
              className="hidden"
              id="avatar"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files && e.target.files[0];
                if (file) {
                  setAvatarPreview(URL.createObjectURL(file));
                }
              }}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>确定</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
