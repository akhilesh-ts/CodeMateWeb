import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { toast } from "sonner";

const UserCard = ({ user ,onRemove}) => {
  
  const handelReviewRequest = async (status, requestId) => {
    try {
      console.log(user);
      console.log(requestId, status);
      const res = await axios.post(
        `${BASE_URL}/request/review/${status}/${requestId}`,
        {},
        { withCredentials: true }
      );
      console.log(res.data);
      if(res.status===200){
        onRemove(requestId)
        if(status==="Rejected"){
          toast.error(`Reject the request of ${user?.fromUserId?.firstName}`)
        }
        else if(status==="Accepted"){
          toast.success(`successfully accepted the request of ${user?.fromUserId?.firstName}`)
        }
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card className="w-full  mx-auto bg-[#1E2128FF]  text-card-foreground rounded-xl border border-[#5E5EED1A] shadow-lg mb-3 cursor-pointer">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ogzB9ZzotHnOSEBlMtmAiwOVDWFev-IlGYupvgLFZcvi1iz1mZUOtc2Jh6RviEFxP9fINzHJUjmytXJTPMMeHh1InE9YHPAEVAtSy5Q&s=10"
          alt={user?.fromUserId?.firstName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg font-grotesk text-[#FAFAFBFF]">
            {user?.fromUserId?.firstName}
          </h3>
          <p className="text-sm text-muted-foreground">
            {formatDistanceToNow(new Date(user?.createdAt), {
              addSuffix: true,
            })}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm mb-4  leading-relaxed text-[#FAFAFBFF]">
          {user?.fromUserId?.about}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {user?.skills?.map((item, index) => (
            <Badge
              variant="secondary"
              className="bg-[#5E5EED1A] text-[#5E5EEDFF]"
              key={index}
            >
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#5E5EED1A]">
          <Button
            size="sm"
            className="bg-[#5E5EED1A] hover:bg-[#5E5EED1A] border font-thin border-[#5E5EED1A] cursor-pointer"
            onClick={() => handelReviewRequest("Rejected", user?._id)}
          >
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-[#5E5EEDFF] text-white font-thin cursor-pointer hover:bg-[#5E5EEDFF]"
            onClick={() => handelReviewRequest("Accepted", user?._id)}
          >
            Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
