import { BookOpen, SquareTerminal,Users,MessageSquare,FolderOpen } from "lucide-react"

export const BASE_URL="http://localhost:7777"

export  const MAIN_MENU=[
    {
        name:"Feeds",
        icon:Users,
        isActive:true
    },
    {
        name:"Connections",
        icon:Users,
        isActive:true
    },
    {
        name:"Chat",
        icon:MessageSquare,
        isActive:true
    },
    {
        name:"Projects",
        icon:FolderOpen,
        isActive:true
    },
]

