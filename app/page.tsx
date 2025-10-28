import BookFinder from "./Components/BookFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-semibold text-purple-700 mb-8 text-center">
        📚 Book Finder
      </h1>
      <BookFinder />
    </main>
  );
}
