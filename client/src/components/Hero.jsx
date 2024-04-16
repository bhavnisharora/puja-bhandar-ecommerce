import React from "react";
import Slider from "react-slick";

const HeroData = [
  {
    id: 1,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117628.jpg",
  },
  {
    id: 2,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117622.jpg",
  },
  {
    id: 3,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117603.jpg",
  },
  {
    id: 4,
    img: "https://hspujabhandar.com/assets/uploads/banner/IMG-1688117614.jpg",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "red",
        fontSize: "30px",
        padding: "20px",
        position: "absolute",
        right: "10px",
        borderRadius: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "red",
        fontSize: "30px",
        padding: "20px",
        position: "absolute",
        borderRadius: "100%",
        left: "10px",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div style={{ marginTop: "50px" }}>
      {/* hero section */}
      <div className="pb-8 sm:pb-0">
        <Slider {...settings}>
          {HeroData.map((data) => (
            <div key={data.id}>
              {/* image section  */}
              <div>
                <img
                  src={data.img}
                  className="hero-image drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
