"use client";

import { createContext, useContext, useEffect, useState } from "react";

export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
  dueDate?: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string, description?: string, dueDate?: string) => void;
  deleteTodo: (id: number) => void;
  toggle: (id: number) => void;
  updateTodo: (id: number, title: string, description?: string, dueDate?: string) => void;
  getTodoById: (id: number) => Todo | undefined;
}

const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      setTodos(JSON.parse(saved));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  function addTodo(title: string, description: string = "", dueDate: string = "") {
    if (!title.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate || undefined,
    };
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  function toggle(id: number) {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }

  function updateTodo(id: number, title: string, description: string = "", dueDate: string = "") {
    setTodos(
      todos.map((t) =>
        t.id === id
          ? {
              ...t,
              title: title.trim(),
              description: description.trim(),
              dueDate: dueDate || undefined,
            }
          : t
      )
    );
  }

  function getTodoById(id: number) {
    return todos.find((t) => t.id === id);
  }

  const value: TodoContextType = {
    todos,
    addTodo,
    deleteTodo,
    toggle,
    updateTodo,
    getTodoById,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within TodoProvider");
  }
  return context;
}