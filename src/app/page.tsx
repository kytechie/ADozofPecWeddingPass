"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import RSVP from "@/components/RSVP";
import Journey from "@/components/Journey";
import WeddingTimeline from "@/components/WeddingTimeline";
import Letter from "@/components/Letter";
import Gallery from "@/components/Gallery";
import Details from "@/components/Details";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";

import FloatingNav from "@/components/FloatingNav";
import MusicPlayer from "@/components/MusicPlayer";
import Petals from "@/components/Petals";

export default function Home() {
  const [entered, setEntered] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!entered ? (
        <motion.div
          key="cover"
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
            },
          }}
        >
          <Cover onEnter={() => setEntered(true)} />
        </motion.div>
      ) : (
        <motion.main
          key="website"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Petals />
          <FloatingNav />
          <MusicPlayer />

          <Hero />

          <RSVP />

          <Journey />

          <Gallery />

          <Details />

          <Letter />

          <WeddingTimeline />

          <Countdown />

          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}