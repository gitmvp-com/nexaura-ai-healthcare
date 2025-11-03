import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { db } from "@/lib/db";
import generatePrompt from "@/utils/generate-prompt";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Get user context
    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Initialize Google Generative AI
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate prompt with context
    const prompt = generatePrompt(message, {
      age: user.age,
      gender: user.gender,
      medicalIssues: user.medicalIssues,
    });

    // Generate AI response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const aiMessage = response.text();

    // Save messages to database
    await db.message.createMany({
      data: [
        {
          userId: user.id,
          role: "user",
          content: message,
        },
        {
          userId: user.id,
          role: "model",
          content: aiMessage,
        },
      ],
    });

    return NextResponse.json({ message: aiMessage });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
