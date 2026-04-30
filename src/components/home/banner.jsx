import "../../styles/home.css";
import image from "/images/CHARLIE-header.webp";
// import { ContactContextFunction } from "../../context/contact.jsx";

export function Banner() {
  // const { openContactPopup } = ContactContextFunction();

  return (
    <section className="banner" id="home">
      <div className="banner-text">
        <span>Welcome to the World of Charlie Hunnam</span>
      </div>

      <div className="banner-content">
        <span>Some actors chase visibility. Some actors chase validation.</span>
        <span>Charlie Hunnam chased substance.</span>

        <span>
          And in doing so, he built a career that doesn’t shout for attention —
          but holds it anyway.
        </span>
        <span>
          He is not the loudest presence in the room. He is the one you notice
          without knowing why.
        </span>
        <span>
          Grounded. <br />
          Measured. <br />
          Uncompromisingly physical.
        </span>

        <span>
          Charlie Hunnam didn’t rise through spectacle. He rose through weight.
        </span>
      </div>

      <div className="banner-img">
        <img src={image} />
      </div>
    </section>
  );
}
