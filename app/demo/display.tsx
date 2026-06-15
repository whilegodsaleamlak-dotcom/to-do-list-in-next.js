"use client";

import { useState } from "react";
import { useTodo, Todo } from "@/context/TodoContext";
import Link from "next/link";

export default function Demo() {
  const { todos, deleteTodo, toggle, updateTodo } = useTodo();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  const filtered = todos.filter((todo) => {
    const matchesSearch =
      todo.title.toLowerCase().includes(search.toLowerCase()) ||
      (todo.description?.toLowerCase().includes(search.toLowerCase()) ?? false);

    if (filter === "active") return matchesSearch && !todo.completed;
    if (filter === "completed") return matchesSearch && todo.completed;
    return matchesSearch;
  });

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description || "");
    setEditDueDate(todo.dueDate || "");
  };

  const saveEdit = () => {
    if (editingId && editTitle.trim()) {
      updateTodo(editingId, editTitle, editDescription, editDueDate);
      setEditingId(null);
    }
  };

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return null;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const isOverdue = (dueDate: string | undefined, completed: boolean) => {
    if (!dueDate || completed) return false;
    return new Date(dueDate) < new Date();
  };

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Your Tasks
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and track your daily activities
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</p>
            <p className="text-gray-600 dark:text-gray-300">Total Tasks</p>
          </div>
          <div className="bg-green-100 dark:bg-green-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</p>
            <p className="text-gray-600 dark:text-gray-300">Completed</p>
          </div>
          <div className="bg-amber-100 dark:bg-amber-900 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">{stats.active}</p>
            <p className="text-gray-600 dark:text-gray-300">Active</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="🔍 Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:border-blue-500 transition duration-200"
            />

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter("active")}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                  filter === "active"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
                }`}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                  filter === "completed"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
                }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No tasks found. 📝
              </p>
              <Link
                href="/"
                className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg"
              >
                Create Task
              </Link>
            </div>
          ) : (
            filtered.map((todo) => (
              <div
                key={todo.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              >
                {editingId === todo.id ? (
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full px-3 py-2 border-2 border-blue-500 dark:bg-gray-700 dark:text-white rounded-lg"
                    />
                    <textarea
                      value={editDescription}
                      onChange={(e) => setEditDescription(e.target.value)}
                      placeholder="Description"
                      className="w-full px-3 py-2 border-2 border-gray-200 dark:bg-gray-700 dark:text-white rounded-lg"
                      rows={2}
                    />
                    <input
                      type="date"
                      value={editDueDate}
                      onChange={(e) => setEditDueDate(e.target.value)}
                      className="w-full px-3 py-2 border-2 border-gray-200 dark:bg-gray-700 dark:text-white rounded-lg"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 rounded-lg"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggle(todo.id)}
                        className="w-5 h-5 mt-1 cursor-pointer"
                      />
                      <div className="flex-1">
                        <h3
                          className={`text-lg font-semibold ${
                            todo.completed ? "line-through text-gray-500" : "text-gray-900 dark:text-white"
                          }`}
                        >
                          {todo.title}
                        </h3>
                        {todo.description && (
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            {todo.description}
                          </p>
                        )}
                      </div>
                    </div>

                    {todo.dueDate && (
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        📅 Due: {formatDate(todo.dueDate)}
                        {isOverdue(todo.dueDate, todo.completed) && " (Overdue)"}
                      </div>
                    )}

                    <div className="flex gap-2">
                      {deleteConfirmId === todo.id ? (
                        <>
                          <button
                            onClick={() => {
                              deleteTodo(todo.id);
                              setDeleteConfirmId(null);
                            }}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="flex-1 bg-gray-400 text-white font-semibold py-2 rounded-lg"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEdit(todo)}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(todo.id)}
                            className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}