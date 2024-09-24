import gmail_icon from "../assets/images/gmail_icon.png";
import linkedin_icon from "../assets/images/linkedin_icon.png";
import leetcode_icon from "../assets/images/leetcode_icon.png";
import instagram_icon from "../assets/images/instagram_icon.png";
import phone_icon from "../assets/images/phone_icon.png";

export const getFooterIcon = (icon) => {
  switch (icon) {
    case "gmail_icon":
      return gmail_icon;
    case "linkedin_icon":
      return linkedin_icon;
    case "leetcode_icon":
      return leetcode_icon;
    case "instagram_icon":
      return instagram_icon;
    case "phone_icon":
      return phone_icon;
    default:
      return "";
  }
};
