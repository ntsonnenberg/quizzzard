"use server";

export const addEmail = async (formData: FormData) => {
  const email = formData.get("email");
  console.log(email);
  return;
};
