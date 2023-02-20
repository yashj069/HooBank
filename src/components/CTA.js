import React from "react";
import styles, { layout } from "../styles";
import Button from "./Button";

const CTA = () => (
  <section
    className={`rounded-[20px] box-shadow sm:flex-row ${styles.marginY} ${styles.flexCenter} ${styles.padding} flex-col bg-black-gradient-2`}
  >
    <div className={`flex flex-col flex-1`}>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={`items-start ${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments{" "}
        <br className="sm:block hidden" /> and grow your business anywhere on
        the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
