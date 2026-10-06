import { type ReactNode, useId } from "react";

type FieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    multiline?: boolean;
    hint?: string;
    type?: string;
};

export const Field = ({ label, value, onChange, multiline, hint, type = "text" }: FieldProps) => {
    const id = useId();
    return (
        <div className="admin-field">
            <label htmlFor={id}>{label}</label>
            {multiline ? (
                <textarea id={id} value={value} rows={4} onChange={(e) => onChange(e.target.value)} />
            ) : (
                <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
            )}
            {hint && <p className="admin-hint">{hint}</p>}
        </div>
    );
};

type ListProps<T> = {
    items: T[];
    onChange: (items: T[]) => void;
    create: () => T;
    addLabel: string;
    itemLabel: (item: T, index: number) => string;
    render: (item: T, update: (item: T) => void) => ReactNode;
};

// An ordered list of editable items: move up, move down, remove, add.
export function ListEditor<T>({ items, onChange, create, addLabel, itemLabel, render }: ListProps<T>) {
    const move = (from: number, to: number) => {
        const next = [...items];
        const [item] = next.splice(from, 1);
        next.splice(to, 0, item);
        onChange(next);
    };
    const update = (index: number, item: T) => onChange(items.map((old, i) => (i === index ? item : old)));
    const remove = (index: number) => {
        if (window.confirm(`Remove "${itemLabel(items[index], index)}"?`)) {
            onChange(items.filter((_, i) => i !== index));
        }
    };

    return (
        <div className="admin-list">
            {items.map((item, i) => (
                <div className="admin-item" key={i}>
                    <div className="admin-item-bar">
                        <span className="admin-item-label">{itemLabel(item, i)}</span>
                        <button type="button" onClick={() => move(i, i - 1)} disabled={i === 0}>
                            Up
                        </button>
                        <button type="button" onClick={() => move(i, i + 1)} disabled={i === items.length - 1}>
                            Down
                        </button>
                        <button type="button" className="admin-danger" onClick={() => remove(i)}>
                            Remove
                        </button>
                    </div>
                    {render(item, (next) => update(i, next))}
                </div>
            ))}
            <button type="button" className="admin-add" onClick={() => onChange([...items, create()])}>
                {addLabel}
            </button>
        </div>
    );
}

// Paragraphs and other string lists, edited as one block separated by blank lines.
export const ParagraphsField = ({
    label,
    value,
    onChange,
}: {
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
}) => (
    <Field
        label={label}
        value={value.join("\n\n")}
        multiline
        hint="Leave a blank line between paragraphs."
        onChange={(text) => onChange(text.split(/\n\s*\n/))}
    />
);

// Short lists (tags, headline lines) edited one per line.
export const LinesField = ({
    label,
    value,
    onChange,
    hint = "One per line.",
}: {
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
    hint?: string;
}) => (
    <Field label={label} value={value.join("\n")} multiline hint={hint} onChange={(text) => onChange(text.split("\n"))} />
);

// Drop the blank entries the text boxes above leave behind while typing.
export const tidy = (list: string[]) => list.map((s) => s.trim()).filter(Boolean);
