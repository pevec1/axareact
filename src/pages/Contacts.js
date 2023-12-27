const Contacts = () => {
    return (
      <main>
        {" "}
        <section className="work-as work">
          <div className="container">
            <h2>Заинтересованы в работе со мной ? ?</h2>
            <p>Отправьте письмо здесь и ждите ответа.</p>
            <div>
              <a
                href="mailto:a@harenkon.ru?subject=вопрос"
                rel="nofollow"
                className="btn-black"
              >
                Напишите мне
              </a>
            </div>
          </div>
        </section>
        <section className="our-blog">
          <div className="container">
            <div>
              <div className="about-blog">
                <h2>Наш блог</h2>
                <p>В AXA Code блоге я расскажу как я черпаю идеи из фильмов.</p>
              </div>
              <a className="btn-disabled" href="/creative">
                Смотреть идеи
              </a>
            </div>
          </div>
        </section>
      </main>
    );
}
 
export default Contacts;