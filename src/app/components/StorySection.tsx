'use client';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { Bodoni_Moda } from 'next/font/google';

const serif = Bodoni_Moda({
	weight: '400',
	subsets: ['latin'],
});

interface Story {
	data: StoryData[];
}

interface StoryData {
	date: string;
	title: string;
	description: string;
	photo: string;
}

const VerticalTimelineComponent = ({ story }: { story: StoryData[] }) => {
	return (
		<VerticalTimeline className="border-black">
			{story.map((data: StoryData, index: number) => {
				return (
					<VerticalTimelineElement
						key={index}
						className="vertical-timeline-element--work"
						contentStyle={{
							background: 'rgba(33, 150, 243,0)',
							color: '#000',
						}}
						contentArrowStyle={{
							borderRight: '0px solid  rgb(33, 150, 243)',
						}}
						date={data.date}
						visible={true}
					>
						<h2
							style={{ color: '#000', fontSize: '1.5rem' }}
							className={`${serif.className} `}
						>
							Test
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

const StorySection = (story: Story) => {
	return (
		<section className="min-svw min-h-screen flex justify-center items-center align-middle py-20">
			<div className="container flex flex-col justify-center items-center">
				<h2 className={`${serif.className} text-3xl mb-10`}>Our Story</h2>
				<div>
					<VerticalTimelineComponent story={story.data} />
				</div>
			</div>
		</section>
	);
};
export default StorySection;
