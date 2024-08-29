import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !date) return; 
    addTodo(value, category, date); 
    setValue("");
    setCategory("");
    setDate(""); 
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Digite o título"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Seleciona uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <input
          type="date"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;