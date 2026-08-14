import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { GuestProvider } from "@/components/GuestProvider";

const heading = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Peculiar & Chiedozie | 09 January 2027",

  description:
    "Join Peculiar & Chiedozie as they celebrate their wedding on 09 January 2027. View our story, RSVP, event details and celebrate with us.",

  keywords: [
    "Peculiar",
    "Chiedozie",
    "Wedding",
    "Wedding Invitation",
    "Wedding RSVP",
    "Nigeria Wedding",
    "Abuja Wedding",
  ],

  authors: [
    {
      name: "Peculiar Ugbo",
    },
  ],

  creator: "Peculiar Ugbo",

  openGraph: {
    title: "Peculiar & Chiedozie",

    description:
      "Celebrate our special day with us on 09 January 2027.",

    type: "website",

    locale: "en_NG",

    siteName: "Peculiar & Chiedozie",
  },
  metadataBase: new URL("https://adozofpec27.com"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
    >
      <body>
  <GuestProvider>
    {children}
  </GuestProvider>
</body>
    </html>
  );
}