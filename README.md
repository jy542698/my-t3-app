# 焦誉的全栈作品 · T3 Stack Demo

> 基于 [Create T3 App](https://create.t3.gg/) 搭建的全栈小应用，作为个人学习作品。
> 这是一个真正跑通的前后端一体项目：前端页面 → tRPC 接口 → Prisma ORM → SQLite 数据库，提交的数据会真实落库。

## 技术栈

- **Next.js（App Router）** — React 全栈框架
- **TypeScript** — 全量类型安全
- **tRPC** — 前后端类型共享的 API 层
- **Prisma** — 数据库 ORM（本仓库使用 SQLite）
- **Tailwind CSS** — 原子化样式
- **i18n** — 多语言支持

## 已实现功能

- 首页展示与 tRPC 实时问候
- 通过 tRPC 提交数据，经 Prisma 写入 SQLite 并回显最新记录
- 全栈链路打通：页面 → API → 数据库

## 本地运行

```bash
# 安装依赖
npm install

# 初始化数据库（创建本地 SQLite 文件并同步表结构）
npm run db:push

# 启动开发服务器
npm run dev
```

打开 http://localhost:3000 即可访问。

## 截图

![首页](./screenshot.png)

## 作者

焦誉
