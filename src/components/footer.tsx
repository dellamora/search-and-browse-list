import React from "react";
interface footerProps {
  children?: React.ReactNode;
}
const Footer: React.FC<footerProps> = (): JSX.Element => {
  return (
    <footer className="text-grayMedium bg-primary p-4  md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm sm:text-center text-grayMedium">
      © 2023
      <a
        href="https://twitter.com/francidellamora"
        className="m-1 hover:underline"
        target="_blank"
      >
        - @francidellamora
      </a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0">
      <li>
        <a
          href="https://github.com/dellamora/search-and-browse-list"
          className="mr-6 hover:underline text-sm  sm:text-center text-grayMedium font-bold"
          target="_blank"
        >
          GitHub repository
        </a>
      </li>
      <li>
        <a
          href="https://discord.gg/Xxu2raVxs5"
          className="hover:underline mr-6"
          target="_blank"
        >
          Discord Server
        </a>
      </li>
      <li>
        <a
          href="https://www.buymeacoffee.com/dellamora"
          className="hover:underline mr-6"
        >
          Buy Me A Coffee!
        </a>
      </li>
    </ul>
  </footer>
  );
};

export default Footer;