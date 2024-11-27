const { PrismaClient } = require('@prisma/client')

const database = new PrismaClient()

async function main() {
  try {
    const categories = [
      { name: 'Computer Science' },
      { name: 'Music' },
      { name: 'Fitness' },
      { name: 'Photography' },
      { name: 'Accounting' },
      { name: 'Engineering' },
      { name: 'Filming' },
    ]

    for (const category of categories) {
      await database.category.create({ data: category })
    }

    console.log('🟢 Seed script run successfully!🟢')
  } catch (error) {
    console.log('🔴 Error in seed script 🔴', error)
  } finally {
    await database.$disconnect()
  }
}

main()
