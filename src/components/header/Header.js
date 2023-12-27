import "./../../styles/styles.css";

import Group56 from "./../../styles/img/Group56.svg";
import logo from "./../../styles/ima/logo.png";
import analyse1 from "./../../styles/img/analyse1.png";
import whatsapp from "./whatsapp.png";
import telegram from "./telegram.png";
import Rotate from "./scripts_rotate";


const Header = () => {
  return (
    <header>
      <section>
        <div className="container-offer">
          <div className="column">
            <div className="business-offer col-12 col-md-5 col-xl-5">
              <h1>
                Я помогу сделать Вам Ваш
                <span style={{ color: "#7bc0e3" }}>веб-сайт</span>
              </h1>
              <p>
                Я опытный программист на php, также на js и react. Я
                делаю с нуля как небольшие, так и крупные сайты.              </p>
            </div>
          </div>
          <div className="row">
            <div className="column" style={{justifyContent:'flex-start'}}>
              <div className="row">
                <a href="tel:+79652758777" rel="nofollow" className="btn">
                  позвоните мне
                </a>
                <a
                  className="btn"
                  target="_blank"
                  href="https://wa.me/+79652758777"
                >
                  <img src={whatsapp} />
                </a>
                <a className="btn" target="_blank" href="https://t.me/luksik1">
                  <img src={telegram} />
                </a>
              </div>

              <div className="row">
                <a
                  href="https://docs.google.com/document/d/1xiDcd95pOp3mgW5OHKy7_e6yKXP-BdZROFhgWw11NUo/edit?usp=sharing"
                  className="btn"
                >
                  мое резюме
                </a>
                <a
                  className="btn"
                  href="mailto:a@harenkon.ru?subject=вопрос"
                >
                  email
                </a>
                <a className="btn-disabled" href="#head">
                  Контакты
                </a>

                <img className="circles" src={Group56} alt="" />
              </div>

              <div className="row">
                <a className="btn" href="/reacts">
                  Портфолио React
                </a>
                <a className="btn" href="/works">
                  Портфолио
                </a>
              </div>
            </div>
            <Rotate />
            <div className="business-offer col-12 col-md-5 col-xl-5">
              <img className="analyse" src={analyse1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
