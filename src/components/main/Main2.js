import "./main.css";
const Main2 = () => {
  return (
    <main className="flex" href="#">
      
      <section className="flex  left-section">
        <button className="active">CERTIFICATIONS</button>
        
      </section>

      <section className=" flex right-section">
        {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="certif.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Machine Learning in Python </h1>
                

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="https://learn.365datascience.com/c/1ceda481b7/">
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
      <section className=" flex right-section">
        {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="certif.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Git and GitHub </h1>


                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
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
      <section className=" flex right-section">
        {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="certif.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Web   Scraping	and	API Fundamentals	in Python </h1>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="https://learn.365datascience.com/c/eba619d508/">
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

export default Main2;
