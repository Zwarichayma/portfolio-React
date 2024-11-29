import "./main.css";
const Main1 = () => {
  return (
    <main className="flex">
      
      <section className="flex  left-section">
        <button className="active">Projet Académique</button>
        <button>Application Mobile</button>
      </section>

      <section className=" flex right-section">
        {[1].map((item) => {
          return (
            <article key={item} className="  card">
              <img width={266} src="megaTel.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">Mega Tel</h1>
                <p className="sub-title">
                Development of a Mobile Application for Optimizing Customer Satisfaction Surveys</p>

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
              <img width={266} src="OIP.jpg" alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">NFT Marketplace</h1>
                <p className="sub-title">
                Development of an NFT marketplace using React Native for the frontend and MongoDB for the backend, 
                enabling the display, purchase, and sale of tokens.</p>

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
    </main>

    
  );
};

export default Main1;
