import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface CommentData {
	commentatorName: string;
	commentatorMessage: string;
	invitationSlug: string;
}

export async function POST(request: Request) {
	try {
		const commentData: CommentData = await request.json();

		const invitation = await prisma.invitation.findUnique({
			where: {
				slug: commentData.invitationSlug,
			},
		});

		if (!invitation) {
			return NextResponse.json(
				{ message: 'invitation not found' },
				{ status: 404 }
			);
		}

		const rsvp = await prisma.comment.create({
			data: {
				commentator: commentData.commentatorName,
				message: commentData.commentatorMessage,
				invitation: {
					connect: {
						id: invitation.id,
					},
				},
			},
		});
		return NextResponse.json(rsvp, { status: 200 });
	} catch (error) {
		console.error('Error creating RSVP:', error);
		return NextResponse.json(
			{ message: 'Error creating RSVP' },
			{ status: 500 }
		);
	}
}
