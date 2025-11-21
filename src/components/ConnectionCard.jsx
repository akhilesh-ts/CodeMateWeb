import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, MessageCircle } from "lucide-react";

const ConnectionCard = ({ user }) => {
  return (
    <Card
      className="
        bg-[#1E2128FF]
        border border-[#2D2D35]
        rounded-xl
        text-white
        shadow-md
        hover:shadow-lg hover:border-[#3A3A45]
        transition-all
        duration-200
      "
    >
      <CardContent className=" flex flex-col items-center text-center space-y-4">
        {/* Avatar */}
        <div className="relative">
          <div className="h-20 w-20 rounded-full overflow-hidden bg-[#D6F5DB]">
            <img
              src={user?.photoUrl}
              alt={user?.firstName}
              className="h-full w-full object-cover"
            />
          </div>

          <span
            className="
      absolute bottom-1 right-1
      h-4 w-4 bg-green-500 rounded-full
      border-[3px] border-[#1A1A1F]
    "
          />
        </div>

        {/* Name */}
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight font-grotesk">
            {user?.firstName}
          </h2>
        </div>

        {/* Short Bio */}
        <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
          {user?.about}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between w-full pt-2">
          {/* Chat Button */}
          <Button
            size="sm"
            className="
              flex-1 mr-2
              bg-[#6F52ED]
              hover:bg-[#5c45c5]
              text-white
              rounded-lg
              flex items-center justify-center gap-1.5
              text-xs
            "
          >
            <MessageCircle size={14} />
            Chat
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConnectionCard;
