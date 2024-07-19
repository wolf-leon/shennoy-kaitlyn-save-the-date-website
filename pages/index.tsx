import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import DefaultLayout from "@/layouts/default";
import { Divider, Image } from "@nextui-org/react";
import { parseDate } from "@internationalized/date";
import React from "react";
import CountdownTimer from "@/components/ContdownTimer";
import { isDateInPast } from "@/helper";

export default function IndexPage() {
  const countdownDate = new Date('2025-01-15T00:00:07');
  let defaultDate = parseDate("2025-01-15");
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  const enhancedBackgroundStyle = {
    background: 'linear-gradient(135deg, #50C878 25%, #A9DFBF 75%)',
    border: '2px solid #FFD700',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const renderCalendar = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDay = new Date(2025, 0, 1).getDay();
    const totalDays = 31;
    let dayCounter = 1;
    const weeks = [];

    for (let week = 0; week < 5; week++) {
      const days = [];

      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < firstDay) {
          days.push(
            <td key={`empty-${week}-${day}`} style={{
              borderCollapse: 'collapse',
              border: '4px solid #000000', // Default table border
            }}
            className="text-center py-2 border border-black"></td>
          );
        } else if (dayCounter <= totalDays) {
          days.push(
            <td key={`day-${week}-${day}`} style={{
              borderCollapse: 'collapse',
              border: '4px solid #000000', // Default table border
            }}
            className="text-center py-2 border border-black">
              {dayCounter === 15 ? <span>{dayCounter}❤️</span> : dayCounter}
            </td>
          );
          dayCounter++;
        } else {
          days.push(
            <td key={`empty-${week}-${day}`} style={{
              borderCollapse: 'collapse',
              border: '4px solid #000000', // Default table border
            }}
            className="text-center py-2 border border-black"></td>
          );
        }
      }

      weeks.push(<tr key={`week-${week}`}>{days}</tr>);
    }

    return (
      <table style={{
        borderCollapse: 'collapse',
        width: '100%',
        border: '4px solid #000000', // Default table border
      }}>
        <thead style={{
          borderCollapse: 'collapse',
          border: '4px solid #000000', // Default table border
        }}>
          <tr style={{
            borderCollapse: 'collapse',
            width: '100%',
            border: '4px solid #000000', // Default table border
          }}>
            {daysOfWeek.map(day => (
              <th key={day} className="border py-2 border-black">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody style={{
          borderCollapse: 'collapse',
          width: '100%',
          border: '4px solid #000000', // Default table border
        }}>{weeks}</tbody>
      </table>
    );
  };

  return (
    <DefaultLayout>
      {/* Section for Intro */}
      <section className="flex flex-col items-center justify-center gap-4 py-2 md:py-2 mb-6 relative">
        <div className="w-full md:w-3/4 lg:w-1/2 text-center my-8">
          <div className="inline-block px-6 py-4 rounded-lg" style={enhancedBackgroundStyle}>
            <h1 className="text-3xl font-bold text-white font-cursive">Join Us in Celebrating Our Love</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={400}
          src="/7.jpeg"
          alt="Couple picture"
          className="items-center justify-center"
        />
      </section>

      {/* Text Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 text-center">
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
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-6">
          <div className="inline-block px-6 py-4 rounded-lg" style={{ background: 'linear-gradient(135deg, #1E90FF 50%, #00BFFF 50%)' }}>
            <h1 className="text-3xl font-bold text-white font-cursive">Save the Date</h1>
          </div>
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 text-center">
          <p className="text-2xl leading-relaxed text-gray-800 font-semibold">
            We are excited to announce that our wedding will be held on
          </p>
          <p className="text-3xl leading-relaxed text-gray-900 font-bold my-4">
            15th January 2025
          </p>
          <div className="w-full overflow-x-auto">
            {renderCalendar()}
          </div>
        </div>
      </section>

      <Divider className="my-4" />

      {/* Countdown Timer Section */}
      {
        !isDateInPast(countdownDate) &&
        <CountdownTimer
          deadline={countdownDate}
          title={'Countdown Has Begun!'}
        />
      }

      <Divider className="my-4" />

      {/* RSVP Section */}
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-4">
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mb-6">
          <div className="inline-block px-6 py-4 rounded-lg" style={enhancedBackgroundStyle}>
            <h1 className="text-3xl font-bold text-white font-cursive">Our Special Moment</h1>
          </div>
        </div>
        <Image
          isBlurred
          width={400}
          src="/6.jpeg"
          alt="Couple picture"
          className="items-center justify-center"
        />
        <div className="w-full md:w-3/4 lg:w-1/2 text-center mt-6">
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
                By clicking the <Code>RSVP Invitation Now</Code> button above, you will be taken to a Google Form. Kindly note that the form can only be filled out once.
              </p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
