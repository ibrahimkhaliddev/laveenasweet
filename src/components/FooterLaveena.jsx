import React from "react";
import LaveenaLogo from "../img/Laveena-Logo.png";

function FooterLaveena() {
  const navigation = {
    info: [
      { name: "Product", href: "#" },
      { name: "Blog", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    help: [{ name: "Privacy Policy", href: "#" }],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "YouTube",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24px"
//     height="24px"
//   >
//     <path d="M 12 2 C 6.5 2 2 6.3 2 11.5 C 2 14 3.1 16.500781 5 18.300781 L 5 22.599609 L 9.0996094 20.599609 C 9.9996094 20.899609 11 21 12 21 C 17.5 21 22 16.7 22 11.5 C 22 6.3 17.5 2 12 2 z M 12 4 C 16.4 4 20 7.4 20 11.5 C 20 15.6 16.4 19 12 19 C 11.2 19 10.399609 18.899219 9.5996094 18.699219 L 8.8007812 18.5 L 8.0996094 18.800781 L 7 19.400391 L 7 18.300781 L 7 17.400391 L 6.4003906 16.800781 C 4.9003906 15.400781 4 13.5 4 11.5 C 4 7.4 7.6 4 12 4 z M 11 9 L 6 14 L 10.5 12 L 13 14 L 18 9 L 13.5 11 L 11 9 z"></path>
//   </svg>;

  const socialnavigation = [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="#3c0603" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
        name: "line",
        href: "#",
        icon: (props) => (
          <svg fill="#3c0603" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M 12 2 C 6.5 2 2 6.3 2 11.5 C 2 14 3.1 16.500781 5 18.300781 L 5 22.599609 L 9.0996094 20.599609 C 9.9996094 20.899609 11 21 12 21 C 17.5 21 22 16.7 22 11.5 C 22 6.3 17.5 2 12 2 z M 12 4 C 16.4 4 20 7.4 20 11.5 C 20 15.6 16.4 19 12 19 C 11.2 19 10.399609 18.899219 9.5996094 18.699219 L 8.8007812 18.5 L 8.0996094 18.800781 L 7 19.400391 L 7 18.300781 L 7 17.400391 L 6.4003906 16.800781 C 4.9003906 15.400781 4 13.5 4 11.5 C 4 7.4 7.6 4 12 4 z M 11 9 L 6 14 L 10.5 12 L 13 14 L 18 9 L 13.5 11 L 11 9 z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
  ];
  return (
    <footer className="bg-white relative" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      
      <div className="footerBgImg relative footer-main">
        <div className="mx-auto max-w-7xl pb-16 pt-16 sm:pt-16 lg:pt-22">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#000000] opacity-50"
        />
          <div className="flex flex-wrap relative xl:justify-around px-4 sm:px-8 lg:px-4">
            <div className="w-[100%] lg:w-[60%] space-y-8">
              <img className="w-56 relative" src={LaveenaLogo} alt="help name" />
              <p className="text-[20px] leading-[33px] relative lg:pr-[150px] text-white">
                Laveena ทางเลือกใหม่ของผู้นิยมเบเกอรี่ หวานน้อย จากการผลิตแบบ
                homemade
              </p>
            </div>
            <div className="w-[50%] sm:w-[30%] lg:w-[20%] mt-[70px] lg:mt-0">
              <h3 className="text-[22px] font-semibold relative leading-6 text-white">
                Info
              </h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.info.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[22px] relative leading-9 text-white hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-[50%] sm:w-[30%] lg:w-[20%] mt-[70px] lg:mt-0">
              <h3 className="text-[22px] relative font-semibold leading-6 text-white">
                Help
              </h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.help.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[22px] relative leading-9 text-white hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-4 px-6 lg:pl-0 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-2 md:order-2">
            <span className="text-base text-[#383838]">Follow Us:</span>
          {socialnavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-auto w-7" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8  md:order-1 md:mt-0">
          <p className="text-center text-base text-[#3c0603]">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterLaveena;
