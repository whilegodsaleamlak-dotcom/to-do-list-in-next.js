export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white text-center py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-300">Made with ❤️ using Next.js & Tailwind CSS</p>
        <p className="text-gray-500 text-sm mt-2">© {currentYear} Todo App. All rights reserved.</p>
      </div>
    </footer>
  );
}