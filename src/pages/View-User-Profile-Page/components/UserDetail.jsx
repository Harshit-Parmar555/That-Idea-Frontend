import React from "react";
import { formatDate } from "@/utils/date";

const UserDetail = ({ user }) => {
  const formatedDate = formatDate(user?.createdAt);
  return (
    <div className="w-full flex flex-col items-center gap-10 mt-28">
      <div className="w-full sm:w-[90%] lg:w-[60%] flex flex-col items-center sm:flex-row  justify-between text-center sm:text-left gap-6">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar}
            alt="User Avatar"
            className="h-16 w-16 object-cover rounded-full border-2 border-gray-300 shadow-md "
          />
          <div>
            <h1 className="text-2xl font-[Poppins] font-semibold text-black">
              {user?.username}
            </h1>
            <p className="font-[Inter] text-sm text-gray-800">{user?.email}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-[Inter] text-sm text-gray-600">
            Joined on : {formatedDate}
          </p>
          <p className="font-[Inter] text-sm text-gray-600">
            Total Ideas : {user?.ideas.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
