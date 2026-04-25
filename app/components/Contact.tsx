"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { HiEnvelope, HiMapPin, HiArrowRight } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

const CONTACT_INFO = [
  {
    Icon: HiEnvelope,
    label: "Email",
    value: "bgmwork9634@gmail.com",
    href: "mailto:bgmwork9634@gmail.com",
  },
  {
    Icon: SiGithub,
    label: "GitHub",
    value: "github.com/kishi1997",
    href: process.env.NEXT_PUBLIC_MY_GITHUB_URL || "",
  },
  {
    Icon: HiMapPin,
    label: "Location",
    value: "Vancouver, Canada",
    href: null,
  },
];

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");
    setIsSuccess(false);
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
      setResult("Message sent successfully!");
      setIsSuccess(true);
      if (target == null) return;
      target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setIsSuccess(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full px-6 lg:px-12 xl:px-20 py-24 scroll-mt-20 overflow-hidden"
    >
      {/* Section number */}
      <span className="section-number" aria-hidden="true">04</span>

      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-4"
      >
        <div className="w-8 h-px" style={{ background: "var(--accent)" }} />
        <span
          className="text-xs font-Mono tracking-[0.2em] uppercase"
          style={{ color: "var(--accent)" }}
        >
          Let&apos;s work together
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-Syne font-extrabold mb-16"
        style={{ color: "var(--text)" }}
      >
        Get in touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: intro + contact info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10"
        >
          <div>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "var(--text-muted)" }}
            >
              I&apos;m open to freelance projects, full-time roles, and creative
              collaborations. Whether you have a big idea or just want to say
              hi — my inbox is always open.
            </p>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {CONTACT_INFO.map(({ Icon, label, value, href }) => {
              const inner = (
                <div
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="icon-circle flex-shrink-0">
                    <Icon className="w-5 h-5" style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <div
                      className="text-[0.6rem] font-Mono tracking-[0.15em] uppercase mb-0.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {label}
                    </div>
                    <div
                      className="text-sm font-Syne font-bold"
                      style={{ color: "var(--text)" }}
                    >
                      {value}
                    </div>
                  </div>
                </div>
              );

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="block hover:scale-[1.02] transition-transform duration-200"
                >
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          onSubmit={onSubmit}
          method="POST"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[0.6rem] font-Mono tracking-[0.15em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="neon-input"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[0.6rem] font-Mono tracking-[0.15em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="neon-input"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              className="text-[0.6rem] font-Mono tracking-[0.15em] uppercase"
              style={{ color: "var(--text-muted)" }}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              required
              className="neon-input resize-none"
            />
          </div>

          {/* Submit */}
          <div className="flex items-center gap-4 mt-2">
            <button type="submit" className="btn-accent">
              Send message
              <HiArrowRight className="w-3.5 h-3.5" />
            </button>
            {result && (
              <p
                className="text-xs font-Mono"
                style={{ color: isSuccess ? "var(--accent)" : "var(--text-muted)" }}
              >
                {result}
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
