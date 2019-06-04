import React from "react";

const BackGround = ({ bgPicUrls }) => {
  return (
    <div className="site-bg">
      {bgPicUrls.map((pic, index) => {
        return (
          <div
            key={index}
            className="bg-tile"
            style={{
              background: `linear-gradient(rgba(40, 40, 60, 0.8), rgba(40, 40, 60, 0.9)), url(${pic}) no-repeat center`,
              backgroundSize: "cover"
            }}
          />
        );
      })}
    </div>
  );
};

export default BackGround;
