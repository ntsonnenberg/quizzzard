"use client";

import Modal from "./Modal";
import { X } from "lucide-react";
import { addEmail } from "@/actions/email";
import Link from "next/link";

export default function EmailIntakeModal() {
  return (
    <Modal>
      <div className="text-center flex flex-col">
        <Link href="/" className="self-end">
          <X />
        </Link>
        <h3 className="text-3xl font-thin mt-4">Provide us your Email</h3>
        <form action={addEmail} className="mt-4 px-7 py-3">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email-email-form"
            placeholder="Email address"
            className="block w-full px-4 py-2 placeholder-muted-foreground rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="primary filled py-2 px-4 rounded-md mt-4 w-full"
          >
            Try Quizzzard
          </button>
        </form>
      </div>
    </Modal>
  );
}
