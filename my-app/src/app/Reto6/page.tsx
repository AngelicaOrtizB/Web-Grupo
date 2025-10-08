'use client';

import { useState } from "react";

export default function Reto6() {
    const [text, setText] = useState("");

    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div>
            <textarea
                placeholder="Type your text here..."
                rows={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <p>Character Count: {charCount}</p>
            <p>Word Count: {wordCount}</p>
        </div>
    );
}
