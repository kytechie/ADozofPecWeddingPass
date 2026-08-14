"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

type Props = {
  image: string | null;
  onClose: () => void;
};

export default function GalleryLightbox({
  image,
  onClose,
}: Props) {

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>

      {image && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl"
        >

          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              absolute
              top-8
              right-8
              z-50

              rounded-full
              bg-white/10
              backdrop-blur

              p-3

              hover:bg-white/20
              transition
            "
          >
            <X className="text-white" size={24} />
          </button>

          {/* Image */}

          <div className="flex h-full w-full items-center justify-center px-8 py-16">

            <motion.img
              initial={{
                scale: 0.94,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.94,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              src={image}
              alt=""
              className="
                max-h-[90vh]
                max-w-[92vw]

                rounded-[28px]

                shadow-[0_30px_80px_rgba(0,0,0,.45)]

                object-contain
              "
            />

          </div>

          {/* Hint */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: .6 }}
            className="
              absolute
              bottom-10
              left-1/2
              -translate-x-1/2

              uppercase
              tracking-[0.4em]

              text-[10px]
              text-white
            "
          >
            Press ESC to close
          </motion.p>

        </motion.div>

      )}

    </AnimatePresence>
  );
}