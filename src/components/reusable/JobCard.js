import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Badge from "./Badge";

const JobCard = ({ jobData, removeJob }) => {
  const navigate = useNavigate();
  const { _id, position, companyName, location, employmentType, applicants } =
    jobData || {};
    const { user } = useSelector((state) => state.auth);

  return (
    <div
      key={_id}
      className='border border-gray-300 shadow-xl p-5 rounded-2xl text-primary relative'
    >
      {user.role==="employer" && (<Badge className="absolute top-0 right-0">{applicants.length}</Badge>)}
      <div className='flex justify-between  text-primary'>
        <div>
          <p className='text-xl'>{position}</p>
          <small className='text-primary/70 '>
            by{" "}
            <span className='font-semibold hover:text-primary cursor-pointer hover:underline transition-all'>
              {companyName}
            </span>
          </small>
        </div>
        <p>{location}</p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <p>{employmentType}</p>
        <div>
        <button className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all ' onClick={() => navigate(`/job-details/${_id}`)}>
          Details
        </button>
        {user.role==="employer" && (<button className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all  ml-2'  onClick={()=>removeJob(_id)}>
          Close
        </button>)}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
