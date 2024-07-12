import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Image, Calendar } from "@nextui-org/react";
import type {DateValue} from "@react-types/calendar";
import {today, getLocalTimeZone,parseDate} from "@internationalized/date";
import React from "react";

export default function IndexPage() {
  let defaultDate = parseDate("2025-01-15");
  let [focusedDate, setFocusedDate] = React.useState<DateValue>(defaultDate);
  return (
    <DefaultLayout>

      {/* Section for Intro */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg: text-center my-8">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #228B22 50%, #32CD32 50%)' }}
          >
            <h1 className="text-3xl font-bold text-white font-cursive py-4">Join Us in Celebrating Our Love</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={600}
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          alt="Couple picture"
          className="items-center justify-center"
        />
      </section>
      
      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-lg leading-relaxed text-gray-700">
          Love has a magical way of bringing two souls together, and our journey is a testament to that. From our first meeting to the many adventures we&apos;ve shared, our bond has grown stronger with each passing day. We are thrilled to embark on this new chapter of our lives and are grateful for the support and love from our family and friends.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mt-4">
          We are filled with joy and excitement for the future. We look forward to celebrating this special occasion with the people who mean the most to us. Thank you for being a part of our journey and for sharing in the happiness of our wedding day.
          </p>
        </div>
      </section>


      {/* Save the Date */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4 bg-blue-100">
        <div className="w-full md:w-3/4 lg: text-center mb-6">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #1E90FF 50%, #00BFFF 50%)' }}
          >
            <h1 className="text-3xl font-bold text-white font-cursive py-4">Save the Date</h1>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg: text-center">
          <p className="text-2xl leading-relaxed text-gray-800 font-semibold">
            We are excited to announce that our wedding will be held on
          </p>
          <p className="text-3xl leading-relaxed text-gray-900 font-bold my-4">
            15th January 2025
          </p>
          <Calendar
            aria-label="Date (Controlled Focused Value)"
            focusedValue={focusedDate}
            value={defaultDate}
            onFocusChange={setFocusedDate}
    />
        </div>
      </section>


      {/* RSVP Section */}
       <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg: text-center mb-6">
          <div
            className="inline-block px-6 rounded-lg"
            style={{ background: 'linear-gradient(135deg, #228B22 50%, #32CD32 50%)' }}
          >
            <h1 className="text-3xl font-bold text-white font-cursive py-4">Our Special Moment</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={600}
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          alt="Couple picture"
          className="items-center justify-center"
        />
        <div className="w-full md:w-3/4 lg: text-center mt-6">
          <p className="text-lg leading-relaxed text-gray-700">
            We are overjoyed to share this special moment with you as we begin our journey together. Your presence at our wedding would mean the world to us, and we would be honored to have you celebrate with us. Please RSVP and let us know if you can join us on our special day.
          </p>
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              class: "mt-6"
            })}
            href={siteConfig.links.rsvplink}
          >
            RSVP Invitation Now 
          </Link>
          <div className="mt-8">
            <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-md">
              <p className="text-gray-700">
                By clicking the <Code>RSVP Invitation Now </Code> button above, you will be taken to a Google Form. Kindly note that the form can only be filled out once.
              </p>
            </div>
          </div>
        </div>
       
      </section>
      
    </DefaultLayout>
  );
}


