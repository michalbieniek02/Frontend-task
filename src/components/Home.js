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
      <div className="flex flex-wrap bg-navdark-200 text-white pb-14">
        <div className="lg:mt-48 lg:ml-32 p-10 lg:p-0">
          <h1 className="flex text-center md:text-left font-semibold text-4xl lg:text-6xl">
            Building stellar<br/> websites for early<br/> startups
          </h1>
          <p className="mt-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
            eiusmod tempor incididunt.
          </p>
        </div>

        <img className="h-[30%] lg:ml-72 lg:mt-36 m-[auto] p-8 lg:p-0" src={headImage} />
      </div>

      <h1 className="text-home-text-100 font-semibold text-4xl lg:text-6xl text-center text-wrap mt-10 lg:mt-40  mx-10 lg:ml-72 lg:mr-72">
        Design that solves<br/> problems, one product<br/> at a time
      </h1>
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-24 lg:ml-40 lg:mr-40 lg:mt-32 lg:mb-32 p-[3rem] lg:p-0 text-home-text-100">
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
      <div className="flex flex-wrap lg:pb-32 bg-gray-200 justify-between gap-10 lg:gap-36">
        <div className="mt-10 text-center lg:text-left mx-[auto]  sm:mx-10 md:px-56 lg:ml-40 lg:px-0">
          <h1 className="text-4xl font-semibold text-home-text-100 lg:mt-20  lg:p-0 ">
            What our clients <br/>say about us
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit sed.</p>
        </div>
        <div className="">
          <h2 className="font-medium text-center lg:text-left text-3xl m-10 lg:m-0 max-w-[840px] lg:mt-28 lg:mr-48">
            "The best agency we’ve worked with so far. They understand our
            product and are able to add new features with a great focus."
          </h2>
          <div className="flex md:mx-20 justify-center lg:justify-start lg:ml-0 mt-10 mb-10 lg:mb-0">
            <img
            src={vp}
            alt="Woman"
            className="rounded-full h-14 w-14 object-cover overflow-hidden mr-5 lg:mr-0"
          ></img>
          <div className="md:ml-10 lg:ml-6">
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
