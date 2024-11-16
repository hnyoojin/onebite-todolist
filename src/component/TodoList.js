import { useState } from "react";
import './css/TodoList.css'
import TodoItem from './TodoItem.js'

const TodoList = ({ todo, onUpdate, onDelete }) => {
    const [search, setSearch] = useState(""); 

    const onChangeSearch = (e) => {
      setSearch(e.target.value);
    };

    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase()) 
        );
    };

  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input 
        value={search}
        onChange={onChangeSearch}
        className="searchbar" 
        placeholder="Search" />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;