import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const clickTestButton = () => {
    // APIエンドポイントのURLを指定
    const apiUrl = 'http://localhost:5000/greeting';
  
    setLoading(true); // リクエストが始まるとローディング状態をセット
  
    // GETリクエストを送信
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        alert();
        setData(data); // 取得したデータをStateに保存
        setLoading(false); // ローディング状態を解除
      })
      .catch((error) => {
        console.error('APIリクエストエラー:', error);
        setLoading(false); // エラー時にもローディング状態を解除
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={clickTestButton}>test</button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </header>
    </div>
  );
}

export default App;
