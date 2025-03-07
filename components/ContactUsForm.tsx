"use client";

import { useActionState } from "react";
import { addFeedback } from "@/actions/contact";

export default function ContactUsForm() {
  const [state, action, isPending] = useActionState(addFeedback, {
    success: true,
    messages: [],
  });

  return (
    <form action={action} className="mt-8 space-y-4">
      <div>
        <label htmlFor="fullName" className="sr-only">
          Full name
        </label>
        <input
          type="text"
          name="fullName"
          id="name-contact-us-form"
          placeholder="First & Last name"
          className="block w-full px-5 py-4 text-white placeholder-muted-foreground bg-muted rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <div>
          <input
            type="email"
            name="email"
            id="email-contact-us-form"
            placeholder="Email address"
            className="block w-full px-5 py-4 text-white placeholder-muted-foreground bg-muted rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">
          Phone number
        </label>
        <div>
          <input
            type="tel"
            name="phone"
            id="phone-contact-us-form"
            placeholder="Phone number"
            className="block w-full px-5 py-4 text-white placeholder-muted-foreground bg-muted rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <div>
          <textarea
            name="message"
            id="message-contact-us-form"
            placeholder="Write your message"
            rows={4}
            required
            className="block w-full px-5 py-4 text-white placeholder-muted-foreground bg-muted rounded-md resize-y ring-1 ring-primary focus:ring-2 focus:outline-none"
          ></textarea>
        </div>
      </div>
      <div>
        <div className="relative inline-flex mt-2 group">
          <div className="absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-secondary-variant to-primary-variant group-hover:shadow-lg group-hover:shadow-secondary-variant"></div>
          <button
            type="submit"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-normal text-white bg-muted border border-transparent rounded-md"
          >
            Send Message {isPending && <span className="button-loader"></span>}
          </button>
        </div>
      </div>
      {!state.success &&
        state.messages.map((message, i) => (
          <p key={i} className="text-red-500">
            {message}
          </p>
        ))}
      {state.success && state.messages.length > 0
        ? state.messages.map((message, i) => (
            <p key={i} className="text-green-400">
              {message}
            </p>
          ))
        : null}
    </form>
  );
}
