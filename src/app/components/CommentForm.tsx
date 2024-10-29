'use client';
import { useState } from 'react';

const CommentForm = ({ invitationSlug }: { invitationSlug: string }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	interface CommentData {
		commentatorName: string;
		commentatorMessage: string;
		invitationSlug: string;
	}
	const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		// Get form data
		const formElement = e.currentTarget;
		const formData = new FormData(formElement);

		const commentData: CommentData = {
			commentatorName: formData.get('commentator-name') as string,
			commentatorMessage: formData.get('commentator-message') as string,
			invitationSlug: invitationSlug,
		};

		try {
			const response = await fetch('/api/comment', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(commentData),
			});

			if (response.ok) {
				formElement.reset();
				window.location.reload();
			} else {
				const error = await response.json();
				setError(error.message);
			}
		} catch (err) {
			setError('Failed to submit comment. Please try again.');
			console.log(err, error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			id="wishes-form"
			className="flex flex-col justify-center items-center mb-20"
			onSubmit={handleCommentSubmit}
		>
			<input
				name="commentator-name"
				type="text"
				placeholder="Name"
				className="min-w-80 bg-white border-black border-b-2 px-3"
			/>
			<textarea
				name="commentator-message"
				placeholder="Write your wish for them here..."
				className="min-w-80 bg-white border-black border-2 mt-5 rounded-xl px-3"
			></textarea>
			<button
				type="submit"
				disabled={isSubmitting}
				className="mt-5  bg-yellow-700/50  hover:bg-yellow-700/80 px-8 py-2 rounded-xl text-white font-semibold"
			>
				Post
			</button>
		</form>
	);
};
export default CommentForm;
