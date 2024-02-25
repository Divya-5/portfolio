import Image from "next/image";
import Link from "next/link";
import React from "react";
import GithubIcon from "../../public/images/github-icon.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";

const EmailSection = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2 "> Lets Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for new opportunities, my inbox is always open.
          Whether you have a question or you wanted to say hi, I will try my
          best to get back to you !
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Divya-5/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/divya5ras
togi/"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <div className="mb-6">
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            Please reach out to me on my email :-
            <span>
              {" "}
              <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=divyanshi.rastogi105@gmail.com">
                divyanshi.rastogi105@gmail.com
              </Link>
            </span>
          </p>
        </div>
      </div>
      {/* <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white mb-2 block  text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="divyanshi.rastogi@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              required
              placeholder="Just saying Hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Lets talk about... "
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default EmailSection;
