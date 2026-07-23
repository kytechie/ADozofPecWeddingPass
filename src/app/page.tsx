"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "@/components/Footer";

import Cover from "@/components/Cover";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Countdown from "@/components/Countdown";
import Journey from "@/components/Journey";
import Proposal from "@/components/Proposal";
import WeddingDetails from "@/components/WeddingDetails";
import GiftRegistry from "@/components/GiftRegistry";
import RSVP from "@/components/RSVP";

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
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Hero />

          <Story />

          <Countdown />

          <Journey />

          <Proposal />

          <WeddingDetails />

          <RSVP />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}