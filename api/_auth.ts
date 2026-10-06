import { createHash, createHmac, timingSafeEqual } from "node:crypto";

// Files starting with "_" are not exposed as routes by Vercel.

const COOKIE = "admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

const password = () => {
    const value = process.env.ADMIN_PASSWORD;
    if (!value) throw new Error("ADMIN_PASSWORD is not set");
    return value;
};

// Keyed on the password, so changing ADMIN_PASSWORD signs everyone out.
const sign = (payload: string) =>
    createHmac("sha256", `session:${password()}`).update(payload).digest("hex");

const sameString = (a: string, b: string) => {
    const ha = createHash("sha256").update(a).digest();
    const hb = createHash("sha256").update(b).digest();
    return timingSafeEqual(ha, hb);
};

export const checkPassword = (attempt: string) => sameString(attempt, password());

export const sessionCookie = () => {
    const expires = String(Date.now() + SESSION_SECONDS * 1000);
    return `${COOKIE}=${expires}.${sign(expires)}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=${SESSION_SECONDS}`;
};

export const clearedCookie = () => `${COOKIE}=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;

export const isAuthed = (request: Request) => {
    const match = (request.headers.get("cookie") ?? "").match(new RegExp(`(?:^|;\\s*)${COOKIE}=(\\d+)\\.([a-f0-9]+)`));
    if (!match) return false;
    const [, expires, signature] = match;
    return Number(expires) > Date.now() && sameString(signature, sign(expires));
};

export const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
    new Response(JSON.stringify(body), {
        status,
        headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...headers },
    });

export const unauthorized = () => json({ error: "Not signed in" }, 401);
