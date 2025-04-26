import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
<footer className="bg-gray-200 py-8 mt-6">
  <div className="flex flex-col gap-8 xl:flex-row xl:justify-between xl:items-start max-w-6xl mx-auto px-4">
    {/* Vänster + Mitten: Kontakt + Om företaget */}
    <div className="flex flex-col gap-8 md:flex-row md:justify-between md:w-3/4 md:m-auto xl:w-2/3">
      {/* Kontaktuppgifter */}
      <div className="text-center text-gray-900 md:text-left md:w-1/2">
        <address className="not-italic text-gray-800">
          <p className="font-semibold">Matkasse AB</p>
          <p>Exempelgatan 123</p>
          <p>123 45 Staden</p>
          <p>Sverige</p>
          <p className="p-1">
            E-post:{" "}
            <a
              href="mailto:info@matkasse.se"
              className="text-blue-600 underline"
            >
              info@matkasse.se
            </a>
          </p>
          <p className="p-1">
            Telefon:{" "}
            <a href="tel:+46701234567" className="text-blue-600 underline">
              070-123 45 67
            </a>
          </p>
        </address>
      </div>

      {/* Om företaget */}
      <div className="text-center text-gray-900 md:text-left md:w-1/2">
        <p className="text-lg font-semibold text-center">Om Matkasse AB</p>
        <p>
          Vi levererar färdiga matkassar direkt till din dörr, med fokus på
          hållbarhet, kvalitet och enkelhet. Gör vardagen smidigare med god
          mat utan stress!
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Matkasse AB. Alla rättigheter
          förbehållna.
        </p>
      </div>
    </div>

    {/* Sociala medier */}
    <div className="flex flex-col items-center text-center xl:items-start xl:w-1/3">
      <h6 className="text-2xl mb-4 self-center">Följ Gärna Oss</h6>
      <ul className="flex flex-row gap-4 self-center text-4xl">
        <li className="text-blue-800">
          <a href="">
            <FaFacebook />
            <span className="sr-only">Facebook</span>
          </a>
        </li>
        <li className="text-red-800">
          <a href="">
            <FaInstagram />
            <span className="sr-only">Instagram</span>
          </a>
        </li>
        <li className="text-yellow-400">
          <a href="">
            <FaSnapchat />
            <span className="sr-only">Snapchat</span>
          </a>
        </li>
        <li className="text-blue-800">
          <a href="">
            <FaLinkedin />
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li className="text-black-800">
          <a href="">
            <FaTiktok />
            <span className="sr-only">TikTok</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</footer>

  );
};

export default Footer;
