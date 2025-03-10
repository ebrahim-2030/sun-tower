import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="loader flex items-center justify-center">
        <FaWhatsapp className="text-4xl text-white" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
