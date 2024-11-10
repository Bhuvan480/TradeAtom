import { Accordion, AccordionItem } from "@nextui-org/react";

const NavBar = () => {
  const navHoverClasses = "hover:border-2 hover:border-primary-400 hover:cursor-pointer hover:font-bold";
  const navLinkClasses = "text-white hover:text-secondary-500";
  const navItemClasses = "hover:text-secondary-500 hover:font-bold pl-2 py-2 text-white";

  const renderNavLink = (label : string) => (
    <div className={navHoverClasses}>
      <p className={`${navLinkClasses} px-4 py-3 `}>{label}</p>
    </div>
  );

  const renderAccordionItem = (key: string, title :string, items:string[]) => (
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

  return (
    <div className="w-[300px] z-40 fixed left-0 py-6 flex flex-col h-full items-center bg-gradient-to-r from-primary-500 to-black">
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
          <Accordion selectionMode="multiple" className="px-4 -my-1"  itemClasses={{ title: "text-white hover:text-secondary-500" }} isCompact fullWidth>
            {renderAccordionItem("1","Active Contracts", ["Nifty", "Sensex", "Bank Nifty"])}
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
  );
};

export default NavBar;
