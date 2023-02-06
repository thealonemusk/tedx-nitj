import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_license">
        <h1>License Holder</h1>
        <p>Sanchita Kapur</p>
        <p>+91-9814670909</p>
        <div className="social-icon">
          <a href="#"><img src={navIcon1} alt="" /></a>
          <a href="#"><img src={navIcon2} alt="" /></a>
          <a href="#"><img src={navIcon3} alt="" /></a>
        </div>
      </div>
      <div className="footer_followers">
        <h1>Important Links</h1>
        <p><a href = "">TED</a></p>
        <p><a href = "">TEDx</a></p>
        <p><a href = "">TED Blog</a></p>
      </div>
      <div className="footer_contactUs">
        <h1>Contact Us</h1>
        <p>You can mail us at tedx@nitj.ac.in</p>
        <div className="social-icon">
          <a href="#"><img src={navIcon1} alt="" /></a>
          <a href="#"><img src={navIcon2} alt="" /></a>
          <a href="#"><img src={navIcon3} alt="" /></a>
        </div>

      </div>
      <div className="footer_Map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.8015214705724!2d75.53475060055196!3d31.395668269175257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51d30c180edf%3A0x5b7633718d17ef33!2sDr%20B%20R%20Ambedkar%20National%20Institute%20of%20Technology%20Jalandhar!5e1!3m2!1sen!2sin!4v1674650389321!5m2!1sen!2sin" width="500" height="200" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </footer>
  )
}
