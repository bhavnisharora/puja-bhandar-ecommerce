import Slider from "react-slick";
import Img from "./../assets/latestproduct/1.jpeg";
import Img3 from "./../assets/latestproduct/3.jpg";
import Img4 from "./../assets/latestproduct/4.jpeg";
import Img5 from "./../assets/items/1.jpg";
import Img6 from "./../assets/items/2.jpg";
import Img7 from "./../assets/items/3.jpg";
import Img8 from "./../assets/items/4.jpg";
import Img9 from "./../assets/items/5.jpg";
import Img10 from "./../assets/items/6.jpg";

import Button from "./Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const services = [
  {
    id: 1,
    img: Img,

    title: "bracelet silver",
    price: "4000",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img3,
    title: "mala hamititle",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img4,
    title: "mala coral",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img5,
    title: "tulsi mala",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img6,
    title: "mala tulsi silver",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img7,
    title: "bracelet ons silver",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img8,
    title: "bracelet rudraksh",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img9,
    title: "silver rudraksh",

    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
  },
  {
    id: 1,
    img: Img10,
    title: "mala coral",
    desc: "Reading your Today’s horoscope is one of the best ways to predict your future. The foretelling of the future through the Daily horoscope is an ancient practice and finds relevance even today. The horoscope prediction is about predicting the individual's future based on various astrological aspects such as the position of the planets, Nakshatras, Tithi, and much more.",
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

const Services = () => {
  var settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="py-10 mb-10 adjustment" style={{ marginTop: "20px" }}>
        <div className="container">
          {/* Heading section */}
          <div className="mb-10 ">
            <h1
              data-aos="fade-up"
              className="font-serif text-primary text-3xl font-bold lg:text-4xl"
            >
              Latest Products
            </h1>
          </div>
          <div className="mt-20 ">
            <Slider {...settings}>
              {services.map((data, index) => (
                <div key={index} className="cursor-pointer">
                  <div className="">
                    <img
                      src={data.img}
                      alt=""
                      style={{ height: "120px", width: "auto" }} // Adjust dimensions here
                      className="text-center object-cover rounded-md scale-75 hover:scale-90 transition duration-300 ease-in-out w-full"
                    />
                  </div>
                  <div className="text-center font-semibold text-xl hover:text-primary transition duration-300 ease-in-out ">
                    <p className="uppercase"> {data.title} </p>
                    <p>{data.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/* <div className="text-center mt-[-30px]">
        <Link to="/products">
          <Button>View All </Button>
        </Link>
      </div> */}
    </div>
  );
};

export default Services;
