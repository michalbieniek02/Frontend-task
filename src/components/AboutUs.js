import React from "react";
import headImage from "../assets/aboutUsPageImg.png";
import CardWithIcon from "./CardWithIcon";
import icon1 from "../assets/listIcon.png";
import icon2 from "../assets/rulerPencilIcon.png";
import icon3 from "../assets/peopleIcon.png";
import person1 from "../assets/ceo.png";
import person2 from "../assets/cto.png";
import person3 from "../assets/designer.png";
import person4 from "../assets/projectManager.jpg";
import HeroCard from "./HeroCard";
export default function AboutUs() {
  const cardStyle = "bg-gray-200 p-6 rounded-lg shadow-md";
  return (
    <div>
      <div className="flex flex-wrap bg-navdark-200 text-white pb-14">
        <div className="lg:mt-48 lg:ml-32 p-10 lg:p-0">
          <h1 className="text-center md:text-left font-semibold text-4xl lg:text-6xl">All the features <br/>you need </h1>
          <p className="mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>do
            eiusmod tempor incididunt.
          </p>
        </div>

        <img className="h-[30%] lg:ml-72 lg:mt-36 p-8 lg:p-0" src={headImage} />
      </div>

      <div className="p-10 md:p-20">
        <h1 className=" text-home-text-100 font-semibold text-4xl lg:text-7xl text-center text-wrap mt-10 mb-10 lg:ml-72 lg:mr-72">
          The benefits of working
          <br />
          with us
        </h1>
        <div className="flex flex-wrap gap-8 justify-center">
          <CardWithIcon
            icon={icon1}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            title={"Customize with ease"}
            className={cardStyle}
          />
          <CardWithIcon
            icon={icon2}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            title={"Perfectly Responsive"}
            className={cardStyle}
          />
          <CardWithIcon
            icon={icon3}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim."
            title={"Friendly Support"}
            className={cardStyle}
          />
        </div>
      </div>
      <div className="pb-32 bg-gray-200 justify-between">
        <h1 className="pt-20 font-semibold text-4xl lg:text-6xl text-center">
          Meet our team
        </h1>
        <div className="flex flex-wrap p-10 gap-8 justify-center">
          <HeroCard src={person1} name="John Smith" title="CEO" />
          <HeroCard src={person2} name="Simon Adams" title="CTO" />
          <HeroCard src={person3} name="Paul Jones" title="Design lead" />
          <HeroCard src={person4} name="Sara hardin" title="Project Manager" />
        </div>
      </div>
    </div>
  );
}
