// import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [lenght, setLength] = useState(8);
  const [secureKey, setSecureKey] = useState("");

  let createSecureKey = () => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let newKey = "";
    for (let i = 0; i < length; i++) {
      let randomindex = Math.floor(Math.random() * str.length);
      newKey += str[randomindex];
    }
    setSecureKey(newKey);
  };

  useEffect(() => {
    createSecureKey();
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Display + Copy Button */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={secureKey}
            className="flex-1 bg-gray-800 text-white text-base rounded-lg px-4 py-3 outline-none tracking-widest border border-gray-700"
          />
          <button className="px-5 py-3 rounded-lg text-white font-semibold text-sm bg-blue-600 hover:bg-blue-700 transition-colors">
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-5">
          <p className="text-white text-sm mb-3 font-medium">
            Length: <span className="font-bold">{lenght}</span>
          </p>
          <input
            type="range"
            onChange={(e) => setLength(e.target.value)}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer accent-blue-600 bg-gray-700"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-3 mt-4">
          <label className="flex items-center gap-3 text-white text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
            />
            Include Numbers
          </label>
          <label className="flex items-center gap-3 text-white text-sm cursor-pointer select-none">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-blue-600 cursor-pointer"
            />
            Include Symbols
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
