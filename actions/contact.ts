"use server";

import { cookies } from "next/headers";
import {
  addOrUpdateContactToFeedbackList,
  addOrUpdateContactToProductUpdatesList,
} from "@/lib/loops";
import {
  validateContactUsIntakeForm,
  validateEmailIntakeForm,
} from "@/lib/zod";
import { revalidatePath } from "next/cache";

/**
 * --------------------------------------------------------
 *                      PRIVATE METHODS
 * --------------------------------------------------------
 */

const isCustomError = (error: any) => {
  return (
    typeof error === "object" &&
    error !== null &&
    typeof error.success === "boolean" &&
    Array.isArray(error.messages) &&
    error.messages.every((message: any) => typeof message === "string")
  );
};

const setTemporaryToken = async (id: string): Promise<void> => {
  const cookieStore = await cookies();
  await cookieStore.set("temporary_token", id);
};

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

interface EmailIntakeState {
  success: boolean;
  id: string;
  messages: string[];
}

export const addEmail = async (
  state: EmailIntakeState,
  formData: FormData
): Promise<EmailIntakeState> => {
  try {
    const validData = validateEmailIntakeForm(formData);

    const contactProperties = validData.fullName
      ? {
          firstName: validData.fullName.split(" ")[0],
          lastName: validData.fullName.split(" ").pop() || "",
        }
      : undefined;

    const contactId = await addOrUpdateContactToProductUpdatesList(
      validData.email,
      contactProperties
    );

    revalidatePath("/?show=true");

    await setTemporaryToken(contactId);

    return { success: true, id: contactId, messages: [] };
  } catch (error) {
    if (isCustomError(error)) {
      return error as EmailIntakeState;
    }

    return {
      success: false,
      id: "",
      messages: ["Failed to submit email. We will fix this issue shortly!"],
    };
  }
};

interface ContactUsIntakeState {
  success: boolean;
  messages: string[];
}

export const addFeedback = async (
  state: ContactUsIntakeState,
  formData: FormData
): Promise<ContactUsIntakeState> => {
  try {
    const validData = validateContactUsIntakeForm(formData);

    const contactProperties = {
      firstName: validData.fullName.split(" ")[0],
      lastName: validData.fullName.split(" ").pop() || "",
      phoneNumber: validData.phone,
      message: validData.message,
    };
    await addOrUpdateContactToFeedbackList(validData.email, contactProperties);

    revalidatePath("/");

    return {
      success: true,
      messages: [
        "Thank you for you feedback! We will reach out to you shortly.",
      ],
    };
  } catch (error) {
    if (isCustomError(error)) {
      return error as ContactUsIntakeState;
    }

    return {
      success: false,
      messages: [
        "There was an error with your message. Please email nsonnenberg@quizzzard.com with your feedback!",
      ],
    };
  }
};
