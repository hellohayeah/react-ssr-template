import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Menu = () => (
  <nav className="menu">
    <ul>
      <li>
        <Link to="/">首頁</Link>
      </li>
      <li>
        <Link to="password">密碼強度</Link>
      </li>
      <li>
        <Link to="region-select">地區選單</Link>
      </li>
      <li>
        <Link to="image-preview">預覽圖片</Link>
      </li>
      <li>
        <Link to="filter-list">篩選列表</Link>
      </li>
      <li>
        <Link to="filter-list-with-color">篩選顏色</Link>
      </li>
      <li>
        <Link to="portals">Portals</Link>
      </li>
      <li>
        <Link to="error-boundaries">Error Boundaries</Link>
      </li>
      <li>
        <Link to="hoc">HOC</Link>
      </li>
      <li>
        <Link to="ref">Ref</Link>
      </li>
      <li>
        <Link to="render-prop">Render prop</Link>
      </li>
      <li>
        <Link to="react-api">React API</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
