// 오늘의 날짜를 표시 형식에 맞게 보여주는 컴포넌트

import './css/Header.css'
const Header = () => {
    return (
        <div className="Header">                    
            <h3>Today is 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
};

export default Header;