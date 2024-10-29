import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface RsvpData {
	guestName: string;
	attending: boolean;
	adults: number;
	kids: number;
	invitationSlug: string;
}

export async function POST(request: Request) {
	try {
		const rsvpData: RsvpData = await request.json();

		const invitation = await prisma.invitation.findUnique({
			where: {
				slug: rsvpData.invitationSlug,
			},
		});

		if (!invitation) {
			return NextResponse.json(
				{ message: 'invitation not found' },
				{ status: 404 }
			);
		}

		const rsvp = await prisma.rsvpItem.create({
			data: {
				name: rsvpData.guestName,
				attending: rsvpData.attending,
				adults: rsvpData.adults,
				kids: rsvpData.kids,
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
