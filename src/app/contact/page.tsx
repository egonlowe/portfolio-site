"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-8 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6 text-primary">Contact Me</h1>
      
      {/* ✅ Fixed intro text to be adaptive */}
      <p className="mb-8 max-w-xl text-center text-foreground">
        I’d love to hear from you! Whether you have a question, an opportunity,
        or just want to say hi, feel free to send me a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-lightbg p-6 rounded-md shadow-md space-y-4 border border-primary"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-background"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-background"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-primary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent text-text bg-background"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-lightbg font-semibold rounded-md shadow hover:bg-secondary transition-colors"
        >
          Send Message
        </button>

        {/* Status message */}
        {status === "success" && (
          <p className="text-accent font-medium mt-2">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 font-medium mt-2">❌ Something went wrong. Please try again.</p>
        )}
      </form>
    </main>
  );
}
