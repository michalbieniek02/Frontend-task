import React from "react";
import headImage from "../assets/homePageImg.png";
import CardWithIcon from "./CardWithIcon";
import icon1 from "../assets/peopleIcon.png";
import icon2 from "../assets/home2.png";
import icon3 from "../assets/rulerPencilIcon.png";
import icon4 from "../assets/home4.png";
import icon5 from "../assets/home5.png";
import icon6 from "../assets/listIcon.png";
import vp from "../assets/vp.png";
export default function Home() {
  return (
    <>
      <div className="flex bg-navdark-200 text-white pb-14">
        <div className="mt-48 ml-32">
          <h1 className="flex font-semibold text-6xl">
            Building stellar websites for early startups
          </h1>
          <p className="mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
        </div>

        <img className="flex h-[24rem] mr-40 mt-36 " src={headImage} />
      </div>

      <h1 className="text-home-text-100 font-semibold text-6xl text-center text-wrap mt-40 ml-72 mr-72">
        Design that solves problems, one product at a time
      </h1>
      <div className="grid grid-cols-3 gap-24 ml-40 mr-40 mt-32 pb-32 text-home-text-100">
        <CardWithIcon
          icon={icon1}
          title="Uses Client First"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
        <CardWithIcon
          icon={icon2}
          title="Two Free Revision Round"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
        <CardWithIcon
          icon={icon3}
          title="Template Customization"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
        <CardWithIcon
          icon={icon4}
          title="24/7 Support"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
        <CardWithIcon
          icon={icon5}
          title="Quick Delivery"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
        <CardWithIcon
          icon={icon6}
          title="Hands-on approach"
          content="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliqu am sed mi."
        />
      </div>
      <div className="flex pb-32 bg-gray-200 justify-between gap-36">
        <div className="max-w-[327px] mt-10 ml-40">
          <h1 className="text-4xl font-semibold text-home-text-100 mt-20 ">
            What our clients say about us
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
        </div>
        <div className="">
          <h2 className="font-medium text-3xl max-w-[840px] mt-28">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h2>
          <div className="flex mt-10">
            <img
            src={vp}
            alt="Woman"
            className="rounded-full h-14 w-14 object-cover overflow-hidden "
          ></img>
          <div className="ml-6">
             <h1 className="font-medium">
            Jenny Wilson
          </h1>
          <p className="flex text-xs font-medium">
            Vice President
          </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
