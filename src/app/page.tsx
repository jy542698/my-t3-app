import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { WelcomeBox } from "~/app/_components/welcome";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from 焦誉" });
  const serverTime = await api.info.serverTime();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            焦誉的 <span className="text-[hsl(280,100%,70%)]">全栈</span> 作品
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">快速上手 →</h3>
              <div className="text-lg">
                从这里开始：了解如何配置数据库、运行与扩展你的全栈应用。
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">技术文档 →</h3>
              <div className="text-lg">
                深入了解 T3 技术栈、所用库以及部署方式。
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello ? hello.greeting : "Loading tRPC query..."}
            </p>
            <p className="text-lg text-white/80">
              服务器时间：{serverTime.time}
            </p>
            <p className="text-sm text-white/60">
              {serverTime.message}
            </p>
          </div>

          <LatestPost />

          <WelcomeBox />
        </div>
      </main>
    </HydrateClient>
  );
}
