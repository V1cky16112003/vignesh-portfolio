import { type FormEvent, useEffect, useState } from "react";
import { type Content, CV_URL, defaultContent, withDefaults } from "../content";
import { Field, LinesField, ListEditor, ParagraphsField, tidy } from "./fields";
import "./admin.css";

type Status = "checking" | "signed-out" | "ready";

const slug = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";

// Strip empty lines and paragraphs before saving.
const clean = (c: Content): Content => ({
    ...c,
    landing: { ...c.landing, headline: tidy(c.landing.headline) },
    about: { ...c.about, paragraphs: tidy(c.about.paragraphs) },
    projects: c.projects.map((p) => ({
        ...p,
        kind: tidy(p.kind),
        description: tidy(p.description),
        tech: tidy(p.tech),
        link: p.link?.trim() || null,
    })),
    sections: c.sections.map((s) => ({ ...s, paragraphs: tidy(s.paragraphs) })),
    contact: { ...c.contact, certifications: tidy(c.contact.certifications) },
});

const Admin = () => {
    const [status, setStatus] = useState<Status>("checking");
    const [content, setContent] = useState<Content>(defaultContent);
    const [dirty, setDirty] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        document.title = "Admin · Vignesh Ram Sivakumar";
        fetch("/api/login")
            .then((res) => res.json())
            .then((body) => setStatus(body.authed ? "ready" : "signed-out"))
            .catch(() => setStatus("signed-out"));
        // The query string reads past the edge cache so the editor always starts from the latest save.
        fetch(`/api/content?fresh=${Date.now()}`)
            .then((res) => (res.ok ? res.json() : null))
            .then((saved) => saved && setContent(withDefaults(saved)))
            .catch(() => undefined);
    }, []);

    // Warn before leaving with unsaved edits.
    useEffect(() => {
        if (!dirty) return;
        const warn = (e: BeforeUnloadEvent) => e.preventDefault();
        window.addEventListener("beforeunload", warn);
        return () => window.removeEventListener("beforeunload", warn);
    }, [dirty]);

    const edit = <K extends keyof Content>(key: K, value: Content[K]) => {
        setContent((c) => ({ ...c, [key]: value }));
        setDirty(true);
        setMessage("");
    };

    const save = async () => {
        setMessage("Saving…");
        const cleaned = clean(content);
        const res = await fetch("/api/content", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cleaned),
        });
        if (res.status === 401) {
            setStatus("signed-out");
            setMessage("Your session expired. Sign in again, then save. Your edits are still here.");
            return;
        }
        if (!res.ok) {
            setMessage(`Save failed: ${(await res.json().catch(() => ({}))).error ?? res.statusText}`);
            return;
        }
        setContent(cleaned);
        setDirty(false);
        setMessage("Saved. The live site updates within about 30 seconds.");
    };

    const signOut = async () => {
        await fetch("/api/login", { method: "DELETE" });
        setStatus("signed-out");
    };

    if (status === "checking") return null;
    if (status === "signed-out") return <Login onSignedIn={() => setStatus("ready")} notice={message} />;

    const { landing, about, projects, skills, sections, career, contact } = content;

    return (
        <div className="admin">
            <header className="admin-bar">
                <strong>Site admin</strong>
                <span className="admin-message" role="status">
                    {message || (dirty ? "Unsaved changes" : "All changes saved")}
                </span>
                <button type="button" className="button button-primary" onClick={save} disabled={!dirty}>
                    Save changes
                </button>
                <a className="button" href="/" target="_blank" rel="noopener noreferrer">
                    View site
                </a>
                <button type="button" className="button" onClick={signOut}>
                    Sign out
                </button>
            </header>

            <nav className="admin-toc" aria-label="Admin sections">
                {["CV", "Hero", "About", "Projects", "Skills", "Extra sections", "Experience", "Contact"].map((name) => (
                    <a key={name} href={`#admin-${slug(name)}`}>
                        {name}
                    </a>
                ))}
            </nav>

            <main className="admin-main">
                <CvUpload onExpired={() => setStatus("signed-out")} />

                <section className="admin-panel" id="admin-hero">
                    <h2>Hero</h2>
                    <LinesField
                        label="Headline"
                        value={landing.headline}
                        onChange={(headline) => edit("landing", { ...landing, headline })}
                        hint="Each line animates in separately."
                    />
                    <Field label="Intro" multiline value={landing.intro} onChange={(intro) => edit("landing", { ...landing, intro })} />
                    <Field label="Status line" value={landing.status} onChange={(s) => edit("landing", { ...landing, status: s })} />
                </section>

                <section className="admin-panel" id="admin-about">
                    <h2>About</h2>
                    <ParagraphsField
                        label="Paragraphs"
                        value={about.paragraphs}
                        onChange={(paragraphs) => edit("about", { ...about, paragraphs })}
                    />
                    <h3>Results I can point to</h3>
                    <ListEditor
                        items={about.outcomes}
                        onChange={(outcomes) => edit("about", { ...about, outcomes })}
                        create={() => ({ figure: "", text: "" })}
                        addLabel="Add result"
                        itemLabel={(o) => o.figure || "New result"}
                        render={(o, update) => (
                            <>
                                <Field label="Figure" value={o.figure} onChange={(figure) => update({ ...o, figure })} />
                                <Field label="Text" value={o.text} onChange={(text) => update({ ...o, text })} />
                            </>
                        )}
                    />
                </section>

                <section className="admin-panel" id="admin-projects">
                    <h2>Projects</h2>
                    <ListEditor
                        items={projects}
                        onChange={(next) => edit("projects", next)}
                        create={() => ({ title: "", kind: [], date: "", description: [], tech: [], link: null })}
                        addLabel="Add project"
                        itemLabel={(p) => p.title || "New project"}
                        render={(p, update) => (
                            <>
                                <Field label="Title" value={p.title} onChange={(title) => update({ ...p, title })} />
                                <LinesField
                                    label="Type and context"
                                    value={p.kind}
                                    onChange={(kind) => update({ ...p, kind })}
                                    hint="One per line. The first line is highlighted."
                                />
                                <Field label="Dates" value={p.date} onChange={(date) => update({ ...p, date })} />
                                <ParagraphsField
                                    label="Description"
                                    value={p.description}
                                    onChange={(description) => update({ ...p, description })}
                                />
                                <LinesField label="Built with" value={p.tech} onChange={(tech) => update({ ...p, tech })} />
                                <Field
                                    label="GitHub link"
                                    value={p.link ?? ""}
                                    onChange={(link) => update({ ...p, link })}
                                    hint="Leave empty to hide the link."
                                />
                                <label className="admin-check">
                                    <input
                                        type="checkbox"
                                        checked={Boolean(p.featured)}
                                        onChange={(e) => update({ ...p, featured: e.target.checked })}
                                    />
                                    Featured (highlighted card)
                                </label>
                            </>
                        )}
                    />
                </section>

                <section className="admin-panel" id="admin-skills">
                    <h2>Skills</h2>
                    <ListEditor
                        items={skills}
                        onChange={(next) => edit("skills", next)}
                        create={() => ({ area: "", items: "" })}
                        addLabel="Add skill group"
                        itemLabel={(s) => s.area || "New group"}
                        render={(s, update) => (
                            <>
                                <Field label="Group" value={s.area} onChange={(area) => update({ ...s, area })} />
                                <Field
                                    label="Skills"
                                    multiline
                                    value={s.items}
                                    onChange={(items) => update({ ...s, items })}
                                    hint="Separate with commas."
                                />
                            </>
                        )}
                    />
                </section>

                <section className="admin-panel" id="admin-extra-sections">
                    <h2>Extra sections</h2>
                    <p className="admin-hint">Shown after Skills, in the same layout as About.</p>
                    <ListEditor
                        items={sections}
                        onChange={(next) => edit("sections", next)}
                        create={() => ({ id: `section-${Date.now().toString(36)}`, title: "", paragraphs: [] })}
                        addLabel="Add section"
                        itemLabel={(s) => s.title || "New section"}
                        render={(s, update) => (
                            <>
                                <Field label="Title" value={s.title} onChange={(title) => update({ ...s, title })} />
                                <ParagraphsField
                                    label="Text"
                                    value={s.paragraphs}
                                    onChange={(paragraphs) => update({ ...s, paragraphs })}
                                />
                            </>
                        )}
                    />
                </section>

                <section className="admin-panel" id="admin-experience">
                    <h2>Experience and education</h2>
                    <ListEditor
                        items={career}
                        onChange={(next) => edit("career", next)}
                        create={() => ({ year: "", role: "", company: "", description: "" })}
                        addLabel="Add entry"
                        itemLabel={(c) => [c.year, c.role].filter(Boolean).join(" · ") || "New entry"}
                        render={(c, update) => (
                            <>
                                <Field label="Year" value={c.year} onChange={(year) => update({ ...c, year })} />
                                <Field label="Role" value={c.role} onChange={(role) => update({ ...c, role })} />
                                <Field label="Organisation" value={c.company} onChange={(company) => update({ ...c, company })} />
                                <Field
                                    label="Description"
                                    multiline
                                    value={c.description}
                                    onChange={(description) => update({ ...c, description })}
                                />
                            </>
                        )}
                    />
                </section>

                <section className="admin-panel" id="admin-contact">
                    <h2>Contact</h2>
                    <Field label="Intro" multiline value={contact.lead} onChange={(lead) => edit("contact", { ...contact, lead })} />
                    <Field label="Email" value={contact.email} onChange={(email) => edit("contact", { ...contact, email })} />
                    <Field label="Phone" value={contact.phone} onChange={(phone) => edit("contact", { ...contact, phone })} />
                    <Field
                        label="Location"
                        value={contact.location}
                        onChange={(location) => edit("contact", { ...contact, location })}
                    />
                    <Field label="GitHub URL" value={contact.github} onChange={(github) => edit("contact", { ...contact, github })} />
                    <Field
                        label="LinkedIn URL"
                        value={contact.linkedin}
                        onChange={(linkedin) => edit("contact", { ...contact, linkedin })}
                    />
                    <LinesField
                        label="Certifications"
                        value={contact.certifications}
                        onChange={(certifications) => edit("contact", { ...contact, certifications })}
                    />
                    <h3>Publications</h3>
                    <ListEditor
                        items={contact.publications}
                        onChange={(publications) => edit("contact", { ...contact, publications })}
                        create={() => ({ title: "", url: "", year: "" })}
                        addLabel="Add publication"
                        itemLabel={(p) => p.title || "New publication"}
                        render={(p, update) => (
                            <>
                                <Field label="Title" value={p.title} onChange={(title) => update({ ...p, title })} />
                                <Field label="Link" value={p.url} onChange={(url) => update({ ...p, url })} />
                                <Field label="Year" value={p.year} onChange={(year) => update({ ...p, year })} />
                            </>
                        )}
                    />
                </section>
            </main>
        </div>
    );
};

const Login = ({ onSignedIn, notice }: { onSignedIn: () => void; notice: string }) => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [busy, setBusy] = useState(false);

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setBusy(true);
        setError("");
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ password }),
        }).catch(() => null);
        setBusy(false);
        if (res?.ok) onSignedIn();
        else setError(res?.status === 401 ? "Wrong password." : "Couldn't reach the server.");
    };

    return (
        <main className="admin-login">
            <form onSubmit={submit}>
                <h1>Admin access</h1>
                {notice && <p className="admin-hint">{notice}</p>}
                <Field label="Password" type="password" value={password} onChange={setPassword} />
                {error && (
                    <p className="admin-error" role="alert">
                        {error}
                    </p>
                )}
                <button type="submit" className="button button-primary" disabled={busy || !password}>
                    {busy ? "Checking…" : "Unlock"}
                </button>
            </form>
        </main>
    );
};

const MAX_CV_BYTES = 4_400_000;

const CvUpload = ({ onExpired }: { onExpired: () => void }) => {
    const [state, setState] = useState("");

    const upload = async (file: File | undefined) => {
        if (!file) return;
        if (file.type !== "application/pdf") return setState("Choose a PDF file.");
        if (file.size > MAX_CV_BYTES) return setState("The PDF must be under 4.4 MB.");

        setState("Uploading…");
        const res = await fetch("/api/cv", {
            method: "POST",
            headers: { "Content-Type": "application/pdf" },
            body: file,
        }).catch(() => null);
        if (res?.status === 401) return onExpired();
        if (!res?.ok) {
            return setState(`Upload failed: ${(await res?.json().catch(() => ({})))?.error ?? "network error"}`);
        }
        setState(`Uploaded ${file.name}. "Download CV" serves it within about 30 seconds.`);
    };

    return (
        <section className="admin-panel" id="admin-cv">
            <h2>CV</h2>
            <p className="admin-hint">
                Uploading replaces the file behind every "Download CV" link straight away.{" "}
                <a href={`${CV_URL}?fresh=${Date.now()}`} target="_blank" rel="noopener noreferrer">
                    Open current CV
                </a>
            </p>
            <div className="admin-field">
                <label htmlFor="cv-file">New CV (PDF)</label>
                <input id="cv-file" type="file" accept="application/pdf" onChange={(e) => upload(e.target.files?.[0])} />
            </div>
            {state && (
                <p className="admin-hint" role="status">
                    {state}
                </p>
            )}
        </section>
    );
};

export default Admin;
