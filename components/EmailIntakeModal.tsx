"use client";

import Modal from "./Modal";
import { X } from "lucide-react";
import { addEmail } from "@/actions/contact";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EmailIntakeModal() {
  const [state, action, isPending] = useActionState(addEmail, {
    success: true,
    id: "",
    messages: [],
  });
  const router = useRouter();

  useEffect(() => {
    if (state.success && state.id) {
      router.push("/agent");
    }
  }, [state, router]);

  return (
    <Modal>
      <div className="text-center flex flex-col">
        <Link href="/" className="self-end">
          <X />
        </Link>
        <h3 className="text-3xl font-thin mt-4">Provide us your Email</h3>
        <form action={action} className="mt-4 px-7 py-3 flex flex-col gap-4">
          <label htmlFor="fullName" className="sr-only">
            Name
          </label>
          <input
            type="text"
            name="fullName"
            id="name-email-form"
            placeholder="Full name"
            required
            className="block w-full px-4 py-2 placeholder-muted-foreground rounded-md ring-1 ring-primary focus:ring-2 focus:outline-none"
          />
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
            className="primary filled py-2 px-4 rounded-md w-full flex gap-2 items-center justify-center"
          >
            Try Quizzzard {isPending && <span className="button-loader"></span>}
          </button>
        </form>
        {!state.success &&
          state.messages.map((message, i) => (
            <p key={i} className="text-red-500">
              {message}
            </p>
          ))}
      </div>
    </Modal>
  );
}
