import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import Renting from "../renting/Renting";

const Footer = () => {
  interface FooterSection {
    title: string;
    items: string[];
  }

  const footerItems: FooterSection[] = [
    {
      title: "COMPANY",
      items: [ "Contact", "Careers", "Press", "Terms of Use"],
    },
    {
      title: "SERVICES",
      items: ["Renting", "Selling", "Buying", "Management",],
    },
    {
      title: "SUPPORT",
      items: ["FAQ", "Help Center", "Privacy Policy", "Terms & Conditions"],
    },
  ];

  return (
    <div>

      {/* footer */}
      <div className="p-5 lg:p-10 grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        {/* left side */}
        <div>
          <p className="text-sm font-bold">
            Sun Tower <br /> suntower.com
          </p>
          <p className="text-sm mt-9">Your time to relax. Our time to sparkle</p>
          <div className="flex gap-2 mt-5 mb-9">
            <span className="p-2 border border-black duration-500 group hover:bg-blue-600 rounded-full">
              <FaFacebook className="group-hover:text-white" />
            </span>
            <span className="p-2 border border-black duration-500 group hover:bg-rose-500 rounded-full">
              <FaInstagram className="group-hover:text-white" />
            </span>
            <span className="p-2 border border-black duration-500 group hover:bg-black rounded-full">
              <FaTiktok className="group-hover:text-white" />
            </span>
            <span className="p-2 border border-black duration-500 group hover:bg-green-600 rounded-full">
              <FaWhatsapp className="group-hover:text-white" />
            </span>
          </div>
          <p className="text-xs">
            © 2025 Real Estate Developer & Construction Company • Terms of Use •
            Privacy Policy
          </p>
        </div>

        {/* right side */}
        <div className="grid grid-cols-3  gap-5">
          {footerItems.map((section, index) => (
            <ul key={index} className="text-xs leading-8">
              <p className="text-black font-bold">{section.title}</p>
              {section.items.map((item, idx) => (
                <li className="text-gray-600" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;