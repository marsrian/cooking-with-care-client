import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import Slider from "react-slick";
import banner1 from "../../../assets/b-1.png";
import banner2 from "../../../assets/b-2.png";
import banner3 from "../../../assets/b-3.png";
import Dishes from "../Dishes/Dishes";
import CustomerReview from "../CustomerReview/CustomerReview";

const Home = () => {
  // React Slick Settings:
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chefs/")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div className="mt-8 my-container">
      <Slider {...settings}>
        {/* Slider-1 */}
        <div>
          <div className="flex flex-col items-center gap-6 md:gap-20 md:flex-row">
            <div className="px-2 md:w-1/2 md:px-0">
              <h1 className="mb-4 text-lg font-bold md:text-6xl">
                Savor the Flavors of Fresh, Delicious Food!
              </h1>
              <p className="mb-3 font-base">
                Welcome to our food website, where we bring you the best recipes
                and culinary delights to tantalize your taste buds. Our expert
                chefs use only the freshest ingredients to create mouth-watering
                dishes that will leave you wanting more.
              </p>
              <button className="px-5 py-3 font-medium text-white bg-orange-600 rounded-lg">
                BOOK A TABLE
              </button>
            </div>
            <img className="h-96" src={banner1} alt="" />
          </div>
        </div>
        {/* SLider-2 */}
        <div>
          <div className="flex flex-col items-center gap-6 md:gap-20 md:flex-row">
            <div className="md:w-1/2">
              <h1 className="mb-4 text-lg font-bold md:text-5xl">
                Satisfy Your Cravings with our Delicious Food!
              </h1>
              <p className="mb-3 font-base">
                Welcome to our food website, Our chefs use only the freshest
                ingredients and carefully craft each dish to perfection. We also
                offer vegetarian and gluten-free options for those with dietary
                restrictions. So come and indulge in our delicious food today
                and satisfy your cravings!
              </p>
              <button className="px-5 py-3 font-medium text-white bg-orange-600 rounded-lg">
                BOOK A TABLE
              </button>
            </div>
            <img className="h-96" src={banner2} alt="" />
          </div>
        </div>
        {/* Slider-3 */}
        <div>
          <div className="flex flex-col items-center gap-6 md:gap-20 md:flex-row">
            <div className="md:w-1/2">
              <h1 className="mb-4 text-lg font-bold md:text-5xl">
                Experience the Flavors of Authentic Cuisine!
              </h1>
              <p className="mb-3 font-base">
                Step into a world of culinary delights with our food website,
                where we bring you the most authentic flavors from around the
                world. Our menu boasts a range of traditional dishes that are
                sure to transport you to different regions of the globe.
              </p>
              <button className="px-5 py-3 font-medium text-white bg-orange-600 rounded-lg">
                BOOK A TABLE
              </button>
            </div>
            <img className="h-96" src={banner3} alt="" />
          </div>
        </div>
      </Slider>

      {/* Chef Section */}
      <div className="mt-20">
        <h1 className="mb-8 text-5xl font-bold text-center">Our Chefs</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {chefs.map((chef) => (
            <Chef key={chef._id} chef={chef}></Chef>
          ))}
        </div>
      </div>

      {/* Dishes Section */}
      <div className="mt-20">
        <h1 className="mb-3 text-3xl font-bold text-center">
          🍔OUR SPECIAL DISHES
        </h1>
        <p className="mb-5 text-center text-gray-500">
          Discover the wide range of dishes that we offer on our food website.
          Our menu is carefully <br /> crafted to satisfy your cravings and
          indulge your taste buds. We use only the freshest ingredients and{" "}
          <br /> cook each dish with care
        </p>
        <Dishes></Dishes>
      </div>
      {/* Customer Reviews */}
      <div className="mt-20">
        <CustomerReview></CustomerReview>
      </div>
    </div>
  );
};

export default Home;
