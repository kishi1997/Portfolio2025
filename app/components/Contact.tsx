"use client";
import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const target = e.currentTarget;
    const formData = new FormData(target);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      // Error: Cannot read properties of null (reading 'reset')エラー出るので追加
      if (target == null) return;
      target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat 
      bg-center bg-[length:90%_auto] dark:bg-none"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Contact with me
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I&apos;d love to hear from you! If you have any questions, comments, or
        just want to say hello, feel free to reach out.
      </motion.p>
      <motion.form
        onSubmit={onSubmit}
        method="POST"
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <input
          type="hidden"
          name="access_key"
          value="${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}"
        />
        <div className="grid grid-cols-(--autofit-cols-200) gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-transparent dark:border-white/90"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-transparent dark:border-white/90"
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 mb-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-transparent dark:border-white/90"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="cursor-pointer py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white 
          mx-auto rounded-full duration-500 hover:bg-black dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover/10"
          type="submit"
        >
          Submit now
          <Image
            className="w-4"
            src={assets.right_arrow_white}
            width={0}
            height={0}
            alt="right-arrow-white"
          ></Image>
        </motion.button>
        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
