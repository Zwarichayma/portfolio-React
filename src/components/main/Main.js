import "./main.css";

const Main = () => {
  return (
    <main className="flex">
      <section className="flex left-section">
        <button className="active">EXPÉRIENCES</button>
        <button>Stages</button>
      </section>

      <section className="flex right-section">
        {[1].map((item) => {
          return (
            <article key={item} className="card">
              <img width={266} src="onrtech.jpg" alt="ONRTECH" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Stage</h1>
                <p className="sub-title">
                  Développeur Python <br />
                  ONRTECH, Villiers-sur-Marne, France
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <a
                      href="https://www.linkedin.com/company/onrtech/posts/?feedView=all"  // Example for LinkedIn link
                      className="icon-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon */}
                    </a>
                    <a
                      href="https://github.com/ONRTECH"  // Replace with your actual GitHub URL
                      className="icon-github"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {/* GitHub Icon */}
                    </a>
                  </div>

                  <a className="link flex" href="https://onrtech.fr/" target="_blank" rel="noopener noreferrer">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
