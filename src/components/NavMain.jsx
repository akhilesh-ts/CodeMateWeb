import { ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { MAIN_MENU } from "../utils/constants";
import { Link } from "react-router-dom";

export function NavMain() {
  return (
    <SidebarGroup className="mt-6">
      
      <SidebarMenu>
        {MAIN_MENU.map((item) => (
          <Collapsible
            key={item.name}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link  to={item?.link}>
                  <SidebarMenuButton className="hover:bg-[#1E2128FF] active:bg-[#1E2128FF] cursor-pointer" tooltip={item.name} >
                    {item.icon && <item.icon className="text-white" />}
                    <span className="text-white">{item.name}</span>
                    <ChevronRight className="ml-auto text-white" />
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
