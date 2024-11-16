// 낱낱의 할 일 아이템
// 기본 정보 외에도 체크박스와 <삭제> 버튼이 있음
// 체크 박스를 클릭 -> 할 일을 마쳐쓴지 여부가 toggle 됨
// <삭제> 버튼을 클릭하면 해당 아이템을 삭제

import './css/TodoItem.css'

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => { 
    const onChangeCheckbox = () => {
      onUpdate(id);
    };
    const onClickDelete = () => { 
      onDelete(id);
    };
  
    return (
      <div className="TodoItem">
        <div className="checkbox_col">
          <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
        </div>
        <div className="title_col">{content}</div>
        <div className="date_col">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="btn_col">
          <button onClick={onClickDelete}>Delete</button> 
        </div>
      </div>
    );
  };
  export default TodoItem;