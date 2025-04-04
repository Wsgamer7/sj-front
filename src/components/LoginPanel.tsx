"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useAuth, { Role } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
export function LoginPanel() {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">登录</TabsTrigger>
        <TabsTrigger value="register">注册</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
  );
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userAuth = useAuth();
  const router = useRouter();
  const handleLogin = () => {
    userAuth
      .login(username, password)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>登录</CardTitle>
        <CardDescription>请输入你的账号和密码</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">账号</Label>
          <Input
            id="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">密码</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLogin}>登录</Button>
      </CardFooter>
    </Card>
  );
}

function RegisterForm() {
  const userAuth = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(Role.STUDENT);
  const handleRegister = () => {
    userAuth
      .register(username, password, role)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>注册</CardTitle>
        <CardDescription>请输入你的账号和密码</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Label htmlFor="role">角色</Label>
        <div className="space-y-1">
          <Select
            onValueChange={(value) => setRole(Number(value))}
            value={role.toString()}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择你的角色" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="2">学生</SelectItem>
                <SelectItem value="1">教师</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label htmlFor="username">账号</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">密码</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleRegister}>注册</Button>
      </CardFooter>
    </Card>
  );
}
