import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { toast } from "sonner";

const DiscoverCard = ({ user, onRemove }) => {
  const handleSendInterest = async (status, userId) => {
    try {
      console.log("interest send");
      const res = await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      if (res.status === 200) {
        onRemove(userId);
        if (status === "Interested") {
          toast.success(`Request successfully send to ${user?.firstName}`);
        } else if (status === "Ignore") {
          toast.error(`You skipped ${user?.firstName} `);
        }
      }

      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-4 gap-5">
      <div className="relative  h-[340px] w-[250px] sm:h-[360px] sm:w-[270px] md:h-[380px] md:w-[290px] rounded-2xl overflow-hidden shadow-xl  bg-neutral-800  text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_DA2Bkynd6UhU6XWXVUpvl6PsqtDNppn6GS8Z16QsCX8N9V8mykR4ysfujCTLzfdUBGsMOp-o2oMiJsRwOcV3pbKIyMByIeutQAq7is&s=10"
          alt="User"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 ">
          <h2 className="text-lg font-bold font-grotesk ">
            {user?.firstName.toUpperCase()}{" "}
            <span className="font-light">{user?.age ? user?.age : " "}</span>
          </h2>
          <h4 className="text-sm font-light  ">
            {user?.title}
          </h4>
          <div className="flex gap-2 mt-6">
            <button
              className="flex-1 py-1.5 bg-[#5E5EEDFF] rounded-lg text-xs font-medium transition-all cursor-pointer"
              onClick={() => handleSendInterest("Interested", user?._id)}
            >
              Interest
            </button>
            <button
              className=" flex-1 py-1.5  bg-red-500/20 hover:bg-red-500/40 rounded-lg border border-red-500/40 text-xs font-medium transition-all cursor-pointer"
              onClick={() => handleSendInterest("Ignore", user?._id)}
            >
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
