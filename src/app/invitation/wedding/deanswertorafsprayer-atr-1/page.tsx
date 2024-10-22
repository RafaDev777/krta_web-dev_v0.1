"use client";

import TimerSection from "@/app/components/TimerSection";

const contents = {
  brideName: "Sabrina Amadea",
  brideNickName: "Dea",
  groomName: "Rafael Jonathan",
  groomNickName: "Rafael",
  parents: {
    bride: {
      fatherName: "Yuddy Satya",
      motherName: "Vivi Susilo",
    },
    groom: {
      fatherName: "Giovanni Muljadi",
      motherName: "Handajani Widjaja",
    },
  },
  event: {
    holyMatrimony: {
      location: "Gereja Kathedral Jakarta",
      date: "15 November 2024",
      time: "13.00-Selesai",
    },
    wedding: {
      date: "16 November 2024",
      lunch: {
        location: "Legen Restaurant, Hotel Atria Gading Serpong",
        time: {
          noon: "12.00-14.00",
          afterNoon: "14.00-12.00",
        },
      },
      reception: {
        location: "Mahogany Ballroom, Aryaduta Lippo Village",
        time: "19.00-Selesai",
      },
    },
  },
};

const InvitationNavbar = () => {
  return (
    <div className="w-svw flex flex-row justify-center items-center bg-blue-200 min-h-14">
      <div className="flex flex-row max-h-10 justify-between container bg-blue-400 px-5">
        <div>Logo</div>
        <ul className="flex flex-row gap-5">
          <li>Date</li>
          <li>Location</li>
          <li>Info</li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>
  );
};

const LandingSection = () => {
  return (
    <section className="min-h-screen min-w-svw flex justify-center items-center">
      <div className="min-h-80  container flex flex-col  items-center justify-center bg-blue-400">
        <h2>
          {contents.brideNickName} & {contents.groomNickName}
        </h2>
        <h3>We&apos;re getting married</h3>
        <h3>{contents.event.wedding.date}</h3>
      </div>
    </section>
  );
};

const EventInfoSection = () => {
  return (
    <section className="min-w-svw flex items-center justify-center">
      <div className="flex flex-col container items-center justify-center gap-10">
        <h2>Location</h2>
        <div className="flex flex-row justify-between w-full px-10">
          <div className="flex flex-col items-center justify-center">
            <h2>Holy Matrimony</h2>
            <p>{contents.event.holyMatrimony.location}</p>
            <p>{contents.event.holyMatrimony.date}</p>
            <p>{contents.event.holyMatrimony.time}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2>Wedding Lunch</h2>
            <p>{contents.event.wedding.lunch.location}</p>
            <p>{contents.event.wedding.date}</p>
            <p>{contents.event.wedding.lunch.time.noon}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
const RSVPSection = () => {
  return (
    <section className="min-svw min-h-screen flex justify-center items-center align-middle">
      <div className="container flex flex-col justify-center items-center">
        <h2>RSVP</h2>
        <p>
          We can&apos;t wait to celebrate our special day with you, and your
          presence means the world to us! Please let us know if you will be able
          to join in the joy and festivities.
        </p>
        <form id="rsvp-form" className="">
          <label htmlFor="guest-name">Name</label>
          <input
            id="guest-name"
            name="guest-name"
            type="text"
            placeholder="name"
          />
          <p>Will you attending ?</p>
          <input type="checkbox" id="attend" name="attend" value="yes attend" />
          <label htmlFor="attend">yes we will</label>
        </form>
      </div>
    </section>
  );
};
const WishesSection = () => {
  return (
    <section className="min-w-svw flex flex-col justify-center items-center align-middle">
      <div id="container">
        <h2>Drop your wishes for their journey</h2>
        <form id="wishes-form">
          <input type="text" placeholder="write your wish for them here..." />
          <button>Post</button>
        </form>
        <div id="wish_container">
          <h3 className="bold">Posted Name</h3>
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
        <TimerSection targetDate={contents.event.wedding.date} />
        <EventInfoSection />
        <RSVPSection />
        <WishesSection />
        <GallerySection />
      </div>
    </div>
  );
};

export default DeanswertorafsprayerAtria1Page;
