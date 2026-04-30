import "../../styles/home.css";
import image from "/images/charlie-hunnam-at.webp";

export function Legacy() {
  return (
    <section className="legacy" id="perception">
      <span className="legacy-hdr">Perception vs Reality</span>

      <div className="legacy-main">
        <div className="legacy-main-txt">
          To many, he is still Jax Teller. To others, he is the actor who almost
          became a blockbuster staple. But both perspectives miss the core
          truth: <br />
          Charlie Hunnam isn’t chasing dominance. He’s building durability. His
          career isn’t defined by peaks. It’s defined by consistency.
        </div>

        <div className="legacy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
