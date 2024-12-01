import React from "react";
import Link from "next/link";
import SidebarDropdown from "./SidebarDropdown";

export interface SidebarItemProps { 
  route: string, 
  label: string,
  children?: SidebarItemProps[],
  icon?: JSX.Element,
  suffix?: JSX.Element | string
}

const SidebarItem = ({ item, handleOnClick, isActive }: {
  isActive: boolean,
  item: SidebarItemProps;
  handleOnClick: () => void;
}) => {
  return (
    <>
      <li>
        <Link
          href={item.route}
          onClick={handleOnClick}
          className={`${!isActive ? "bg-graydark dark:bg-meta-4" : ""} 
            group relative flex items-center justify-between gap-2.5 rounded-sm px-4 py-2 duration-300 ease-in-out
            text-light-sidebar-text-2 font-sidebar-font-weight-2 text-sidebar-font-size-2
            dark:text-dark-sidebar-text-2
            hover:bg-light-sidebar-item-hover-bg hover:text-light-sidebar-hover-text-2
            dark:hover:bg-dark-sidebar-item-hover-bg dark:hover:text-dark-sidebar-hover-text-2
          `}
        >
          <div
            className="flex gap-2"
          >
            {item.icon}
            {item.label}
          </div>
          <div>
            {
              item.suffix 
              ? <div
                  className="text-xs px-2 py-0.5 rounded-md
                  dark:bg-dark-sidebar-text-2-suffix-bg dark:text-bg-dark-sidebar-text-2-suffix-text
                  bg-light-sidebar-text-2-suffix-bg text-bg-light-sidebar-text-2-suffix-text"
                >
                  {item.suffix}
                </div> 
              : item.children && (
                  <svg
                    className={`absolute right-4 top-1/2 -translate-y-1/2 
                      fill-light-sidebar-collapsed-icon 
                      dark:fill-dark-sidebar-collapsed-icon 
                      ease duration-200 ${
                      isActive && "-rotate-180"
                    }`}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                      fill=""
                    />
                  </svg>
                )
            }
          </div>
        </Link>

        {item.children && (
          <div
            className={`translate transform overflow-hidden ${
              !isActive && "hidden"
            }`}
          >
            <SidebarDropdown item={item.children} />
          </div>
        )}
      </li>
    </>
  );
};

export default SidebarItem;
