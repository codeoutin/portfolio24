import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to transform <span className="text-purple">your</span> business
          with cutting-edge software solutions?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ps@psteger.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex flex-col">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 Patrick Steger
          </p>
          <div className="text-xs flex flex-row gap-4 text-gray-400">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutzerklärung</a>
          </div>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link key={info.id} href={info.link} target="_blank">
              <div
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>            
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;