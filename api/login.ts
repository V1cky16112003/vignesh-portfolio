import { checkPassword, clearedCookie, isAuthed, json, sessionCookie } from "./_auth.js";

// GET: is the current browser signed in?
export function GET(request: Request) {
    return json({ authed: isAuthed(request) });
}

// POST { password }: sign in.
export async function POST(request: Request) {
    const body = await request.json().catch(() => ({}));
    const attempt = typeof body?.password === "string" ? body.password : "";

    if (!checkPassword(attempt)) {
        // Slow down guessing; there is no store to count attempts in.
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return json({ error: "Wrong password" }, 401);
    }
    return json({ authed: true }, 200, { "Set-Cookie": sessionCookie() });
}

// DELETE: sign out.
export function DELETE() {
    return json({ authed: false }, 200, { "Set-Cookie": clearedCookie() });
}
