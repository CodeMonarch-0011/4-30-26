import "../../styles/home.css";
import { ContactContextFunction } from "../../context/contact.jsx";

export function LookingAhead() {
  const { openContactPopup } = ContactContextFunction();

  return (
    <section className="looking-ahead">
      <span className="looking-ahead-hdr">Legacy in Motion</span>

      <div>
        <span>
          Charlie Hunnam’s story isn’t about transformation. <br />
          It’s about refinement.
        </span>
        He didn’t reshape Hollywood. He carved out a place within it — quietly,
        deliberately, and on his own terms. No rush. No noise. No performance
        beyond the work itself.
      </div>

      <div>
        Charlie Hunnam isn’t just part of the story. In a lot of ways… He is the
        reason you stay to the end.
      </div>

      <button onClick={openContactPopup}>Get in Touch</button>
    </section>
  );
}
