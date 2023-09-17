import "./../../styles/styles.css";

import Group56 from "./../../styles/img/Group56.svg";
import logo from "./../../styles/ima/logo.png";
import analyse1 from "./../../styles/img/analyse1.png";
import whatsapp from "./whatsapp.png";
import telegram from "./telegram.png";

const Header = () => {
  return (
    <header>
      <section>
        <div className="container-offer">
          <div className="row">
            <div className="business-offer col-12 col-md-6 col-xl-4">
              <h1>
                Я помогу сделать Вам Ваш
                <span style={{ color: "#7bc0e3" }}>веб-сайт</span>
              </h1>
              <p>
                Я начинающий программист на js и react, но опытный на php. Я
                делаю с нуля как маленькие, так и крупные сайты. Я ищу работу
                frontend разработчиком.
              </p>
              <div>
                <br />
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
                <div>
                  <br />
                  <br />
                </div>
                <div>
                  <a
                    href="https://docs.google.com/document/d/1xiDcd95pOp3mgW5OHKy7_e6yKXP-BdZROFhgWw11NUo/edit?usp=sharing"
                    className="btn"
                  >
                    мое резюме
                  </a>
                  <a
                    className="btn"
                    href="mailto:pevec1@yandex.ru?subject=вопрос"
                  >
                    email
                  </a>
                  <a className="btn-disabled" href="#head">
                    Контакты
                  </a>

                  <img className="circles" src={Group56} alt="" />

                  <a className="btn" href="/reacts">
                    Портфолио React
                  </a>
                  <a className="btn" href="/works">
                    Портфолио
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-2 col-xl-2">
                <canvas id="canvas" className="canvas">
                  <img id="logos" className="img-rotate" src={logo} alt="" />
                </canvas>
              </div>
              <div className="business-offer col-12 col-md-5 col-xl-5">
                <img className="analyse" src={analyse1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
