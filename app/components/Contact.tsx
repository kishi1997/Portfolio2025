import { assets } from "@/assets/assets";
import React, { useState } from "react";
import Image from "next/image";
const Contact = () => {
  const [result, setResult] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.currentTarget);

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
      e.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Contact with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I&apos;d love to hear from you! If you have any questions, comments, or
        just want to say hello, feel free to reach out.
      </p>
      <form onSubmit={onSubmit} method="POST" className="max-w-2xl mx-auto">
        <input
          type="hidden"
          name="access_key"
          value="${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}"
        />
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 mb-6 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
        ></textarea>
        <button
          className="cursor-pointer py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white mx-auto rounded-full duration-500 hover:bg-black"
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
        </button>
        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
