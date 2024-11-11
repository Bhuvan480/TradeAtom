import { Accordion, AccordionItem } from "@nextui-org/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

const NavBar = () => {
  const IsBigScreen = useMediaQuery("(min-width: 1060px)");

  const [IsOpen, setIsOpen] = React.useState(false);

  const navHoverClasses =
    "hover:border-2 hover:border-primary-400 hover:cursor-pointer hover:font-bold";
  const navLinkClasses = "text-white hover:text-secondary-500";
  const navItemClasses =
    "hover:text-secondary-500 hover:font-bold pl-2 py-2 text-white";
  const navBar =
    " flex flex-col items-center bg-gradient-to-r from-primary-500 to-black";

  const renderNavLink = (label: string) => (
    <div className={navHoverClasses}>
      <p className={`${navLinkClasses} px-6 py-3 `}>{label}</p>
    </div>
  );

  const renderAccordionItem = (key: string, title: string, items: string[]) => (
    <AccordionItem key={key} title={title} aria-label={title}>
      <div className="py-3">
        <ul>
          {items.map((item) => (
            <li key={item} className={navItemClasses}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </AccordionItem>
  );

  const handleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {IsBigScreen ? (
        <div
          className={`${navBar} w-[300px] z-40 fixed left-0 py-6 h-full text-xl`}
        >
          {/* Header */}
          <div className="px-6">
            <h5 className="drop-shadow-lg font-black text-2xl text-white">
              Trade Atom
            </h5>
          </div>

          {/* Navigation Links */}
          <div className="mt-5 flex flex-col w-full">
            {renderNavLink("Home")}

            <div className={navHoverClasses}>
              <Accordion
                selectionMode="multiple"
                className="px-6 -my-1"
                itemClasses={{
                  title: `text-white hover:text-secondary-500 italic ${
                    IsBigScreen ? "text-xl" : "text-sm"
                  }`,
                }}
                isCompact
                fullWidth
              >
                {renderAccordionItem("1", "Active Contracts", [
                  "Nifty",
                  "Sensex",
                  "Bank Nifty",
                ])}
              </Accordion>
            </div>

            {renderNavLink("Option Data")}
            {renderNavLink("Strategy")}
          </div>

          {/* Footer */}
          <div className="mt-auto flex flex-col w-full">
            <div className="flex flex-col mt-5">
              {renderNavLink("Services")}
              {renderNavLink("About Us")}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={`${navBar} w-full py-4 text-sm`}>
            {/* Header */}
            <div className="px-6 w-full flex">
              <div
                className="flex-none w-6 flex self-center"
                onClick={handleNavigation}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-initial w-full flex justify-center">
                <h5 className="drop-shadow-lg font-black text-2xl text-white">
                  Trade Atom
                </h5>
              </div>
            </div>
          </div>

          {IsOpen && (
            <div
              className={`${navBar} w-[300px] z-40 fixed top-0 left-0 py-6 h-full text-sm`}
            >
              {/* Header */}
              <div className="px-6 w-full flex">
                <div
                  className="flex-none w-6 flex self-center"
                  onClick={handleNavigation}
                >
                  <XMarkIcon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-5 flex flex-col w-full">
                {renderNavLink("Home")}

                <div className={navHoverClasses}>
                  <Accordion
                    selectionMode="multiple"
                    className="px-6 -my-1"
                    itemClasses={{
                      title: `text-white hover:text-secondary-500 italic ${
                        IsBigScreen ? "text-xl" : "text-sm"
                      }`,
                    }}
                    isCompact
                    fullWidth
                  >
                    {renderAccordionItem("1", "Active Contracts", [
                      "Nifty",
                      "Sensex",
                      "Bank Nifty",
                    ])}
                  </Accordion>
                </div>

                {renderNavLink("Option Data")}
                {renderNavLink("Strategy")}
              </div>

              {/* Footer */}
              <div className="mt-auto flex flex-col w-full">
                <div className="flex flex-col mt-5">
                  {renderNavLink("Services")}
                  {renderNavLink("About Us")}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default NavBar;
