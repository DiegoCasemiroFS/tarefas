import { useState } from "react";
import Todo from "./components/Todo";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Realizar projeto de extensão",
      category: "Trabalho",
      date: "2024-08-29",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Aniversário",
      category: "Pessoal",
      date: "1998-04-07",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Realizar Prova",
      category: "Estudos",
      date: "2024-09-01",
      isCompleted: false,
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");
  const [search, setSearch] = useState("");

  const addTodo = (text, category, date) => {
    const newTodos = [...todos, 
      { id: Math.floor(Math.random() * 1000), text, category, date, isCompleted: false }
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  // Função para ordenar as tarefas
  const ordenarTarefas = (todos) => {
    return todos.sort((a, b) => {
      if (sort === "Asc" || sort === "Desc") {
        return sort === "Asc"
          ? a.text.localeCompare(b.text)
          : b.text.localeCompare(a.text);
      }
      if (sort === "category") {
        return sort === "Asc"
          ? a.category.localeCompare(b.category)
          : b.category.localeCompare(a.category);
      }
      if (sort === "date") {
        return sort === "Asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return 0; // Caso padrão
    });
  };

  // Filtra e ordena as tarefas
  const todosFiltradosEOrdenados = ordenarTarefas(
    todos
      .filter((todo) =>
        filter === "All"
          ? true
          : filter === "Completed"
          ? todo.isCompleted
          : !todo.isCompleted
      )
      .filter((todo) =>
        todo.text.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className="todo-list">
        {todosFiltradosEOrdenados.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;