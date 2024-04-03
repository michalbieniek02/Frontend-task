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
      <div className="flex bg-navdark-200 text-white pb-16">
        <div className="mt-48 ml-32">
          <h1 className="font-semibold text-6xl">All the features you need </h1>
          <p className="mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <img className="h-[24rem] ml-44 mr-56 mt-36" src={headImage} />
      </div>

      <div className="p-20">
        <h1 className="text-home-text-100 font-semibold text-7xl text-center text-wrap mt-10 mb-10 ml-72 mr-72">
          The benefits of working with us
        </h1>
        <div className="flex gap-8 justify-center">
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
  <h1 className="pt-20 font-semibold text-6xl text-center">Meet our team</h1>
  <div className="flex gap-8 justify-center">
    <HeroCard src={person1} name='John Smith' title='CEO'/>
    <HeroCard src={person2} name='Simon Adams' title='CTO'/>
    <HeroCard src={person3} name='Paul Jones' title='Design lead'/>
    <HeroCard src={person4} name='Sara hardin' title='Project Manager'/>
  </div>
</div>
    </div>
  );
}
