import { NextRequest } from "next/server";
import { createClient } from "@/prismicio";

export async function GET(request: NextRequest) {
  const client = createClient();

  return Response.json(
    await client.getAllByType("offer", {
      orderings: [{ field: "document.published_at", direction: "desc" }],
      limit: 3,
    }),
  );
}
