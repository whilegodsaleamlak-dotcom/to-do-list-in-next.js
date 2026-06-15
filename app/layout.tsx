import "./globals.css";
import type { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TodoProvider } from "@/context/TodoContext";

export const metadata: Metadata = {
  title: "Todo App | Manage Your Tasks Efficiently",
  description: "A modern todo list application built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100 transition duration-300">
        <TodoProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </TodoProvider>
      </body>
    </html>
  );
}