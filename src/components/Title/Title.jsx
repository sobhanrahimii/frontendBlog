import { t } from "i18next";
import React from "react";

const Title = ({ title, color }) => {
  return (
    <div className="section-title">
      <h3 style={{ color: `${color}` }}>{t(title)}</h3>
      <div className="" style={{ background: `${color}` }}></div>
      <p style={{ color: `${color}` }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore
      </p>
    </div>
  );
};

export default Title;
