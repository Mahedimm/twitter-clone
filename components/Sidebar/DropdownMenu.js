import { DotsHorizontalIcon } from "@heroicons/react/outline";
import { createPopper } from "@popperjs/core";
import { signOut } from "next-auth/react";
import React from 'react';

const DropdownMenu = ({color}) => {
    
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top-end"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
    return (
        <>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-6/12 md:w-4/12 ">
            <div className="relative inline-flex align-middle w-full">
              <button
                className={
                  "text-white font-bold uppercase text-sm  py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150 " +
                  bgColor
                }
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
              >
               <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10" />
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mb-1"
                }
                style={{ minWidth: "6rem" }}
              >
                <button
                  className={
                    "text-sm py-2 px-4  block w-full whitespace-nowrap bg-transparent font-bold hoverAnimation"
                  }
                  onClick={signOut}
                >
                  SignOut
                </button>
                {/* <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={e => e.preventDefault()}
                >
                  Another action
                </a> */}
           
                <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full text-center whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={e => e.preventDefault()}
                >
                  Seprated link
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default DropdownMenu;