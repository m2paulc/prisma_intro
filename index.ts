import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  /* const allUsers = await prisma.user.findMany()
  const allPost = await prisma.post.count({
    where: {title: ""}
  })
  console.log(allUsers)
  console.log(allPost) */

  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //     posts: {
  //       create: {title: 'Hello World'},
  //     },
  //     profile: {
  //       create: {bio: 'I like turtles'},
  //     }
  //   },
  // })

  const post = await prisma.post.update({
    where: { id: 2 },
    data: {published: true}
  })
  console.log(post)
  
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    },
  })
  console.dir(allUsers, {depth: null})
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