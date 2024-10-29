'use client';
import { useRef, useState, useEffect } from 'react';
const MusicPlayer = () => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	// const handlePlayPause = () => {
	// 	if (audioRef.current) {
	// 		if (isPlaying) {
	// 			audioRef.current.pause();
	// 		} else {
	// 			audioRef.current.play();
	// 		}
	// 		setIsPlaying(!isPlaying);
	// 	}
	// };

	const togglePlaying = () => setIsPlaying((prev) => !prev);

	useEffect(() => {
		if (audioRef && audioRef.current) {
			if (isPlaying) {
				audioRef.current.play();
			} else {
				audioRef.current.pause();
			}
		}
	}, [isPlaying]);

	return (
		<div className="fixed right-5 bottom-5 rounded-full overflow-hidden z-10">
			<audio ref={audioRef} src="/wedding/deanswertorafsprayer/music/bg.mp3" />
			<button
				onClickCapture={togglePlaying}
				className="bg-black p-5 text-white"
			>
				{isPlaying ? 'Pause' : 'Play'}
			</button>
		</div>
	);
};
export default MusicPlayer;
