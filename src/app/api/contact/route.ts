import { NextResponse } from "next/server";

const SITE_NAME = "Insightful Divorce Coaching";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const scriptUrl = process.env.CONTACT_FORM_SCRIPT_URL?.trim();
  if (!scriptUrl) {
    return NextResponse.json(
      { result: "error", message: "Contact form is not configured." },
      { status: 500 },
    );
  }

  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { result: "error", message: "Invalid request body." },
      { status: 400 },
    );
  }

  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  if (!fullName || !email || !message) {
    return NextResponse.json(
      {
        result: "error",
        message: "Please fill in your name, email, and message.",
      },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { result: "error", message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const payload = {
    siteName: SITE_NAME,
    fullName,
    email,
    phone: phone || "N/A",
    details: message,
  };

  try {
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await response.text();
    let parsed: { result?: string; message?: string } | null = null;
    try {
      parsed = JSON.parse(text) as { result?: string; message?: string };
    } catch {
      parsed = null;
    }

    if (parsed?.result === "error") {
      return NextResponse.json(
        {
          result: "error",
          message: parsed.message || "Submission failed. Please try again.",
        },
        { status: 502 },
      );
    }

    if (parsed?.result === "success" || response.ok) {
      return NextResponse.json({ result: "success" });
    }

    return NextResponse.json(
      {
        result: "error",
        message: "Could not reach the form handler. Please try again.",
      },
      { status: 502 },
    );
  } catch {
    return NextResponse.json(
      {
        result: "error",
        message: "Something went wrong sending your request. Please try again.",
      },
      { status: 502 },
    );
  }
}
