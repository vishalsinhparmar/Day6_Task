
import { LiaLinkedin, LiaGithub, LiaTwitter } from "react-icons/lia";
 // Import CSS file

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <p className="copyright">© 2024 VISHAISINH. All rights reserved.</p>
      <div className="footer-links">
        <a href="#" className="footer-link">Schedule Appointment</a>
        <span className="divider">|</span>
        <a href="#" className="footer-link">Complete Intake</a>
      </div>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/parmar-vishalsinh-20561726b/" target="_blank" rel="noopener noreferrer" className="linkedin"><LiaLinkedin /></a>
        <a href="https://github.com/vishalsinhparmar" target="_blank" rel="noopener noreferrer" className="github"><LiaGithub /></a>
        <a href="https://x.com/gaming_oxy90924" target="_blank" rel="noopener noreferrer" className="twitter"><LiaTwitter /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
