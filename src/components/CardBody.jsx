import Button from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function CardBody() {
  return (
    <div className="card-body">
      <h1>Fernando Funez</h1>
      <p>Frontend Developer</p>
      <div className="buttons-wraper">
        <Button
          href={"https://www.linkedin.com/in/fernando-funezdev/"}
          className="button-2"
          text={"LinkedIn"}
          icon={<FontAwesomeIcon className="button-icon-2" icon={faLinkedin} />}
        />
        <Button
          href={"mailto:djfumes@gmail.com"}
          text={"Email"}
          icon={<FontAwesomeIcon className="button-icon-1" icon={faEnvelope} />}
        />
      </div>
      <div className="content-wraper">
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interest</h3>
        <p>Foodie, Tech Fanatic, Travel Geek, Teachno DJ and Vinyl Lover.</p>
      </div>
    </div>
  );
}

export default CardBody;
