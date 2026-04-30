import "../../styles/home.css";
import image from "/images/hunnam.webp";

export function Biography() {
  return (
    <section className="biography" id="about">
      <span className="biography-hdr">
        The Early Years: Unpolished Beginnings
      </span>

      <div className="biography-txt">
        <div>
          <span>
            Born in Newcastle upon Tyne, England, Hunnam’s early life wasn’t
            shaped by industry ambition. There was no blueprint. No carefully
            constructed path toward stardom.{" "}
          </span>

          <span>
            He was discovered by chance — spotted in a shoe shop as a teenager.
            No strategy. No orchestration. Just presence.{" "}
          </span>

          <div>
            <span>And even then, there was something distinct:</span>A rawness
            that didn’t feel performative. A stillness that didn’t feel empty.
            He didn’t arrive as a finished product. He arrived as potential —
            rough, real, and unfiltered.
          </div>
        </div>

        <div className="biography-txt-img">
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
