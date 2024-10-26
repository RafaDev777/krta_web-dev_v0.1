"use client";
import { useState } from "react";
import TimerSection from "@/app/components/TimerSection";
import { Updock, Bodoni_Moda, Gowun_Dodum } from "next/font/google";


const script = Updock({ weight: "400", subsets: ["latin"] });
const serif = Bodoni_Moda({
  weight: "400",
  subsets: ["latin"],
});
const sans = Gowun_Dodum({
  weight: "400",
  subsets: ["latin"],
});

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
  images: {
    gallery: [
      "/wedding/deanswertorafsprayer/test1.webp",
      "/wedding/deanswertorafsprayer/test2.webp",
      "/wedding/deanswertorafsprayer/test3.webp",
      "/wedding/deanswertorafsprayer/test4.webp",
      "/wedding/deanswertorafsprayer/test5.webp",
      "/wedding/deanswertorafsprayer/test6.webp",
    ],
  },
};

const InvitationNavbar = () => {
  return (
    <div className="min-w-svw flex flex-row justify-center items-center bg-blue-200 min-h-14">
      <div className="flex flex-row max-h-10 justify-between container bg-blue-400 px-5">
        <div>Logoo</div>
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
    <section
      style={{
        backgroundImage: `url("/wedding/deanswertorafsprayer/test1.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen min-w-svw flex justify-center items-center"
    >
      <div className="overlay bg-black/50 min-h-screen min-w-full flex justify-center items-center">
        <div className="min-h-80  container flex flex-col  items-center justify-cente">
          <h2 className={`${script.className} text-9xl mb-10`}>
            {contents.brideNickName}{" "}
            <span className={`${script.className} text-9xl`}>&</span>{" "}
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
        <div className=" w-full columns-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className={`${serif.className} text-xl mb-10`}>
              Holy Matrimony
            </h2>
            <p>{contents.event.holyMatrimony.location}</p>
            <p>{contents.event.holyMatrimony.date}</p>
            <p>{contents.event.holyMatrimony.time}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h2 className={`${serif.className} text-xl mb-10`}>
              Wedding Lunch
            </h2>
            <p>{contents.event.wedding.lunch.location}</p>
            <p>{contents.event.wedding.date}</p>
            <p>{contents.event.wedding.lunch.time.noon}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
const StorySection = () => {
  return (
    <section className="min-svw min-h-screen flex justify-center items-center align-middle">
      <div className="container flex flex-col justify-center items-center">
        <h2 className={`${serif.className} text-3xl mb-10`}>Our Story</h2>
      </div>
    </section>
  );
};
const RSVPSection = () => {
  const [isAttending, setIsAttending]=useState(false)

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
            <input type="checkbox" id="attend" name="attend" className="ml-3 mr-1"
              onChange={(e)=>setIsAttending(e.target.checked)}
            />
          <label htmlFor="attend">Yes I will!</label>
          </div>
          {isAttending && 
          (<div>
          <p className="mt-5 mb-2">How many person will attend?</p>
          <input type="number" id="adults" name="adults"  placeholder="Adults?"className="max-w-14 mr-14 border-white border-b-2 bg-black"/>
          <input type="number" id="kids" name="kids" placeholder="Kids?" className="max-w-14 bg-black border-white border-b-2"/>
          </div>)}
        </form>
      </div>
    </section>
  );
};

const WishCard = () => {
  return (
    <div id="wish_card" className="max-w-[50%] bg-gray-600/10 rounded-lg p-5">
      <h3 className="font-bold mb-5 text-center">Posted Name</h3>
      <p className="text-gray-200 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quas laborum voluptatem exercitationem eveniet accusantium sunt autem sint. Asperiores quis ex optio suscipit nulla, animi praesentium doloribus earum fugiat veniam!</p>
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
        <form id="wishes-form" className="flex flex-col justify-center items-center mb-20">
          <input type="text" placeholder="write your wish for them here..." className="min-w-80 bg-black border-white border-b-2"/>
          <button className="bg-gray-600 mt-5 max-w-48 px-8 py-2 min-w-40 rounded-lg">Post</button>
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
        <div id="image-box" className="columns-3 space-y-3 gap-4">
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
