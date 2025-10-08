'use client';

import { useState } from "react";

export default function Reto6() {
    const [text, setText] = useState("");

    const charCount = text.length;
    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    // Cuenta oraciones
    const sentenceCount = text.trim() === ""
        ? 0
        : text.split(/[.!?]+/).filter(sentence => sentence.trim() !== "").length;

    // Cuenta párrafos
    const paragraphCount = text.trim() === ""
        ? 0
        : text.split(/\n+/).filter(paragraph => paragraph.trim() !== "").length;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <textarea
                placeholder="Type your text here..."
                rows={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border-2 border-black p-3 w-80 rounded-md focus:outline-none"
            />
            <div className="mt-4 text-lg space-y-1">
                <p>Character Count: {charCount}</p>
                <p>Word Count: {wordCount}</p>
                <p>Sentence Count: {sentenceCount}</p>
                <p>Paragraph Count: {paragraphCount}</p>
            </div>
        </div>
    );
}
