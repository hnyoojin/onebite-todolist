// 새로운 할 일 아이템을 등록하는 컴포넌트

import './css/TodoEditor.css'

const TodoEditor = () => {
    const [content, setContent] = useState("");
    const inputRef = useRef(); 

    const onChangeContent = (e) => {
        setContent(e.target.value);
      };

    const onKeyDown = (e) => { 
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (!content) { 
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent(""); 
    };

    return (
        <div className="TodoEditor">
            <h4>New Todo✏️</h4>
            <div className="editor_wrapper">
            <input
                ref={inputRef} 
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown} 
                placeholder="New Todo..."
            />     
            <button onClick={onSubmit}>Add</button>
            </div>
        </div>
    );
};

export default TodoEditor;