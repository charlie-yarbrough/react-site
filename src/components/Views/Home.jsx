import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div>
      <div className="center-align surface-container-low">
        <div className="page-header">
          <div className="padding">
            <img
              className={`hero-shot ${loaded ? "slide-in" : ""}`}
              src="src/assets/pfp.jpg"
              alt="profile"
            />
            <div className="large-space"></div>
            <div className="small-height center-align">
              <h6>Charlie Yarbrough</h6>
              <h3>Data Analyst</h3>
              <div className="medium-space"></div>
              <button className="border small">Learn more</button>
              <button className="border small">My Work</button>
              <div className="medium-space"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-align">
        <div className="page-body">
          <div className="medium-space"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facilis praesentium distinctio nobis, labore quam fuga voluptas
            totam molestias omnis sint nulla dolorem accusantium consequatur quo
            a reprehenderit quia molestiae! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Reiciendis, nobis, quasi consequuntur
            sapiente expedita distinctio cupiditate tempore eum porro similique
            saepe modi molestias ipsa ducimus earum velit! Doloremque,
            exercitationem harum! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Quibusdam excepturi quisquam explicabo sequi
            dolores molestiae officia vel? A consequuntur, sunt excepturi dicta,
            minus ratione assumenda accusamus rem doloremque facilis labore?
          </p>
        </div>
      </div>
    </div>
  );
}
