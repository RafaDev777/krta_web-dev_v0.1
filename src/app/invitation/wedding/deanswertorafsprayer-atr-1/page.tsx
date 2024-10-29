import TimerSection from '@/app/components/TimerSection';
import InvitationNavbar from '@/app/components/InvitationNavbar';
import MusicPlayer from '@/app/components/MusicPlayer';
import StorySection from '@/app/components/StorySection';
import RSVPSection from '@/app/components/RsvpSection';
import CommentForm from '@/app/components/CommentForm';

import 'react-vertical-timeline-component/style.min.css';
import { Updock, Bodoni_Moda, Gowun_Dodum } from 'next/font/google';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const wedding = 'deanswertorafsprayer-atr-1';

const script = Updock({ weight: '400', subsets: ['latin'] });
const serif = Bodoni_Moda({
	weight: '400',
	subsets: ['latin'],
});
const sans = Gowun_Dodum({
	weight: '400',
	subsets: ['latin'],
});

const contents = {
	brideName: 'Sabrina Amadea',
	brideNickName: 'Sabrina',
	groomName: 'Rafael Jonathan',
	groomNickName: 'Rafael',
	parents: {
		bride: {
			fatherName: 'Yuddy Satya',
			motherName: 'Vivi Susilo',
		},
		groom: {
			fatherName: 'Giovanni Muljadi',
			motherName: 'Handajani Widjaja',
		},
	},
	event: {
		holyMatrimony: {
			location: 'Gereja Kathedral Jakarta',
			gmap: 'https://maps.app.goo.gl/TQ5rUcaw1DViuQMm7',
			date: '15 November 2024',
			time: '13.00-Selesai',
		},
		wedding: {
			date: '16 November 2024',
			lunch: {
				location: 'Legen Restaurant, Hotel Atria Gading Serpong',
				gmap: 'https://maps.app.goo.gl/zzDTuhENk1WjzfqMA',
				time: {
					noon: '12.00-14.00',
					afterNoon: '14.00-12.00',
				},
			},
			reception: {
				location: 'Mahogany Ballroom, Aryaduta Lippo Village',
				gmap: 'https://maps.app.goo.gl/eY9maBQJpWss3Wgc9',
				time: '19.00-Selesai',
			},
		},
	},
	images: {
		gallery: [
			'/wedding/deanswertorafsprayer/test1.webp',
			'/wedding/deanswertorafsprayer/test2.webp',
			'/wedding/deanswertorafsprayer/test3.webp',
			'/wedding/deanswertorafsprayer/test4.webp',
			'/wedding/deanswertorafsprayer/test5.webp',
			'/wedding/deanswertorafsprayer/test6.webp',
		],
		maps: {
			location_1:
				'/wedding/deanswertorafsprayer/maps/legen-restaurant-gading-serpong.png',
			location_2:
				'/wedding/deanswertorafsprayer/maps/hotel-aryaduta-lippo-karawaci.png',
			location_3:
				'/wedding/deanswertorafsprayer/maps/gereja-katerdral-jakarta.png',
		},
	},
	story: [
		{
			date: '2020',
			title: 'The Meet Up',
			description: 'When They First Met',
			photo: '/wedding/deanswertorafsprayer/test1.webp',
		},
		{
			date: '2021',
			title: 'The Covid Date Agenda',
			description: 'It is not the prettier, it is covid anyway',
			photo: '/wedding/deanswertorafsprayer/test2.webp',
		},
		{
			date: '2023',
			title: 'The Proposal',
			description: 'They finally decided',
			photo: '/wedding/deanswertorafsprayer/test4.webp',
		},
	],
};

const LandingSection = () => {
	return (
		<section
			style={{
				backgroundImage: `url("/wedding/deanswertorafsprayer/test1.webp")`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className="min-h-screen min-w-svw flex justify-center items-center text-white"
		>
			<div className="overlay bg-black/50 min-h-screen min-w-full flex justify-center items-center">
				<div className="min-h-80  container flex flex-col  items-center justify-center">
					<h2 className={`${script.className} text-9xl mb-10 text-center`}>
						{contents.brideNickName}{' '}
						<span className={`${script.className} text-9xl`}>&</span>{' '}
						{contents.groomNickName}
					</h2>
					<h3 className={`${sans.className} text-xl`}>
						We&apos;re getting married
					</h3>
					<h3 className={`${sans.className} text-xl`}>
						{contents.event.wedding.date}
					</h3>
				</div>
			</div>
		</section>
	);
};

const EventInfoSection = () => {
	return (
		<section className="min-w-svw min-h-fit flex justify-center bg-yellow-700/10 py-20">
			<div className="flex flex-col container items-center justify-start gap-10 py-10">
				<h2 className={`${serif.className} text-3xl mb-10`}>Location</h2>
				<div className=" w-full md:columns-2  columns-1">
					<div className="flex flex-col items-center justify-center py-10">
						<h2 className={`${serif.className} text-xl mb-10`}>
							Holy Matrimony
						</h2>
						<p>{contents.event.holyMatrimony.location}</p>
						<p>{contents.event.holyMatrimony.date}</p>
						<p>{contents.event.holyMatrimony.time}</p>
						<a
							href={contents.event.holyMatrimony.gmap}
							target="_blank"
							rel="noopener"
						>
							<img
								src={contents.images.maps.location_1}
								alt="legen-restaurant-gading-serpong"
								className="max-w-60 rounded-xl mt-5"
							/>
						</a>
					</div>
					<div className="flex flex-col items-center justify-center py-10">
						<h2 className={`${serif.className} text-xl mb-10`}>
							Wedding Lunch
						</h2>
						<p>{contents.event.wedding.lunch.location}</p>
						<p>{contents.event.wedding.date}</p>
						<p>{contents.event.wedding.lunch.time.noon}</p>
						<a
							href={contents.event.wedding.lunch.gmap}
							target="_blank"
							rel="noopener"
						>
							<img
								src={contents.images.maps.location_1}
								alt="legen-restaurant-gading-serpong"
								className="max-w-60 rounded-xl mt-5"
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
interface CommentProps {
	id: string;
	commentator: string;
	message: string;
	invitationId: string;
}
interface WishCardProps {
	comment: CommentProps;
}
const WishCard = ({ comment }: WishCardProps) => {
	return (
		<div
			id="wish_card"
			className="w-screen max-w-[50%] bg-yellow-700/10 rounded-lg p-5"
		>
			<h3 className="font-bold mb-5 text-center">{comment.commentator}</h3>
			<p className="text-yellow-800 text-center">{comment.message}</p>
		</div>
	);
};

const WishesSection = async () => {
	const invitation = await prisma.invitation.findUnique({
		where: {
			slug: wedding,
		},
		include: {
			commentList: true,
		},
	});
	if (!invitation) {
		return <p>invitatation not found</p>;
	}

	return (
		<section className="min-w-svw flex flex-col justify-center items-center align-middle py-20">
			<div className="container flex flex-col justify-center items-center ">
				<h2 className={`${serif.className} text-3xl mb-10`}>
					Drop your wishes for their journey
				</h2>
				<CommentForm invitationSlug={wedding} />
				<div className="flex flex-col gap-5 justify-center items-center">
					{invitation.commentList.map((comment: CommentProps) => (
						<WishCard key={comment.id} comment={comment} />
					))}
				</div>
			</div>
		</section>
	);
};

const GalleryImageCard = ({ dir }: { dir: string }) => {
	return (
		<>
			<div className="rounded-xl overflow-hidden">
				<img src={dir} alt={dir} />
			</div>
		</>
	);
};
const GallerySection = () => {
	return (
		<section className="items-center justify-center flex flex-col min-h-fit align-middle   py-20 bg-yellow-700/10">
			<div className="container flex flex-col justify-center items-center align-middle ">
				<h2 className={`${serif.className} text-3xl mb-10`}>Gallery</h2>
				<div id="image-box" className="columns-2 md:columns-3 space-y-3 gap-4">
					{contents.images.gallery.map((dir, index) => {
						return <GalleryImageCard key={index} dir={dir} />;
					})}
				</div>
			</div>
		</section>
	);
};

const DeanswertorafsprayerAtria1Page = async () => {
	return (
		<div className={`${sans.className}`}>
			<InvitationNavbar />
			<MusicPlayer />
			<div>
				<LandingSection />
				<TimerSection targetDate={contents.event.wedding.date} />
				<EventInfoSection />
				<StorySection data={contents.story} />
				<RSVPSection invitationSlug={wedding} />
				<WishesSection />
				<GallerySection />
			</div>
		</div>
	);
};

export default DeanswertorafsprayerAtria1Page;
