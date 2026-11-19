import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";
import { SITE } from "@/data/site";
import styles from "./SocialLinks.module.css";

const LINKS = [
  { name: "WhatsApp", href: SITE.whatsapp, Icon: FaWhatsapp, hover: "#25D366" },
  { name: "Instagram", href: SITE.social.instagram, Icon: FaInstagram, hover: "#E1306C" },
  { name: "YouTube", href: SITE.social.youtube, Icon: FaYoutube, hover: "#FF0000" },
  { name: "Facebook", href: SITE.social.facebook, Icon: FaFacebook, hover: "#1877F2" },
];

export default function SocialLinks() {
  return (
    <div className={styles.social}>
      {LINKS.map(({ name, href, Icon, hover }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} title={name} style={{ "--hover": hover }}>
          <Icon aria-hidden="true" />
          <span>{name}</span>
        </a>
      ))}
    </div>
  );
}
