"use client";

import { motion } from "framer-motion";

export default function AboutSummaryCard() {
  return (
    <motion.div
      className="rounded-3xl bg-white/5 border border-white/10 p-5 sm:p-6 shadow-lg shadow-purple-500/10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >

      <h3 className="ard-heading-neon-purple card-heading-neon-blue text-lg sm:text-xl mb-3">
        Turning messy ideas into working software
      </h3>

      <p className="text-sm sm:text-base text-gray-300 mb-3">
        A software engineer and current Master’s student in Computer Science 
        who enjoys taking an idea from rough sketch to something people can actually 
        use. I care a lot about clarity: clear requirements, clear system boundaries, 
        and code that someone else can understand six months later.
      </p>

      <p className="text-sm sm:text-base text-gray-300 mb-3">
        Most of my projects sit at the intersection of data and product: chat-based 
        assistants, stock prediction tools, and web applications that feel simple on 
        the surface but sit on top of well-structured backends.
      </p>

      <p className="text-sm sm:text-base text-gray-300 mb-0">
        I’ve had experience in both industry and academia, and what I enjoy most is 
        working with others designers, product owners, and engineers to ship features 
        that feel thoughtful, responsive, and dependable. I’m especially drawn to problems 
        where a bit of careful engineering can remove friction from someone’s day and make 
        technology feel just a little more human.
      </p>
    </motion.div>
  );
}
