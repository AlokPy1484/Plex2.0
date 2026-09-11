import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const response = await axios.post(
            "https://devwithalok.app.n8n.cloud/webhook/nextjs-form",
            body
        );

        return NextResponse.json(response.data, { status: 200 });
    } catch (error: unknown) {
        console.error("Webhook proxy error:", error);

        if (axios.isAxiosError(error)) {
            return NextResponse.json(
                { error: error.response?.data || "Webhook request failed" },
                { status: error.response?.status || 500 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
