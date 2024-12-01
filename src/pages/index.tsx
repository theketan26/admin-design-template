import Sidebar from "components/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <div
      className=""
    >
      <Sidebar 
        sidebarOpen={sideBarOpen}
        setSidebarOpen={setSideBarOpen}
        items={[{
          name: "Home",
          menuItems: [
            { label: "Home 1", icon: <div className="bg-dark-sidebar-text-2 h-5 w-5" />, route: "#", suffix: "New" },
            { label: "Home 2", icon: <div className="bg-dark-sidebar-text-2 h-5 w-5" />, route: "#" },
            { label: "Home 3", icon: <div className="bg-dark-sidebar-text-2 h-5 w-5" />, route: "#" },
          ],
          icon: <div className="bg-dark-sidebar-text-2 h-5 w-5" />
        }, {
          name: "Profile",
          menuItems: [
            { label: "Name", route: "#" },
            { label: "Email", route: "#" },
            { label: "Password", route: "#" },
          ]
        }, {
          name: "More options",
          menuItems: [
            { label: "More option 1", route: "#" },
            { 
              label: "More options 2", 
              route: "#",
              children: [
                { label: "More option 21", route: "#" },
                { label: "More option 22", route: "#" },
              ]
            },
          ]
        }]}
        // logo={
        //   <div className="h-16 w-60 bg-[#eee]" />
        // }
        logoAltTitle={"Sidebar Logo"}
      />
      <button onClick={() => setSideBarOpen(true)}>Open</button>
    </div>
  );
}
