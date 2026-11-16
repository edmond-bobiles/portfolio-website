"use client";

import { useActionState } from "react";
import { sendContactMessage } from "@/actions/contact";
import { topicLabels, topicValues } from "@/data/contact-topics";
import type { ContactState } from "@/types/contact";

const initialState: ContactState = { status: "idle" };

const labelClass = "mb-2 block font-mono text-[0.8rem] text-muted";
const fieldClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[0.95rem] transition-colors placeholder:text-muted focus:border-ink aria-[invalid=true]:border-ink";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const errors = state.errors ?? {};
  const values = state.values;

  return (
    <form
      action={formAction}
      className="rounded-xl border border-line bg-page p-6 max-[640px]:p-4"
    >
      <fieldset>
        <legend className="mb-3 font-mono text-[0.8rem] text-muted">
          I&apos;d like to talk about
        </legend>
        <div className="flex flex-wrap gap-3">
          {topicValues.map((value) => (
            <label key={value} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={value}
                required
                defaultChecked={values?.topic === value}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-[0.9rem] font-medium transition-colors duration-200 hover:border-ink peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                {topicLabels[value]}
              </span>
            </label>
          ))}
        </div>
        {errors.topic && (
          <p role="alert" className="mt-2 text-[0.85rem] font-medium">
            {errors.topic}
          </p>
        )}
      </fieldset>

      <div className="mt-6 flex flex-col gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
            minLength={2}
            maxLength={80}
            defaultValue={values?.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-[0.85rem] font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            required
            maxLength={120}
            defaultValue={values?.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-[0.85rem] font-medium">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Leave a message..."
            required
            minLength={10}
            maxLength={2000}
            defaultValue={values?.message}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${fieldClass} resize-y`}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="mt-1 text-[0.85rem] font-medium">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 w-full rounded-xl border border-ink bg-ink px-6 py-3 text-[0.95rem] font-medium text-white transition-colors hover:bg-page hover:text-ink disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className="mt-3 text-[0.9rem] empty:mt-0">
        {state.message}
      </p>
    </form>
  );
}