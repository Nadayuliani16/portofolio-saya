import '../styles/Contact.css'; // Make sure to create this CSS file
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <a href='mailto:nada.yuliani@example.com' aria-label="Email">
              <MdOutlineMail className="contact-icon" />
            </a>
            <div>
              <h3>Email</h3>
              <p>nadayuliani16@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <a href='https://github.com/Nadayuliani16' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="contact-icon" />
            </a>
            <div>
              <h3>GitHub</h3>
              <p>Nadayuliani16</p>
            </div>
          </div>
          <div className="contact-item">
            <a href='https://www.instagram.com/nd_ylia/?next=%2Fusername%2F' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="contact-icon" />
            </a>
            <div>
              <h3>Instagram</h3>
              <p>nd_ylia</p>
            </div>
          </div>
        </div>   
      </div>
    </section>
  );
}

export default Contact;
