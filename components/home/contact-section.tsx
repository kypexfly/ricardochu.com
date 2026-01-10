"use client";

import { useState } from "react";
import { ContactSchema } from "@/lib/validators";
import { Icons } from "../icons";
import { Section } from "../section";
import { fadeInTop, StaggerAnimateInView } from "../stagger-animate";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

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
  return <p className="mt-1 mb-2 text-red-500 text-sm">{children}</p>;
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

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOnBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    const fieldSchema = ContactSchema.shape[name as ContactFormKeys];
    const result = fieldSchema.safeParse(value);

    if (result.success) {
      setErrors({ ...errors, [name]: null });
    } else {
      const { error } = result;
      setErrors({
        ...errors,
        [name]: error ? [error.flatten().formErrors] : null,
      });
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
    <Section className="container mx-auto my-0 sm:px-8" id="contact">
      <StaggerAnimateInView variants={fadeInTop}>
        <h2 className="font-bold text-2xl leading-relaxed">Contact</h2>

        {submitted ? (
          <div className="mt-3 rounded border p-16">
            <p className="text-center font-bold text-2xl">
              🥳 Your message has been sent! 🥳
            </p>
          </div>
        ) : (
          <>
            <p className="mb-3 text-gray-700 text-sm leading-relaxed md:text-base dark:text-gray-300">
              Got a project or question in mind?
            </p>

            <div className="flex-1 text-muted-foreground">
              <form
                className="max-w-2xl flex-auto space-y-4"
                onSubmit={handleOnSubmit}
              >
                <div className="flex gap-3">
                  <FormGroup>
                    <Input
                      className="mt-2"
                      id="name"
                      name="name"
                      onBlur={handleOnBlur}
                      onChange={handleOnChange}
                      placeholder="Name"
                      required
                      type="text"
                      value={form.name}
                    />
                    {dirty && errors.name && (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Input
                      className="mt-2"
                      id="email"
                      name="email"
                      onBlur={handleOnBlur}
                      onChange={handleOnChange}
                      placeholder="Email"
                      required
                      type="email"
                      value={form.email}
                    />
                    {dirty && errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </FormGroup>
                </div>

                <FormGroup>
                  <Textarea
                    className="mt-2"
                    name="message"
                    onBlur={handleOnBlur}
                    onChange={handleOnChange}
                    placeholder="Your message"
                    required
                    rows={8}
                    value={form.message}
                  />
                  {dirty && errors.message && (
                    <ErrorMessage>{errors.message}</ErrorMessage>
                  )}
                </FormGroup>

                <Button
                  className="border-indigo-500 bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500 text-center text-indigo-100 hover:text-white sm:w-1/3"
                  disabled={sending}
                  size="lg"
                >
                  <Icons.send className="mr-2 h-5 w-5" />
                  <span className="relative">
                    {sending ? "Sending..." : "Send"}
                  </span>
                </Button>

                {dirty && errors.form && (
                  <ErrorMessage>{errors.form}</ErrorMessage>
                )}
              </form>
            </div>
          </>
        )}
      </StaggerAnimateInView>
    </Section>
  );
}
