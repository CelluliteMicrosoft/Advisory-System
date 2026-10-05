import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma/client';
import { faker } from '@faker-js/faker';


const adapter = new PrismaMariaDb({
    host: 'localhost',
    port: 3308,
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'advisory_monitoring',
});

const prisma = new PrismaClient({adapter})

async function main() {
    const programNames = [
        'BS Information Technology',
        'BS Computer Science',
        'BS Information System',
    ];
    const programs = await Promise.all(
        programNames.map((name)=>prisma.program.create({data:{name}})),
    );

    const code = [
        'Intro to Computing',
        'Computer Programming 1',
        'Data Structures',
        'Discrete Mathematics',
    ];
    const codes = await Promise.all(
        code.map((name)=>prisma.program.create({data:{name}})),
    );

    const title = [
        'Intro to Computing',
        'Computer Programming 1',
        'Data Structures',
        'Discrete Mathematics',
    ];
    const subject = await Promise.all(
        title.map((name)=>prisma.program.create({data:{name}})),
    );

        const units = [
        'Intro to Computing',
        'Computer Programming 1',
        'Data Structures',
        'Discrete Mathematics',
    ];
    const unit = await Promise.all(
        title.map((name)=>prisma.program.create({data:{name}})),
    );

    const studentsData = Array.from({length:10}).map(()=>({
        name: faker.person.fullName(),
        programId: faker.helpers.arrayElement(programs).id
    }));
    await prisma.student.createMany({data:studentsData});
    console.log('Seeded 3 programs and 10 students'); 
}

main()
    .catch((e)=>console.error(e))
    .finally(async()=> await prisma.$disconnect()) 