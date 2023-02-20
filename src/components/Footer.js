import React from "react";
import { logo } from "../assets";
import styles from "../styles";
import { facebook, linkedin, twitter, instagram } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col ${styles.paddingY}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={`flex-[1] flex flex-col justify-start mr-10`}>
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
          A new way to make the payments <br className="sm:block hidden" />{" "}
          easy, reliable and secure.
        </p>
      </div>
      <div
        className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
      >
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.key}
            className={`flex font-normal items-start flex-col text-white`}
          >
            {footerlink.title}
            <ul className="mt-6">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className="font-poppins text-dimWhite font-normal flex leading-[24px] hover:text-secondary cursor-pointer flex-col items-start"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="text-dimWhite flex md:flex-row flex-col justify-between pt-6 border-t-[1px] border-t-[#3F3E45] items-start w-full">
      <h4>Copyright Ⓒ 2021 HooBank. All Rights Reserved.</h4>
      <div className="flex flex-row cursor-pointer space-x-4">
        <img src={instagram} alt="instagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
      </div>
    </div>
  </section>
);

export default Footer;
