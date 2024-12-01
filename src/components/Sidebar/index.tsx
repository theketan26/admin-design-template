"use client";

import React, { useState } from "react";
import Link from "next/link";
import ClickOutside from "./ClickOutside";
import SidebarItem, { SidebarItemProps } from "./SidebarItem";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
  items: {
    name: string;
    icon?: JSX.Element;
    menuItems: SidebarItemProps[];
  }[];
  logo?: JSX.Element;
  logoAltTitle?: string;
}

const Sidebar = ({ 
  sidebarOpen, 
  setSidebarOpen, 
  items,
  logo,
  logoAltTitle,
}: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string | undefined>();

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`fixed left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden duration-300 ease-linear lg:translate-x-0 min-w-72
          bg-light-sidebar-bg text-light-sidebar-text-1 font-sidebar-font-weight-1 text-sidebar-font-size-1
          dark:bg-dark-sidebar-bg
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 mx-6 my-5">
          <Link 
            href="/"
            className="text-2xl font-bold 
              text-light-sidebar-title
              dark:text-dark-sidebar-title
            "
          >
            {logo ? logo : logoAltTitle}
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            className="block lg:hidden"
          >
            <svg
              className=""
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
            {items.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-4 ml-4 text-sm flex gap-2">
                  {group.icon}
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                      handleOnClick={() => {
                        setActiveItem(activeItem === menuItem.label ? undefined : menuItem.label);
                      }}
                      isActive={activeItem === menuItem.label}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
