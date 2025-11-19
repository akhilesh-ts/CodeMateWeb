import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card className="w-full  mx-auto bg-card text-card-foreground rounded-xl border border-border shadow-lg mb-3">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={user?.photoUrl}
          alt={user?.firstName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-lg ">{user?.firstName}</h3>
          <p className="text-sm text-muted-foreground">2 hours ago</p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm mb-4 text-muted-foreground leading-relaxed">
          {user?.about}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {user?.skills?.map((item, index) => (
            <Badge variant="secondary" key={index}>
              {item}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-border">
          <Button variant="destructive" size="sm">
            Reject
          </Button>
          <Button size="sm">Accept</Button>
          {/* <Button variant="link" size="sm" className="text-muted-foreground">Message</Button> */}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
