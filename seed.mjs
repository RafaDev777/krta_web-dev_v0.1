import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.invitation.createMany({
		data: [
			{
				slug: 'deanswertorafsprayer-atr-1',
			},
			{
				slug: 'deanswertorafsprayer-atr-2',
			},
			{
				slug: 'deanswertorafsprayer-ard',
			},
		],
	});

	console.log('Seed data added successfully!');
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
