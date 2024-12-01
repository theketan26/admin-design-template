import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItemProps } from "./SidebarItem";

const SidebarDropdown = ({ item }: { item: SidebarItemProps[] }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-6">
        {item.map((item: { route: string, label: string }, index: number) => (
          <li key={index}>
            <Link
              href={item.route}
              className={`group relative flex items-center gap-2.5 rounded-md px-4 py-1 font-medium duration-300 ease-in-out 
                text-light-sidebar-text-3 font-sidebar-font-weight-3 text-sidebar-font-size-3
                dark:text-dark-sidebar-text-3
                hover:text-light-sidebar-text-3 hover:bg-light-sidebar-item-hover-bg
                hover:dark:text-dark-sidebar-text-3 hover:dark:bg-dark-sidebar-item-hover-bg
                ${
                  pathname === item.route ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
