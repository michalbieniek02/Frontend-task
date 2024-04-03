import React from "react";

 function CardWithIcon({icon, title, content,className}) {
  return (
    <div className={className}>
      <img className="h-[33px]" src={icon} alt="Icon" />
      <h1 className="font-medium text-2xl mt-5">{title}</h1>
      <p className="mt-4 font-normal text-base max-w-96">{content}</p>
    </div>
  );
}

  
  export default CardWithIcon;