import { APIError, LoopsClient } from "loops";

/**
 * --------------------------------------------------------
 *                      PUBLIC CONSTANTS
 * --------------------------------------------------------
 */

export const loops = new LoopsClient(process.env.LOOPS_API_KEY || "");

/**
 * --------------------------------------------------------
 *                      PRIVATE CONSTANTS
 * --------------------------------------------------------
 */

const PRODUCT_UPDATES_LIST = { cm7tjrc9300c00lle3yj43q7e: true };
const FEEDBACK_LIST = { cm7pb1tr800e50ll5gficc053: true };

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

interface ContactResponse {
  id: string;
  [key: string]: any;
}

interface ContactProperties {
  firstName: string;
  lastName: string;
  [key: string]: any;
}

export const addOrUpdateContactToProductUpdatesList = async (
  email: string,
  properties?: ContactProperties
): Promise<string> => {
  let contactId;

  try {
    const contact = await loops.findContact({ email });

    if (contact.length) {
      const response = (await loops.updateContact(
        email,
        properties,
        PRODUCT_UPDATES_LIST
      )) as ContactResponse;
      contactId = response.id;
    } else {
      const response = (await loops.createContact(
        email,
        properties,
        PRODUCT_UPDATES_LIST
      )) as ContactResponse;
      contactId = response.id;
    }

    return contactId;
  } catch (error) {
    if (error instanceof APIError) {
      throw {
        success: false,
        id: "",
        messages: [error.json.message as string],
      };
    }
    throw error;
  }
};

export const addOrUpdateContactToFeedbackList = async (
  email: string,
  properties: ContactProperties
): Promise<void> => {
  try {
    const contact = await loops.findContact({ email });

    if (contact.length) {
      await loops.updateContact(email, properties, FEEDBACK_LIST);
    } else {
      await loops.createContact(email, properties, FEEDBACK_LIST);
    }
  } catch (error) {
    if (error instanceof APIError) {
      throw {
        success: false,
        messages: [error.json.message as string],
      };
    }
    throw error;
  }
};
