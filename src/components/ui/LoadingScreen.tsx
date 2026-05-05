"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = "unset";
          }, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-black transition-colors duration-500"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo / Name Animation */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white">
                VINCE<span className="text-blue-600">.</span>BULADACO
              </h1>
            </motion.div>

            {/* Progress Container */}
            <div className="w-64 md:w-80 h-1 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                className="h-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
              />
            </div>

            {/* Status Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-4 flex items-center space-x-2"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-medium">
                Initialising Systems
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-bold tabular-nums">
                {Math.min(progress, 100)}%
              </span>
            </motion.div>

            {/* Subtle background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
