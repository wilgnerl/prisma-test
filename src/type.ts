import { Prisma } from "@prisma/client";

type PrismaUser = Prisma.UserGetPayload<{
  include:{
    posts: true,
    tags: true
  }
}>

type ExtractInnerType<T> = T extends (infer U)[] ? U : T;

type DeepTransform<T> = T extends object
  ? {
      [K in keyof T]: T[K] extends any[] ? DeepTransform<ExtractInnerType<T[K]>>[] : DeepTransform<T[K]>;
    }
  : T;


export type User = DeepTransform<PrismaUser>

