import "../../styles/home.css";
import image from "/images/hunnam-style-lede.webp";

export function Philosophy() {
  return (
    <section className="philosophy" id="philosophy">
      <span className="philosophy-hdr">The Reluctant Public Figure</span>

      <div className="philosophy-main">
        <div className="philosophy-list">
          <span>
            Hunnam has never fully embraced celebrity culture. He works — then
            disappears.
          </span>

          <div>
            No constant visibility. <br />
            No manufactured persona. <br />
            No obsession with relevance. <br />
          </div>

          <div>
            There’s a distance he maintains. And that distance does something
            rare: It protects the work. When he appears, it feels intentional.
            Not routine. Not expected. Earned.
          </div>
        </div>

        <div className="philosophy-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
