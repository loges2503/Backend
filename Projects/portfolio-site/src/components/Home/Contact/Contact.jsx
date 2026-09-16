// src/components/Home/Contact/Contact.jsx
import React, { useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import Button from "@/components/Button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'ok' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    // TODO: replace with your actual Formspree endpoint
    const endpoint = "https://formspree.io/f/your-form-id";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("ok");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-background/50">
      <AnimatedContainer className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-8 text-primary">Contact Me</h2>
        <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Email"
            required
            className="p-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            required
            className="p-3 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" className="self-center" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>
        </form>
        {status === "ok" && (
          <p className="mt-4 text-center text-green-600">✅ Message sent! Thank you.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-center text-red-600">❌ Something went wrong. Please try again.</p>
        )}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={28} className="text-primary hover:text-primary/80 transition" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub size={28} className="text-primary hover:text-primary/80 transition" />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope size={28} className="text-primary hover:text-primary/80 transition" />
          </a>
        </div>
      </AnimatedContainer>
    </section>
  );
}
