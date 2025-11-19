import {Users,MessageSquare,FolderOpen } from "lucide-react"

export const BASE_URL="http://localhost:7777"

export  const MAIN_MENU=[
     {
        name:"Overview",
        icon:Users,
        isActive:true,
        link:"/app/overview"
    },
    {
        name:"Feeds",
        icon:Users,
        isActive:true,
        link:"/app/feed"
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

