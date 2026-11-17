"use server";

import { Resend } from "resend";
import { z } from "zod";
import { topicLabels, topicValues } from "@/data/contact-topics";
import type { ContactField, ContactState } from "@/types/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "That name is too long."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(120, "That email address is too long."),
  topic: z.enum(topicValues),
  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters.")
    .max(2000, "Please keep the message under 2000 characters."),
});

export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  // Trap field: real visitors never see it, simple bots fill it in.
  if (String(formData.get("website") ?? "") !== "") {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    const errors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) {
      const field = String(issue.path[0]) as ContactField;
      if (!errors[field]) {
        errors[field] = field === "topic" ? "Please choose a topic." : issue.message;
      }
    }
    return { status: "error", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set.");
    return {
      status: "error",
      message: "The contact form isn't set up yet. Please use the email link above.",
      values,
    };
  }

  const { name, email, topic, message } = parsed.data;
  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject: `[Portfolio] ${topicLabels[topic]} from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${email}\nTopic: ${topicLabels[topic]}\n\n${message}`,
    });

    if (error) {
      console.error("Contact form: Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again, or use the email link above.",
        values,
      };
    }
  } catch (error) {
    console.error("Contact form: unexpected error:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again, or use the email link above.",
      values,
    };
  }

  return { status: "success", message: "Thanks! Your message is on its way. I'll reply by email." };
}