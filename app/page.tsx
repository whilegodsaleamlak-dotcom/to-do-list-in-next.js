"use client";

import { useState } from "react";
import { useTodo } from "@/context/TodoContext";
import Link from "next/link";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { addTodo, todos } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, description, dueDate);
      setTitle("");
      setDescription("");
      setDueDate("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Create a New Task
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Add your tasks and organize your day
          </p>
        </div>

        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <p className="text-green-700 font-medium">✓ Task added successfully!</p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Task Title *
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter your task title"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Add details about your task (optional)"
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-200 resize-none"
                rows={4}
              />
            </div>

            <div>
              <label htmlFor="dueDate" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Due Date
              </label>
              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
              >
                ➕ Add Task
              </button>
              <Link
                href="/demo"
                className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 rounded-lg transition duration-200 text-center"
              >
                👁️ View Tasks
              </Link>
            </div>
          </form>
        </div>

        <div className="bg-blue-50 dark:bg-gray-800 rounded-lg p-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">{todos.length}</span> tasks created
          </p>
        </div>
      </div>
    </div>
  );
}