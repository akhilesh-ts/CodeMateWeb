import {Users,MessageSquare,FolderOpen } from "lucide-react"

export const BASE_URL="http://localhost:7777"

export  const MAIN_MENU=[
     {
        name:"Home",
        icon:Users,
        isActive:true,
        link:"/app/Home"
    },
    {
        name:"Requests",
        icon:Users,
        isActive:true,
        link:"/app/Requests"
    },
    {
        name:"Discover",
        icon:Users,
        isActive:true,
        link:"/app/Discover"
    },
    {
        name:"Connections",
        icon:Users,
        isActive:true,
        link:"/app/connections"

    },
    {
        name:"Chat",
        icon:MessageSquare,
        isActive:true,
        link:"#"
    },
    {
        name:"Projects",
        icon:FolderOpen,
        isActive:true,
        link:"#"
    },
]





