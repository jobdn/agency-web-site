import React from "react";

import "./Showcase.scss";

export const Showcase: React.FC = () => {
  return (
    <section className="showcase">
      <div className="showcase__title">Portfolio</div>
      <div className="showcase__subtitle">
        Agency provides a full service range including technical skills, design,
        business understanding.
      </div>
    </section>
  );
};
