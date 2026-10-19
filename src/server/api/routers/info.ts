import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

// 这是一个全新的接口模块，演示如何自己写 tRPC 接口
export const infoRouter = createTRPCRouter({
  // 查询类接口用 .query；返回服务器当前时间
  serverTime: publicProcedure.query(() => {
    return {
      time: new Date().toISOString(),
      message: "这条数据来自后端 tRPC 接口 info.serverTime",
    };
  }),

  // 带输入的接口：前端传名字，后端拼一句问候
  welcome: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `你好，${input.name}！这是你自己写的第一个接口。`,
      };
    }),
});
