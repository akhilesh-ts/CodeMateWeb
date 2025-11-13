import { BookOpen, SquareTerminal,Users,MessageSquare,FolderOpen } from "lucide-react"

export const BASE_URL="http://localhost:7777"

export  const MAIN_MENU=[
    {
        name:"Feeds",
        icon:Users,
        isActive:true,
        link:"/feed"
    },
    {
        name:"Connections",
        icon:Users,
        isActive:true,
        link:"/connections"

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

