import { CodeXml } from "lucide-react";
import { NavMain } from "../components/NavMain";
import { NavUser } from "@/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function AppSidebar() {
  const LoggedInUser=useSelector((store)=>store?.user)

  return (
    <Sidebar collapsible="icon" className=" border-blue-950">
      <SidebarHeader className="bg-[#171a1fff]">
        <SidebarMenu>
          <Link to="/app">
            <SidebarMenuButton
              size="lg"
              className="bg-transparent hover:bg-[#1E2128] active:bg-[#1E2128]  cursor-pointer "
            >
              <div className="bg-[#5E5EEDFF] text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <CodeXml className="size-4 font-bold" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-lg text-[#5E5EEDFF]">
                  Code Mate
                </span>
                <span className="truncate text-xs text-white font-light ">
                  Chat. Code. Create
                </span>
              </div>
            </SidebarMenuButton>
          </Link>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="bg-[#171a1fff]">
        <NavMain />
      </SidebarContent>
      <SidebarFooter className="bg-[#171a1fff]">
       {LoggedInUser&&<NavUser user={LoggedInUser} />} 
      </SidebarFooter>
      <SidebarRail  />
    </Sidebar>
  );
}
