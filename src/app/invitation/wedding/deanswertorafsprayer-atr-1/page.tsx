const contents = {
	brideName: 'Sabrina Amadea',
	groomName: 'Rafael Jonathan',
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
			date: '15 November 2024',
			time: '13.00-Selesai',
		},
		wedding: {
			date: '16 November',
			lunch: {
				location: 'Legen Restaurant, Hotel Atria Gading Serpong',
				time: {
					noon: '12.00-14.00',
					afterNoon: '14.00-12.00',
				},
			},
			reception: {
				location: 'Mahogany Ballroom, Aryaduta Lippo Village',
				time: '19.00-Selesai',
			},
		},
	},
};

const InvitationNavbar = () => {
	return (
		<div>
			<div>Logo</div>
			<ul>
				<li>Date</li>
				<li>Location</li>
				<li>Info</li>
				<li>Gallery</li>
			</ul>
		</div>
	);
};
const LandingSection = () => {
	return (
		<section>
			<h2>Sabrina & Rafael</h2>
			<h3>We&apos;re getting married</h3>
			<h3>{contents.event.wedding.date}</h3>
		</section>
	);
};

const TimerSection = () => {
	return (
		<section>
			<span>2 days</span>
			<span> 15 hours</span>
			<span> 38 minutes</span>
		</section>
	);
};

const EventInfoSection = () => {
	return (
		<section>
			<div>
				<h2>Holy Matrimony</h2>
				<p>{contents.event.holyMatrimony.location}</p>
				<p>{contents.event.holyMatrimony.date}</p>
				<p>{contents.event.holyMatrimony.time}</p>
			</div>
		</section>
	);
};
const RSVPSection = () => {
	return (
		<section>
			<form id="rsvp-form">
				<input type="text" placeholder="name" />
				<input type="text" placeholder="attend?" />
			</form>
		</section>
	);
};
const WishesSection = () => {
	return (
		<section>
			<div id="container">
				<h2>Drop your wishes for their journey</h2>
				<div id="wish_container">
					<h3>Posted Name</h3>
					<p>Wishes</p>
				</div>
			</div>
		</section>
	);
};
const GallerySection = () => {
	return (
		<section>
			<div>
				<img alt="" src="" />
			</div>
		</section>
	);
};

const DeanswertorafsprayerAtria1Page = () => {
	return (
		<div>
			<InvitationNavbar />
			<div>
				<LandingSection />
				<TimerSection />
				<EventInfoSection />
				<RSVPSection />
				<WishesSection />
				<GallerySection />
			</div>
		</div>
	);
};

export default DeanswertorafsprayerAtria1Page;
