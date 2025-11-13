import React, { useState } from "react";

const EditProfile = ({ userDetails }) => {
  const [formData, setFormData] = useState({
    firstName: userDetails?.firstName || "",
    lastName: userDetails?.lastName || "",
    gender: userDetails?.gender || "",
    age: userDetails?.age || "",
    photoUrl: userDetails?.photoUrl || "",
    about: userDetails?.about || "",
    skills: Array.isArray(userDetails?.skills)
      ? userDetails?.skills
      : userDetails?.skills?.split(",") || [],
  });

  const allGenders = ["male", "female", "other"];
  const currentGender = formData.gender || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
  };

  return (
    <div className="col-span-2 bg-white shadow-lg rounded-2xl p-10 border border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Edit Your Profile
      </h2>

      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleSubmit}
      >
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <input
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            type="text"
            className="input input-bordered w-full rounded-lg"
            placeholder="Enter first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <input
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            type="text"
            className="input input-bordered w-full rounded-lg"
            placeholder="Enter last name"
          />
        </div>

        {/* Email + Gender */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value={userDetails?.email}
              disabled
              type="email"
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              className="select select-bordered w-full rounded-lg"
              value={currentGender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="" disabled>
                Select gender
              </option>

              {currentGender && (
                <option value={currentGender}>{currentGender}</option>
              )}

              {allGenders
                .filter((g) => g !== currentGender)
                .map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Photo URL + Preview */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Photo URL
            </label>
            <input
              type="text"
              value={formData.photoUrl}
              onChange={(e) =>
                setFormData({ ...formData, photoUrl: e.target.value })
              }
              className="input input-bordered w-full rounded-lg"
              placeholder="Enter photo URL"
            />
          </div>

          <div className="flex justify-center items-center">
            {formData.photoUrl ? (
              <img
                src={formData.photoUrl}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-sm"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                No image
              </div>
            )}
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Age
          </label>
          <input
            value={formData.age}
            onChange={(e) =>
              setFormData({ ...formData, age: e.target.value })
            }
            type="number"
            className="input input-bordered w-full rounded-lg"
            placeholder="Enter age"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Skills
          </label>
          <input
            value={formData.skills.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: e.target.value.split(",").map((s) => s.trim()),
              })
            }
            type="text"
            className="input input-bordered w-full rounded-lg"
            placeholder="e.g. React, Node.js, Tailwind"
          />
        </div>

        {/* About */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            About
          </label>
          <textarea
            value={formData.about}
            onChange={(e) =>
              setFormData({ ...formData, about: e.target.value })
            }
            className="textarea textarea-bordered w-full h-28 rounded-lg"
            placeholder="Write something about yourself..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="btn btn-primary rounded-full px-10 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
