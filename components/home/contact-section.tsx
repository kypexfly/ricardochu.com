"use client";

import { useState } from "react";
import { Section } from "../section";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { socialList } from "@/data";
import { ContactFormSchema } from "@/lib/validators";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState(initialFormState);

  const [isError, setIsError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      const payload = ContactFormSchema.parse(form);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log(response);
      if (response.ok) {
        setForm(initialFormState);
        setIsError(false);
      }
    } catch (err) {
      setIsError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section className="pt-8 sm:pt-16 border-t">
      <h2 className="mb-6 leading-relaxed text-2xl font-bold flex justify-between">Contact</h2>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          Got a question or project in mind? Let&apos;s chat! Reach out through the contact form,
          email, or social media. I&apos;m here to help!
          <ul className="flex gap-3 mt-2">
            {socialList.map((s) => (
              <li key={s.label}>
                <a
                  href={s.url}
                  target="_blank"
                  className={buttonVariants({ variant: "secondary" })}
                  rel="noopener noreferrer"
                  aria-label={`Open ${s.label} to a new tab`}
                >
                  <s.icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleOnSubmit} className="col-span-2 space-y-4 max-w-2xl flex-auto">
          <div>
            <Label htmlFor="name" className="mb-3">
              Name
            </Label>
            <Input
              className="mt-2"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="mb-3">
              Email
            </Label>
            <Input
              className="mt-2"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="message" className="mb-3">
              Message
            </Label>
            <Textarea
              className="mt-2"
              name="message"
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={handleOnChange}
              required
            />
          </div>

          <Button disabled={sending} className="w-full">
            {sending ? "Sending..." : "Send"}
          </Button>
          {isError && <p className="text-red-500">Something went wrong. Try again later.</p>}
        </form>
      </div>
    </Section>
  );
}