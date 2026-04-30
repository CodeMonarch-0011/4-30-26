import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";
// import image from "/images/img-8.webp";

export function PersonalLife() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="personal-life">
      <span className="personal-life-hdr">
        Acting Style: Strength in Restraint
      </span>
      <div className="personal-life-txt">
        <span>
          Charlie Hunnam’s approach isn’t about disappearing into characters
          like Johnny Depp. <br />
          It’s about grounding them.
        </span>

        <div>
          <span>His performances are built on:</span>
          <ul>
            <li>Physical Truth — posture, movement, tension</li>
            <li>Emotional Containment — controlled, rarely excessive</li>
            <li>Internal Conflict — often felt more than spoken</li>
            <li>Masculine Vulnerability — strength without invincibility</li>
            <li>Silence as Power — absence of words as presence of meaning</li>
          </ul>
        </div>

        <span>
          He doesn’t perform emotion outwardly. He lets it sit just beneath the
          surface. And that tension pulls the audience in.
        </span>

        <button onClick={openContactPopup}>Get in Touch</button>
      </div>
    </section>
  );
}
