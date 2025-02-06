import React from "react";

const Heading = ({heading}) => {
  return (
    <div>
      <h2 className="text-5xl font-extrabold text-neon mb-12 text-center tracking-wide">
        {heading}
      </h2>
    </div>
  );
};

export default Heading;
