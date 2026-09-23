"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/company";

const fieldClassName =
  "w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent";

// Public by design: Web3Forms keys only allow sending to the inbox they were
// created for. Set in Amplify as an environment variable.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

// Submissions are delivered by Web3Forms to the company inbox.
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!accessKey) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Consultation request: ${data.get("projectType")}`,
          from_name: `${company.name} website`,
          name: data.get("name"),
          email: data.get("email"),
          project_type: data.get("projectType"),
          message: data.get("message"),
          botcheck: data.get("botcheck"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-10 text-center space-y-4" role="status">
        <CheckCircle className="h-12 w-12 text-orange-400 mx-auto" />
        <h3 className="text-xl font-semibold text-white">
          Thanks, your message was sent
        </h3>
        <p className="text-slate-300">
          We’ll get back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for spam bots; hidden from people */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
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
        disabled={status === "sending"}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white"
      >
        {status === "sending" ? (
          <>
            Sending...
            <Loader2 className="ml-2 h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
      {status === "error" ? (
        <p className="text-sm text-red-400 text-center" role="alert">
          Sorry, your message couldn’t be sent. Please email us directly at{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-orange-400 hover:underline"
          >
            {company.email}
          </a>
          .
        </p>
      ) : (
        <p className="text-xs text-slate-400 text-center">
          Prefer email? Write to us directly at{" "}
          <a
            href={`mailto:${company.email}`}
            className="text-orange-400 hover:underline"
          >
            {company.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
