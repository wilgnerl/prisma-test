import { PrismaClient } from '@prisma/client'
import { User } from './type'

const prisma = new PrismaClient()



async function main(): Promise<User[]> {
  // ... you will write your Prisma Client queries here
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
      tags: true
    },
  })
  
  return usersWithPosts
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })