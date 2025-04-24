import React from "react";

export default function Home() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#1D4ED8' }}>Code to Give</h1>
      <p style={{ maxWidth: '600px', margin: '1rem auto', color: '#374151' }}>
        A student-led initiative empowering local communities through accessible tech.
      </p>
      <button style={{ background: '#1D4ED8', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '0.5rem', fontSize: '1rem' }}>
        Contact Us
      </button>
    </main>
  );
}