import "./../../styles/styles.css";

import axamobile from "./../../styles/img/axamobile.png";

const Navmobile = () => {
  return (
    <div className="nav-mobile">
      <div className="header">
        <div className="menu">
          <a className="menu-triger" href="#"></a>
          <div className="menu-popup">
            <a className="menu-close" href="#"></a>
            <ul>
              <li>
                <a href="/">
                  <p className="logo">
                    <img src={axamobile}></img>
                  </p>
                </a>
              </li>
              <li>
                <a href="/aboutus">Обо мне</a>
              </li>
              <li>
                <a href="/reacts">Проекты React</a>
              </li>
              <li>
                <a href="/works">Проекты</a>
              </li>
              <li>
                <a href="/news">Новости</a>
              </li>
              <li>
                <a href="/contacts">Контакты</a>
              </li>
              <li style={{ marginTop: 20 + "px" }}></li>
              <li>
                <a href="#" className="btn lk">
                  Личный кабинет
                </a>
                <a href="/" className="btn logout">
                  Выход
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="/">
          <p className="logo">
            <img src={axamobile}></img>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Navmobile;
