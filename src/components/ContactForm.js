import React from "react";

export default function ContactForm() {
  return (
    <div className=" flex flex-wrap gap-10 md:block max-w-[80%] mx-[auto]  lg:ml-[15%] lg:mr-[15%] justify-between">
      <h1 className="text-home-text-100 font-semibold text-4xl lg:text-5xl text-center mt-10 lg:mt-40 mx-[auto] ">
        Contact Us
      </h1>
      <p className="text-center flex justify-center items-center h-[9rem] ml-[25%] mr-[25%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <form className="max-w-[90%] mx-auto bg-gray-300 px-4 lg:px-28 pt-12 pb-12 mb-52 rounded-md">
  <div className="grid flex-wrap lg:grid-cols-2 gap-4">
    <div>
      <label htmlFor="name" className="block font-medium">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="bg-gray-300 w-full px-4 py-2 border rounded-md placeholder-black pt-3 pb-3 min-w-[200px] min-h-[40px]"
      />
    </div>
    <div>
      <label htmlFor="email" className="block font-medium">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="bg-gray-300 w-full px-4 py-2 border rounded-md placeholder-black pt-3 pb-3 min-w-[200px] min-h-[40px]"
      />
    </div>
  </div>
  <div className="grid flex-wrap lg:grid-cols-2 gap-4 mt-4">
    <div>
      <label htmlFor="category" className="block font-medium">
        Category:
      </label>
      <select
        id="category"
        name="category"
        className="bg-gray-300 w-full px-4 py-2 border rounded-md placeholder-black pt-3 pb-3 min-w-[200px] min-h-[40px]"
      >
        <option value="general">General</option>
        <option value="feedback">Feedback</option>
        <option value="support">Support</option>
      </select>
    </div>
    <div>
      <label htmlFor="subject" className="block font-medium">
        Subject:
      </label>
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter the subject"
        className="bg-gray-300 w-full px-4 py-2 border rounded-md placeholder-black pt-3 pb-3  min-w-[200px] min-h-[40px]"
      />
    </div>
  </div>
  <div className="mt-4">
    <label htmlFor="message" className="block font-medium">
      Message:
    </label>
    <textarea
      id="message"
      name="message"
      rows="5"
      placeholder="Enter your message"
      className="bg-gray-300 w-full px-4 py-2 border rounded-md placeholder-black pt-3 pb-3 "
    ></textarea>
  </div>
  <div className="flex mt-4">
    <button
      type="submit"
      className="bg-home-text-100 text-white px-8 py-2 rounded-full hover:bg-gray-600 "
    >
      Send message
    </button>
  </div>
</form>
    </div>
  );
}
