"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const fieldClassName =
  "w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";

// Opens the visitor's email client with the message pre-filled, so the form
// works without a backend.
export function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const projectType = String(data.get("projectType") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `Consultation request: ${projectType}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-slate-300 mb-2 block"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className={fieldClassName}
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-slate-300 mb-2 block"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            className={fieldClassName}
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="contact-project-type"
          className="text-sm font-medium text-slate-300 mb-2 block"
        >
          Project Type
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          className={fieldClassName}
        >
          <option>Web Development</option>
          <option>Custom Software</option>
          <option>Mobile App</option>
          <option>IT Consulting</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-slate-300 mb-2 block"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={fieldClassName}
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      <Button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
      >
        Send Consultation
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-slate-400 text-center">
        This opens your email app. You can also write to us directly at{" "}
        <a
          href={`mailto:${company.email}`}
          className="text-orange-400 hover:underline"
        >
          {company.email}
        </a>
        .
      </p>
    </form>
  );
}
