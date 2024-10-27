'use client';
import { useState, useRef } from 'react';
import TimerSection from '@/app/components/TimerSection';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Updock, Bodoni_Moda, Gowun_Dodum } from 'next/font/google';

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
	brideNickName: 'Dea',
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
			gmap: 'https://maps.app.goo.gl/zzDTuhENk1WjzfqMA',
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
				gmap: 'https://maps.app.goo.gl/zzDTuhENk1WjzfqMA',
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

const Logo = () => {
	return (
		<svg
			version="1.1"
			id="svg2"
			width="100%"
			height="100%"
			viewBox="0 0 342.25467 326.01868"
			xmlns="http://www.w3.org/2000/svg"
			fill="white"
			className="max-w-10"
		>
			<defs id="defs6">
				<clipPath clipPathUnits="userSpaceOnUse" id="clipPath16">
					<path d="M 0,244.514 H 256.691 V 0 H 0 Z" id="path14" />
				</clipPath>
			</defs>

			<g id="g8" transform="matrix(1.3333333,0,0,-1.3333333,0,326.01867)">
				<g id="g10">
					<g id="g12" clipPath="url(#clipPath16)">
						<g id="g18" transform="translate(61.9736,77.0566)">
							<path
								d="m 0,0 c -2.257,0.548 -3.906,1.083 -6.757,2.063 -6.639,2.763 -13.65,5.542 -19.666,9.493 -9.626,6.323 -17.192,14.82 -22.595,25.132 -1.443,2.755 -2.838,5.388 -4.046,8.207 -1.426,3.327 -2.393,6.583 -3.262,9.973 -2.692,10.496 -3.002,21.215 -2.278,31.895 0.387,5.71 2.16,11.338 3.444,16.972 1.738,7.627 5.538,14.335 9.92,20.673 6.767,9.784 15.234,17.893 25.253,24.344 8.762,5.642 18.127,9.778 28.275,12.422 11.641,3.033 22.588,4.077 35.262,2.955 6.517,-0.578 13.042,-1.617 19.355,-3.241 5.404,-1.391 10.466,-4.064 15.755,-5.958 7.759,-2.778 14.647,-7.143 20.723,-12.474 6.061,-5.318 11.572,-11.332 16.874,-17.431 6.5,-7.477 11.095,-16.236 14.639,-25.429 2.495,-6.469 4.367,-13.197 6.209,-19.894 3.232,-11.756 2.787,-23.834 1.889,-35.766 -0.572,-7.601 -2.571,-15.136 -4.375,-22.593 -2.868,-11.853 -8.05,-22.712 -14.969,-33.54 -0.495,-0.773 -1.66,-0.678 -2.034,0.161 -1.318,2.957 -2.492,5.624 -3.729,8.263 -1.029,2.194 -2.273,4.291 -3.243,6.509 -0.378,0.865 -0.634,2.074 -0.33,2.902 3.639,9.942 5.814,20.215 6.333,30.747 0.598,12.129 0.995,24.286 0.871,36.424 -0.074,7.19 -0.954,14.354 -2.564,21.362 -3.615,15.739 -8.749,30.943 -19.619,43.473 -6.314,7.278 -13.862,13.074 -22.86,16.64 -5.122,2.03 -10.514,3.373 -15.77,5.071 -11.629,3.759 -23.644,2.664 -35.464,2.142 -6.397,-0.283 -12.743,-2.815 -19.014,-4.666 -17.405,-5.139 -31.381,-15.544 -42.673,-29.404 -5.93,-7.279 -10.247,-15.671 -13.056,-24.819 -3.049,-9.928 -4.311,-20.031 -3.4,-30.272 0.613,-6.883 1.828,-13.819 3.727,-20.458 2.92,-10.209 7.87,-19.572 15.015,-27.522 7.476,-8.32 16.555,-14.504 26.989,-18.605 C -8.014,4.51 -5.439,3.47 -2.257,2.286 -1.552,2.024 -0.297,1.573 0.505,1.261 0.394,0.929 0.111,0.332 0,0"
								id="path20"
							/>
						</g>
						<g id="g22" transform="translate(89.5076,121.2642)">
							<path
								d="m 0,0 c -0.618,0 -1.124,0.493 -1.139,1.111 l -0.046,1.92 c 0.081,10.984 0.037,21.968 0.037,32.952 h 0.039 c 0,8.937 -0.125,17.876 0.047,26.809 0.102,5.294 -0.46,10.584 0,15.864 0.245,2.816 5.624,6.298 9.681,6.476 6.847,0.302 13.496,0.446 20.536,0 14.481,-0.917 25.217,-10.359 30.894,-23.958 2.31,-5.536 3.715,-11.8 3.905,-17.784 C 64.21,35.347 61.673,27.7 57.158,20.756 53.284,14.8 48.553,9.729 42.489,6.221 38.607,3.975 34.284,2.071 29.839,1.254 20.377,-0.486 11.288,-0.085 1.747,0 Z m 163.678,-116.489 c 0.679,0.118 0.604,1.106 -0.084,1.131 -4.853,0.177 -9.735,0.782 -14.583,1.178 -8.758,0.715 -16.801,4.01 -24.405,8.063 -9.551,5.09 -17.833,11.816 -24.976,20.158 -8.215,9.594 -14.285,20.375 -19.766,31.583 -3.938,8.055 -7.25,16.446 -11.622,24.251 -5.881,10.5 -13.406,19.72 -24.41,25.447 -1.356,0.706 -2.718,1.403 -4.21,2.165 -1.017,0.519 -0.732,2.037 0.403,2.159 0.718,0.078 1.384,0.173 2.038,0.324 12.418,2.855 23.591,7.819 32.461,17.519 5.802,6.344 9.039,13.722 9.802,21.9 0.75,8.029 -1.347,15.817 -5.697,22.809 -5.245,8.431 -12.561,14.607 -21.588,18.449 -5.347,2.275 -11.09,3.743 -16.774,5.061 -5.084,1.178 -10.323,2.265 -15.507,2.331 -20.715,0.264 -41.435,0.064 -62.153,0.066 h -1.515 c 0,0 0,0 0,0 l -0.202,-0.146 c -0.781,-0.563 -0.773,-1.729 0.016,-2.282 l 0.186,-0.13 c 0,-10e-4 0,-10e-4 0,-10e-4 2.447,-0.187 5.048,0.032 7.456,-0.347 3.906,-0.613 8.157,-1.277 9.471,-5.801 0.752,-2.587 0.646,-5.469 0.648,-8.218 0.028,-32.356 0.015,-64.711 -0.012,-97.066 -0.015,-16.944 -0.015,-33.889 -0.187,-50.831 -0.028,-2.772 -0.938,-5.609 -4.068,-6.623 -2.852,-0.923 -5.763,-1.756 -8.711,-2.262 -1.17,-0.2 -2.376,-0.191 -3.646,-0.148 -1.457,0.05 -1.62,-1.877 -0.166,-1.975 1.042,-0.07 2.127,0.008 2.99,0 14.183,-0.127 28.373,0.237 42.553,0.02 11.112,-0.171 22.104,-0.183 33.018,2.573 6.345,1.603 12.313,3.836 18.043,6.912 0.785,0.422 1.633,0.691 2.463,1.014 0.63,0.245 0.908,0.983 0.597,1.583 l -2.359,4.552 c -0.335,0.646 -1.181,0.817 -1.74,0.351 l -1.464,-1.22 c -7.063,-6.19 -15.301,-10.425 -24.389,-12.322 -6.102,-1.275 -12.527,-1.172 -18.815,-1.313 -2.55,-0.057 -5.311,0.452 -7.627,1.485 -1.952,0.871 -4.224,2.58 -4.882,4.438 -1.084,3.063 -1.297,6.544 -1.321,9.853 -0.118,16.536 -0.055,33.074 -0.055,49.612 -0.001,5.664 0,11.328 0,17.271 0,0.64 0.523,1.169 1.162,1.169 h 2.025 c 7.089,0.007 14.179,-0.031 21.267,0.034 6.101,0.056 11.338,-2.137 14.917,-6.931 4.027,-5.394 7.996,-10.997 10.879,-17.039 4.365,-9.147 7.581,-18.834 11.624,-28.144 6.281,-14.463 14.092,-27.945 25.704,-38.959 9.671,-9.173 20.395,-16.586 33.146,-20.736 4.473,-1.455 9.05,-2.666 13.658,-3.606 5.039,-1.027 8.839,-1.377 15.735,-1.204 3.969,0.099 10.057,1.034 14.672,1.843"
								id="path24"
							/>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

const MusicPlayer = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (isPlaying) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div className="fixed right-5 bottom-5 rounded-full overflow-hidden">
			<audio ref={audioRef} src="/wedding/deanswertorafsprayer/music/bg.mp3" />
			<button onClick={handlePlayPause} className="bg-black p-5">
				{isPlaying ? 'Pause' : 'Play'}
			</button>
		</div>
	);
};

const InvitationNavbar = () => {
	return (
		<div className="py-5 w-svw flex flex-row justify-center items-centermin-h-14 fixed top-0 left-0 bg-slate-600/30">
			<div className="flex flex-row max-h-10 justify-between items-center container px-5">
				<div className=" flex flex-row items-center">
					<Logo />{' '}
					<span className={`${sans.className} text-xl ml-3`}>Dea & Rafael</span>
				</div>
				<ul className="flex flex-row gap-5 items-center align-middle">
					<li>=</li>
				</ul>
			</div>
		</div>
	);
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
			className="min-h-screen min-w-svw flex justify-center items-center"
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
		<section className="min-w-svw min-h-36 flex justify-center py-10">
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

const VerticalTimelineComponent = () => {
	return (
		<VerticalTimeline>
			{contents.story.map((data, index) => {
				return (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
						contentStyle={{
							background: 'rgba(33, 150, 243,0)',
							color: '#fff',
						}}
						contentArrowStyle={{
							borderRight: '0px solid  rgb(33, 150, 243)',
						}}
						date={data.date}
						visible={true}
					>
						<h2
							style={{ color: '#fff' }}
							className={`${serif.className} vertical-timeline-element-title text-white `}
						>
							{data.title}
						</h2>
						<p>{data.description}</p>
						<img src={data.photo} alt="" className="mt-5 rounded-xl" />
					</VerticalTimelineElement>
				);
			})}
		</VerticalTimeline>
	);
};

const StorySection = () => {
	return (
		<section className="min-svw min-h-screen flex justify-center items-center align-middle">
			<div className="container flex flex-col justify-center items-center">
				<h2 className={`${serif.className} text-3xl mb-10`}>Our Story</h2>
				<div>
					<VerticalTimelineComponent />
				</div>
			</div>
		</section>
	);
};
const RSVPSection = () => {
	const [isAttending, setIsAttending] = useState(false);

	return (
		<section className="min-w-full min-h-screen flex justify-center items-center align-middle py-20">
			<div className="container flex flex-col justify-center items-center max-w-[50%] text-center">
				<h2 className={`${serif.className} mb-10 text-3xl`}>RSVP</h2>
				<p>
					We can&apos;t wait to celebrate our special day with you, and your
					presence means the world to us! Please let us know if you will be able
					to join in the joy and festivities.
				</p>
				<form id="rsvp-form" className="mt-10 min-w-fit">
					{/* <label htmlFor="guest-name" className="text-center">Name</label> */}
					<br />
					<input
						id="guest-name"
						name="guest-name"
						type="text"
						placeholder="Please Enter your full name"
						className="min-w-80 border-white border-b-2 bg-black mb-2"
					/>
					<div className="flex flex-row justify-center">
						<p>Will you be attending ?</p>
						<input
							type="checkbox"
							id="attend"
							name="attend"
							className="ml-3 mr-1"
							onChange={(e) => setIsAttending(e.target.checked)}
						/>
						<label htmlFor="attend">Yes I will!</label>
					</div>
					{isAttending && (
						<div>
							<p className="mt-5 mb-2">How many person will attend?</p>
							<input
								type="number"
								id="adults"
								name="adults"
								placeholder="Adults?"
								className="max-w-14 mr-14 border-white border-b-2 bg-black"
							/>
							<input
								type="nnumberr"
								id="kids"
								name="kids"
								placeholder="Kids?"
								className="max-w-14 bg-black border-white border-b-2"
							/>
						</div>
					)}
					<button className="mt-10 bg-gray-600 px-8 py-2 rounded-">
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

const WishCard = () => {
	return (
		<div id="wish_card" className="max-w-[50%] bg-gray-600/10 rounded-lg p-5">
			<h3 className="font-bold mb-5 text-center">Posted Name</h3>
			<p className="text-gray-200 text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas
				laborum voluptatem exercitationem eveniet accusantium sunt autem sint.
				Asperiores quis ex optio suscipit nulla, animi praesentium doloribus
				earum fugiat veniam!
			</p>
		</div>
	);
};

const WishesSection = () => {
	return (
		<section className="min-w-svw flex flex-col justify-center items-center align-middle">
			<div className="container flex flex-col justify-center items-center ">
				<h2 className={`${serif.className} text-3xl mb-10`}>
					Drop your wishes for their journey
				</h2>
				<form
					id="wishes-form"
					className="flex flex-col justify-center items-center mb-20"
				>
					<input
						type="text"
						placeholder="write your wish for them here..."
						className="min-w-80 bg-black border-white border-b-2"
					/>
					<button className="bg-gray-600 mt-5 max-w-48 px-8 py-2 min-w-40 rounded-lg">
						Post
					</button>
				</form>
				<div className="flex flex-col gap-5 justify-center items-center">
					<WishCard />
					<WishCard />
					<WishCard />
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
		<section className="items-center justify-center flex flex-col min-h-screen align-middle py-20">
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

const DeanswertorafsprayerAtria1Page = () => {
	return (
		<div className={`${sans.className}`}>
			<InvitationNavbar />
			<MusicPlayer />
			<div>
				<LandingSection />
				<TimerSection targetDate={contents.event.wedding.date} />
				<EventInfoSection />
				<StorySection />
				<RSVPSection />
				<WishesSection />
				<GallerySection />
			</div>
		</div>
	);
};

export default DeanswertorafsprayerAtria1Page;
