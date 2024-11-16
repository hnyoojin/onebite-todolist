import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// id가 'root'인 요소를 root로 만들어서 root에 저장하겠다는 의미의 코드
const root = ReactDOM.createRoot(document.getElementById('root'));

// root에는 현재 리액트의 root가 저장되어 있음
// render 메서드 : 인수로 리액트 컴포넌트를 전달. 이 컴포넌트를 DOM root에 추가함
// -> 전달된 리액트 컴포넌트가 DOM에 추가되어서 페이지에 나타남
// 이 코드는 App 컴포넌트를 DOM root에 추가함
// -> 페이지에 App 컴포넌트에서 정의한 HTML 요소가 표시됨
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// React.StrictMode : 개발 모드 검사기
// 개발 중에 잠재적인 문제를 감지하고 경고를 제공하기 위한 도구
// 안전한 생명 주기 메서드 확인
// 의심스러운 사이드 이펙트 감지
// 의도치 않은 상태 업데이트 감지