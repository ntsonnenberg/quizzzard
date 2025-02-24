"use server";
import { revalidatePath } from "next/cache";

export const addEmail = async (formData: FormData) => {
  const email = formData.get("email") as string;

  revalidatePath("/?show=true");

  // need to communicate back to client to cache emailId
  return;
};
