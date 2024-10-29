'use client';
import { useState } from 'react';
import { Bodoni_Moda } from 'next/font/google';

const serif = Bodoni_Moda({
	weight: '400',
	subsets: ['latin'],
});

interface RsvpData {
	guestName: string;
	attending: boolean;
	adults: number;
	kids: number;
	invitationSlug: string;
}

interface RsvpFormProps {
	invitationSlug: string;
}
const RSVPSection = ({ invitationSlug }: RsvpFormProps) => {
	const [isAttending, setIsAttending] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleRsvpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		// Get form data
		const formElement = e.currentTarget;
		const formData = new FormData(formElement);

		const rsvpData: RsvpData = {
			guestName: formData.get('guest-name') as string,
			attending: isAttending,
			adults: parseInt(formData.get('adults') as string) || 0,
			kids: parseInt(formData.get('kids') as string) || 0,
			invitationSlug: invitationSlug,
		};

		try {
			const response = await fetch('/api/rsvp', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(rsvpData),
			});

			if (response.ok) {
				// const rsvp = await response.json();
				// Reset form
				formElement.reset();
				setIsAttending(false);
				// You can add success message or redirect here
			} else {
				const error = await response.json();
				setError(error.message);
			}
		} catch (err) {
			setError('Failed to submit RSVP. Please try again.');
			console.log(err, error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="min-w-full min-h-fit flex justify-center items-center align-middle py-20 bg-yellow-700/10 ">
			<div className="container flex flex-col justify-center items-center max-w-[50%] text-center">
				<h2 className={`${serif.className} mb-10 text-3xl`}>RSVP</h2>
				<p>
					We can&apos;t wait to celebrate our special day with you, and your
					presence means the world to us! Please let us know if you will be able
					to join in the joy and festivities.
				</p>
				<form
					id="rsvp-form"
					onSubmit={handleRsvpSubmit}
					className="mt-10 min-w-fit"
				>
					<br />
					<input
						id="guest-name"
						name="guest-name"
						type="text"
						placeholder="Please Enter your full name"
						className="min-w-80 border-black border-b-2 bg-white mb-2"
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
							<p className="mt-5 mb-2">
								How many person will attend?(including you)
							</p>
							<input
								type="number"
								id="adults"
								name="adults"
								placeholder="Adults?"
								className="max-w-16 mr-8 border-black border-b-2 bg-white"
							/>
							<input
								type="number"
								id="kids"
								name="kids"
								placeholder="Kids?"
								className="max-w-16 bg-white border-black border-b-2"
							/>
						</div>
					)}
					<button
						type="submit"
						disabled={isSubmitting}
						className="mt-10 bg-yellow-700/50  hover:bg-yellow-700/80 px-8 py-2 rounded-xl text-white font-semibold"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default RSVPSection;
