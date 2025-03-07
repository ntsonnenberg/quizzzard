"use server";

import { cookies } from "next/headers";

/**
 * --------------------------------------------------------
 *                      PUBLIC CONSTANTS
 * --------------------------------------------------------
 */

/**
 * --------------------------------------------------------
 *                      PUBLIC METHODS
 * --------------------------------------------------------
 */

export const hasAccess = async () => (await cookies()).has("temporary_token");

export const setTemporaryToken = async (id: string): Promise<void> => {
  const cookieStore = await cookies();
  await cookieStore.set("temporary_token", id);
};

export const getTemporaryToken = async () =>
  (await cookies()).get("temporary_token");
