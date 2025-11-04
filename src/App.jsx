import React, { useState } from "react";

const App = () => {
  const [note, setnote] = useState("");
  const [notes, setnotes] = useState([]);

  const addNote = () => {
    if (note.trim() === "") return;
    setnotes([...notes, note]);
    setnote("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-900 text-white px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center tracking-tight">
          Notes App
        </h1>

        <div className="mt-6 rounded-2xl bg-white/5 backdrop-blur shadow-lg ring-1 ring-white/10">
          <div className="p-5 sm:p-6">
            <h2 className="text-xl font-semibold text-white/90 mb-3">
              Create Note
            </h2>

            <div className="flex gap-2 sm:gap-3">
              <input
                type="text"
                placeholder="Enter a note..."
                value={note}
                onChange={(e) => setnote(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNote()}
                className="flex-1 rounded-xl bg-white text-zinc-900 placeholder-zinc-500 px-4 py-3 outline-none ring-1 ring-zinc-300 focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={() => {
                  addNote();
                  console.log(notes);
                }}
                className="shrink-0 rounded-xl bg-emerald-600 px-4 sm:px-6 py-3 font-medium text-white hover:bg-emerald-500 active:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-zinc-900"
              >
                Add note
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium ring-1 ring-white/10">
            Notes List
            <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-emerald-600 px-2 text-xs">
              {notes.length}
            </span>
          </span>
        </div>

        <div className="mt-6 rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10">
          {notes.length === 0 && (
            <p className="p-6 text-center text-sm text-white/70">
              No notes yet — add your first one ✍️
            </p>
          )}

          {notes.length > 0 && (
            <ul className="divide-y divide-white/10">
              {notes.map((a, i) => {
                return (
                  <li
                    key={i}
                    className="flex items-start gap-3 px-5 py-4 sm:px-6"
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>
                    <p className="flex-1 break-words text-white/90">{a}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
