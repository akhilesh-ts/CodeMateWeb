import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/slice/userSlice";
import { removeFeeds } from "../utils/slice/discoverSlice";
import { removeRequest } from "../utils/slice/requestSlice";

export function NavUser({ user }) {
  const { isMobile } = useSidebar();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const hadleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );

      if (res.status == 200) {
        dispatch(removeUser());
        dispatch(removeFeeds());
        dispatch(removeRequest())
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SidebarMenu className="bg-[#1E2128FF]  rounded-lg">
      <SidebarMenuItem>
        <DropdownMenu className="hover:bg-[#1E2128FF] active:bg-[#1E2128FF] ">
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:text-sidebar-accent-foreground hover:bg-[#1E2128] active:bg-[#1E2128] focus:bg-[#1E2128] focus-visible:bg-[#1E2128] data-[state=open]:bg-[#1E2128] data-[state=selected]:bg-[#1E2128] data-[state=active]:bg-[#1E2128] data-[state=current]:bg-[#1E2128] text-white"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.photoUrl} alt={user.firstName} />
                <AvatarFallback className="rounded-lg bg-[#5E5EEDFF] text-white">
                  AK
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium text-white">
                  {user.firstName}
                </span>
                <span className="truncate text-xs text-white">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 text-[#5E5EEDFF]" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-[#1E2128FF] border-0 text-white font-light"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.photoUrl} alt={user.firstName} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-normal">{user.firstName}</span>
                  <span className="truncate text-xs font-normal">
                    {user.email}
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles className="text-[#5E5EEDFF]"/>
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck className="text-[#5E5EEDFF]" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="text-[#5E5EEDFF]"/>
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className="text-[#5E5EEDFF]"/>
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={hadleLogout}>
              <LogOut className="text-[#5E5EEDFF]" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
