import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

export default function Page({ title, subtitle, children }) {
  return (
    <section className="bg-white dark:bg-neutral-950">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="py-12 sm:py-16"
        >
          {title && (
            <div className="mb-10">
              <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">{subtitle}</p>
              )}
            </div>
          )}
          {children}
        </motion.div>
      </Container>
    </section>
  );
}
