import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);

  // load notes from localStorage

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // save notes to localStrage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  //  Add Note
  const addNote = () => {
    if (!title || !content) {
      alert("please fill title and content");
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    setNotes([newNote, ...notes]);

    console.log(title);
    console.log(content);

    setTitle("");
    setContent("");
  };

  //  search Notes
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase()),
  );

  // Delete Notes

  const deleteNote = (id) => {
    const updateNotes = notes.filter((note) => note.id !== id);
    setNotes(updateNotes);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="Max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Notes App
        </h1>

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow-lg mb-8 ">
          <input
            type="text"
            placeholder="Enter Title "
            className="w-full border p-3 rounded-xl mb-4 outline-none "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="enter your notes"
            className="w-full border p-3 rounded-lg  mb-4 outline-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
            onClick={addNote}
          >
            Add
          </button>
        </div>

        {/*  search Bar */}

        <input
          type="text"
          placeholder="search Notes"
          className="w-full border p-3 rounded-lg mb-8 "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* Notes List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div className="bg-white p-5 rounded-xl shadow-md" key={note.id}>
              <h2 className="text-2xl font-semibold mb-3 text-blue-600">
                {note.title}
              </h2>
              <p className="text-gray-700 mb-4 ">{note.content}</p>
              <button
                className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                onClick={() => deleteNote(note.id)}
              >
                DELETE
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-2xl font-semibold mb-3 text-blue-600">
            No Notes Found{" "}
          </h2>
        )}
      </div>
    </div>
  );
}

export default App;
