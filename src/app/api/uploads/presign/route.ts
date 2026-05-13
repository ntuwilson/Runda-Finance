import { NextRequest, NextResponse } from "next/server";
import { createSignedUpload, assertUploadAllowed } from "@/lib/storage";
import { rateLimit } from "@/lib/rate-limit";
import { presignSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  if (!rateLimit(`upload:${ip}`, 20)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });

  const parsed = presignSchema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ errors: parsed.error.flatten() }, { status: 400 });

  try {
    assertUploadAllowed(parsed.data.fileType, parsed.data.fileSize);
    const signed = await createSignedUpload(parsed.data);
    return NextResponse.json({ ...signed, scanStatus: "Pending" });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Upload unavailable." }, { status: 503 });
  }
}
