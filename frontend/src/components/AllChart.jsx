import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChartKemlayan from "./ChartKemlayan";
import ChartJayengan from "./ChartJayengan";
import ChartJoyontakan from "./ChartJoyontakan";
import ChartKemlayan from "./ChartKemlayan";
import ChartKratonan from "./ChartKratonan";
import ChartSerengan from "./ChartSerengan";
import ChartTipes from "./ChartTipes";
function AllChart() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="max-w-4xl p-4">
        <Slider {...settings}>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartSerengan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartDanukusuman />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartJayengan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartKemlayan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartJoyontakan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartKratonan />
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <ChartTipes />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AllChart;
