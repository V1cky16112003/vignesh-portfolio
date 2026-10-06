import { get, put } from "@vercel/blob";
import { isAuthed, json, unauthorized } from "./_auth.js";

const PATH = "cv.pdf";
const FILENAME = "Vignesh_Ram_Sivakumar_CV.pdf";
// The CV that ships in /public, served until one is uploaded from /admin.
const FALLBACK = "/Vignesh_Ram_Sivakumar_CV_LaTeX.pdf";
// Vercel functions reject request bodies over 4.5 MB.
const MAX_BYTES = 4_400_000;

// GET: the latest uploaded CV.
export async function GET(request: Request) {
    const result = await get(PATH, { access: "private", useCache: false });
    if (!result || result.statusCode !== 200) {
        return Response.redirect(new URL(FALLBACK, request.url), 302);
    }

    return new Response(result.stream, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `inline; filename="${FILENAME}"`,
            "Cache-Control": "public, max-age=0, s-maxage=30, stale-while-revalidate=300",
        },
    });
}

// POST: upload a new CV; the body is the raw PDF.
export async function POST(request: Request) {
    if (!isAuthed(request)) return unauthorized();

    const body = await request.arrayBuffer();
    if (body.byteLength > MAX_BYTES) return json({ error: "PDF must be under 4.4 MB" }, 413);
    // Every PDF starts with "%PDF-".
    if (new TextDecoder().decode(body.slice(0, 5)) !== "%PDF-") {
        return json({ error: "That file is not a PDF" }, 400);
    }

    await put(PATH, body, {
        access: "private",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "application/pdf",
    });
    return json({ saved: true, uploadedAt: new Date().toISOString() });
}
