"use client";

export default function AddToCalendar() {
  const title = "Peculiar & Chiedozie's Wedding";

  const location = "Abuja, Nigeria";

  const details =
    "We're excited to celebrate our wedding with you!";

  const start =
    "20270109T100000";

  const end =
    "20270109T170000";

  const url =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(title)}` +
    `&dates=${start}/${end}` +
    `&details=${encodeURIComponent(details)}` +
    `&location=${encodeURIComponent(location)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        mt-8
        block
        w-full
        rounded-full
        border
        border-[#C9A96A]
        py-4
        text-center
        uppercase
        tracking-[0.25em]
        text-xs
        text-[#5E5650]
        hover:bg-[#C9A96A]
        hover:text-white
        transition
      "
    >
      Add To Google Calendar
    </a>
  );
}