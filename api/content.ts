import { get, put } from "@vercel/blob";
import { isAuthed, json, unauthorized } from "./_auth.js";

const PATH = "content.json";
const MAX_BYTES = 500_000;
const ARRAYS = ["projects", "skills", "sections", "career"];

// GET: the saved site content, or 404 so the page falls back to its bundled defaults.
// Cached briefly at the edge; /admin adds a query string to read past the cache.
export async function GET() {
    // A read failure falls back like a missing file, so the public page never breaks.
    const result = await get(PATH, { access: "private", useCache: false }).catch((error) => {
        console.error("Blob read failed", error);
        return null;
    });
    if (!result || result.statusCode !== 200) return json({ error: "No saved content" }, 404);

    return new Response(result.stream, {
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=0, s-maxage=30, stale-while-revalidate=300",
        },
    });
}

// PUT: replace the saved content.
export async function PUT(request: Request) {
    if (!isAuthed(request)) return unauthorized();

    const text = await request.text();
    if (text.length > MAX_BYTES) return json({ error: "Content too large" }, 413);

    let content: Record<string, unknown>;
    try {
        content = JSON.parse(text);
    } catch {
        return json({ error: "Invalid JSON" }, 400);
    }
    const valid =
        content &&
        typeof content === "object" &&
        typeof content.landing === "object" &&
        typeof content.about === "object" &&
        typeof content.contact === "object" &&
        ARRAYS.every((key) => Array.isArray(content[key]));
    if (!valid) return json({ error: "Content is missing required sections" }, 400);

    await put(PATH, JSON.stringify(content), {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/json",
    });
    return json({ saved: true });
}
