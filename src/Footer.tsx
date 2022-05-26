import { ReactComponent as Mail } from "./images/envelope-solid.svg";
import { ReactComponent as Instagram } from "./images/instagram-brands.svg";
import { ReactComponent as Linkedin } from "./images/linkedin-brands.svg";
import { ReactComponent as Phone } from "./images/phone-flip-solid.svg";

const Footer = () => (
  <footer className="columns-2 md:columns-4 justify-center p-5 sm:py-5 border-t bg-white">
    <div className="flex flex-row items-center mb-2 sm:mb-0 md:justify-center">
      <Phone className="w-5 mr-2 fill-black" />
      <div>
        <p className="font-bold text-black text-xs">Contacto</p>
        <p className="text-xs text-darkGrayishBlue">092927825</p>
      </div>
    </div>
    <div className="flex flex-row items-center mb-2 sm:mb-0 md:justify-center">
      <Mail className="w-5 mr-2 fill-black" />
      <div>
        <p className="font-bold text-black text-xs">Mail</p>
        <p className="text-xs text-darkGrayishBlue">coetzy@hotmail.com</p>
      </div>
    </div>
    <div>
      <a
        className="flex flex-row items-center mb-2 sm:mb-0 md:justify-center"
        href="https://www.linkedin.com/in/constanza-morero-090182222"
      >
        <Linkedin className="w-5 mr-2 fill-black" />{" "}
        <div>
          <p className="font-bold text-black text-xs">Linkedin</p>
          <p className="text-xs text-darkGrayishBlue">constanza-morero</p>
        </div>
      </a>
    </div>
    <div>
      <a
        className="flex flex-row items-center mb-2 sm:mb-0 md:justify-center"
        href="https://www.instagram.com/coetzy_"
      >
        <Instagram className="w-5 mr-2 fill-black" />
        <div>
          <p className="font-bold text-black text-xs">Instagram</p>
          <p className="text-xs text-darkGrayishBlue">@coetzy_</p>
        </div>
      </a>
    </div>
  </footer>
);

export default Footer;
