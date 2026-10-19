"use client";

import { useState } from "react";

import { api } from "~/trpc/react";

// 演示：前端把用户输入通过 tRPC 接口传给后端，再显示返回结果
export function WelcomeBox() {
  const [name, setName] = useState("");
  // useQuery 会在 name 变化时自动重新请求后端接口
  const welcomeQuery = api.info.welcome.useQuery(
    { name },
    { enabled: name.length > 0 },
  );

  return (
    <div className="flex w-full max-w-xs flex-col items-center gap-2">
      <input
        type="text"
        placeholder="输入你的名字"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full bg-white/10 px-4 py-2 text-white"
      />
      {welcomeQuery.isSuccess ? (
        <p className="text-lg text-white">{welcomeQuery.data.greeting}</p>
      ) : (
        <p className="text-sm text-white/50">输入名字后，问候语来自后端接口</p>
      )}
    </div>
  );
}
