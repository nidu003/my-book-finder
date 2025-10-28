"use client";

import { useState } from "react";

export default function BookFinder() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 12)); // show only first 12 results
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="w-full max-w-3xl bg-white shadow-md rounded-2xl p-6">
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search for a book..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-gray-600">Loading...</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {books.map((book: any, index) => (
          <div
            key={index}
            className="bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <img
              src={
                book.cover_i
                  ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                  : "https://via.placeholder.com/150x200?text=No+Cover"
              }
              alt={book.title}
              className="rounded-lg mb-3 w-full h-48 object-cover"
            />
            <h3 className="text-md font-semibold text-gray-800 line-clamp-2">
              {book.title}
            </h3>
            <p className="text-sm text-gray-500">
              {book.author_name ? book.author_name[0] : "Unknown Author"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
