import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-300 text-base-content">
        <ScrollToTop
          smooth
          top="1000"
          font="bold"
          style={{
            color: "black",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <div>
          <p className="btn btn-ghost normal-case text-xl">
            <img
              className="h-16 w-16 mr-3 rounded-full"
              src="https://img.freepik.com/premium-vector/cute-adorable-cartoon-flying-launch-rocket-pencil-illustration-sticker-icon-mascot-logo_572542-57.jpg?w=740"
              alt=""
            />{" "}
          </p>
          <p className="text-xl drop-shadow-2xl text-purple-600 font-bold">
            Drawing School
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4 cursor-pointer text-2xl">
            <Link to="https://web.facebook.com/profile.php?id=100010121712983">
              <FaFacebook></FaFacebook>
            </Link>
            <Link to="https://www.linkedin.com/in/sharmin-akhi-26a08b1b9/">
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link to="https://twitter.com/SharminAkhi10">
              <FaTwitter></FaTwitter>
            </Link>
            <Link to="https://github.com/AkhiSharmin">
              <FaGithub></FaGithub>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
