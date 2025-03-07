import { z, ZodError } from "zod";

/**
 * --------------------------------------------------------
 *                      PRIVATE CONSTANTS
 * --------------------------------------------------------
 */

const emailFormSchema = z.object({
  fullName: z
    .string()
    .optional()
    .or(
      z.string().includes(" ", {
        message: "Please include First and Last name.",
      })
    ),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

const contactUsFormSchema = z.object({
  fullName: z
    .string()
    .includes(" ", { message: "Please include First and Last name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
      message: "Please enter a valid phone number.",
    }),
  message: z.string(),
});

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const validateEmailIntakeForm = (formData: FormData) => {
  try {
    const fullName = formData.get("fullName") || "";
    const email = formData.get("email") || "";

    const validData = emailFormSchema.parse({ email, fullName });

    return validData;
  } catch (error) {
    if (error instanceof ZodError) {
      const parsedError = JSON.parse(error.message) as { message: string }[];
      const messages = parsedError.map((e) => e.message);

      throw { success: false, id: "", messages };
    }

    throw error;
  }
};

export const validateContactUsIntakeForm = (formData: FormData) => {
  try {
    const fullName = formData.get("fullName") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const validData = contactUsFormSchema.parse({
      fullName,
      email,
      phone,
      message,
    });

    return validData;
  } catch (error) {
    if (error instanceof ZodError) {
      const parsedError = JSON.parse(error.message) as { message: string }[];
      const messages = parsedError.map((e) => e.message);

      throw { success: false, messages };
    }

    throw error;
  }
};
