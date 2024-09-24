import gmail_icon from "../../assets/images/gmail_icon.png";
import linkedin_icon from "../../assets/images/linkedin_icon.png";
import leetcode_icon from "../../assets/images/leetcode_icon.png";
import instagram_icon from "../../assets/images/instagram_icon.png";
import phone_icon from "../../assets/images/phone_icon.png";
export const footerData = {
  title: "Contact Me",
  profiles: [
    {
      type: "Gmail",
      value: "shanky8968861229@gmail.com",
      icon: gmail_icon,
      size: 50,
      alt: "gmail-icon",
    },
    {
      type: "Linkedin",
      value: "https://linkedin.com/in/singh-prdeep",
      icon: linkedin_icon,
      size: 50,
      alt: "linkedin-icon",
    },
    {
      type: "LeetCode",
      value: "https://leetcode.com/u/shanky8968861229",
      icon: leetcode_icon,
      size: 50,
      alt: "leetcode-icon",
    },
    {
      type: "Instagram",
      value:
        "https://www.instagram.com/_singhshanky?igsh=dm9oenlnNDNjemx2&utm_source=qr",
      icon: instagram_icon,
      size: 50,
      alt: "intagram-icon",
    },
    {
      type: "+91 8968861229",
      value: "tel:+918968861229",
      icon: phone_icon,
      size: 50,
      alt: "phone-icon",
    },
  ],
};
