import { NextResponse } from "next/server";
import { getMessage } from "../../../lib/test-api";
import { createHelloGreating } from "../../../lib/test-api";

export async function GET() {
    const data = getMessage()
    return NextResponse.json(data)
}

export async function POST(req) {
    const name = await req.json();
    const greating = createHelloGreating(name);
    return NextResponse.json(greating);
}