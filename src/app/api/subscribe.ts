// /pages/api/subscribe.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      // Example: Mailchimp API integration
      const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
      const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const data = {
        email_address: email,
        status: "subscribed",
      };

      const response = await fetch(
        `https://<dc>.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${MAILCHIMP_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      return res.status(201).json({ message: "Subscription successful" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Subscription failed" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
