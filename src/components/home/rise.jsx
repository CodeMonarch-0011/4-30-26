import "../../styles/home.css";
import image from "/images/king-arthur-hunnam.jpg";

export function Rise() {
  return (
    <section className="rise">
      <span className="rise-hdr">First Exposure: Learning in Public</span>

      <div className="rise-main">
        <div className="rise-txt">
          His early work came quickly. Queer as Folk introduced him to audiences
          in a role that was bold, exposed, and impossible to ignore. It wasn’t
          safe. It wasn’t calculated. But it was honest. From the beginning,
          Hunnam leaned toward characters that lived close to discomfort —
          emotionally, physically, psychologically.
        </div>

        <div className="rise-main-img">
          <img src={image} />
        </div>
      </div>

      <div className="rise-main-extra">
        <span>Then came Green Street.</span>
        The performance sparked debate. Accents questioned. Choices scrutinized.
        But underneath all of it, one thing was clear: He was committed. Even
        when imperfect — he was all in. And that willingness to risk
        imperfection would define his career.
      </div>
    </section>
  );
}
