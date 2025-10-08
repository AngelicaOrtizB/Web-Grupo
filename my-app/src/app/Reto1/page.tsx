'use client';

import { useState } from "react";
import { ProgressBar } from 'react-bootstrap';


export default function Reto1() {
  const [percent, setPercent] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(100, Math.max(0, Number(e.target.value))); 
    setPercent(value);
  };

  return (
    <main className="p-12 flex min-h-screen flex-col items-center justify-between">
        <div className="border-black-500 border-2 rounded-md p-1">
        <h1>Progress bar</h1>
        
        <div className="m-10 w-250">
            <ProgressBar now={percent} label={`${percent}%`} />
        </div>

         <h3>Input percentage:</h3>
        <input className="border-black-500 border-2 rounded-md p-1"
            type="number" 
            value={percent} 
            onChange={handleChange} 
            min="0" 
            max="100" 
        />
        </div>

    </main>
   
  );
}