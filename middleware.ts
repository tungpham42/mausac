import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "";

  if (!ip) return NextResponse.next(); // không tìm được IP thì cho qua

  const res = await fetch(`https://api.country.is/${ip}`, {
    cache: "no-store",
  });

  const data = await res.json();

  if (data.country === "CN" || data.country === "SG") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  return NextResponse.next();
}
