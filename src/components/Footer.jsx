import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-30 bg-red py-2">
      <div className="w-10/12 mx-auto md:flex justify-center items-center md:justify-between text-center">
        <SocialMediaIcons />
        <p className="font-playfair text-md text-yellow">
            ©2023. All Rights Reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
