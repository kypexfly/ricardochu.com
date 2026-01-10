"use client";

import { ContactSchema } from "@/lib/validators";
import { useState } from "react";
import { Icons } from "../icons";
import { Section } from "../section";
import { StaggerAnimateInView, fadeInTop } from "../stagger-animate";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const initialErrorState = {
  ...initialFormState,
  form: "",
};

type ContactFormKeys = keyof typeof initialFormState;

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-red-500 text-sm mb-2 mt-1">{children}</p>;
};

const FormGroup = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex-1">{children}</div>;
};

export function ContactSection() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrorState);
  const [sending, setSending] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const fieldSchema = ContactSchema.shape[name as ContactFormKeys];
    const result = fieldSchema.safeParse(value);

    if (!result.success) {
      const { error } = result;
      setErrors({ ...errors, [name]: error ? [error.flatten().formErrors] : null });
    } else {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDirty(true);
    setSending(true);

    const result = ContactSchema.safeParse(form);

    if (!result.success) {
      const { error } = result;
      setErrors({ ...errors, ...(error.formErrors.fieldErrors as any) });
      setSending(false);
      return;
    }

    const payload = result.data;

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      setForm(initialFormState);
      setSubmitted(true);
    } else {
      setErrors({ ...errors, form: "Something went wrong. Try again later." });
    }

    setSending(false);
  };

  return (
    <Section id="contact" className="sm:px-8 container mx-auto my-0">
      <StaggerAnimateInView variants={fadeInTop}>
        <h2 className="leading-relaxed text-2xl font-bold">Contact</h2>

        {submitted ? (
          <div className="border rounded p-16 mt-3">
            <p className="text-center text-2xl font-bold">🥳 Your message has been sent! 🥳</p>
          </div>
        ) : (
          <>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-3">
              Got a project or question in mind?
            </p>

            <div className="flex-1 text-muted-foreground">
              <form onSubmit={handleOnSubmit} className="space-y-4 max-w-2xl flex-auto">
                <div className="flex gap-3">
                  <FormGroup>
                    <Input
                      className="mt-2"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={form.name}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required
                    />
                    {dirty && errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      className="mt-2"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleOnChange}
                      onBlur={handleOnBlur}
                      required
                    />
                    {dirty && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                  </FormGroup>
                </div>

                <FormGroup>
                  <Textarea
                    className="mt-2"
                    name="message"
                    rows={8}
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    required
                  />
                  {dirty && errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </FormGroup>

                <Button
                  disabled={sending}
                  size="lg"
                  className="sm:w-1/3 text-center text-indigo-100 border-indigo-500 hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500"
                >
                  <Icons.send className="w-5 h-5 mr-2" />
                  <span className="relative">{sending ? "Sending..." : "Send"}</span>
                </Button>

                {dirty && errors.form && <ErrorMessage>{errors.form}</ErrorMessage>}
              </form>
            </div>
          </>
        )}
      </StaggerAnimateInView>
    </Section>
  );
}
