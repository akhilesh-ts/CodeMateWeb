import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userDetails = useSelector((store) => store.user);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-blue-50 py-10 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8">
        <div className="col-span-1 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={userDetails?.photoUrl || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover rounded-full border-4 border-primary shadow-md"
            />
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            {userDetails?.firstName} {userDetails?.lastName}
          </h2>
          <p className="text-sm text-gray-500">{userDetails?.email}</p>

          <div className="mt-4 text-gray-600 text-sm space-y-1">
            <p>
              <span className="font-medium text-gray-800">gender:</span>{" "}
              {userDetails?.gender}
            </p>
            <p>
              <span className="font-medium text-gray-800">Age:</span>{" "}
              {userDetails?.age}
            </p>
            <p>
              <span className="font-medium text-gray-800">Skills:</span>{" "}
              {userDetails?.skills.join(", ")}
            </p>
          </div>

          <p className="mt-4 text-gray-700 text-sm leading-relaxed px-2">
            {userDetails?.about}
          </p>
        </div>
        {userDetails && <EditProfile userDetails={userDetails} />}
      </div>
    </div>
  );
};

export default Profile;
