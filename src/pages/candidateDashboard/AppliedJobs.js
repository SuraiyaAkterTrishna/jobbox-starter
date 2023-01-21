import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/reusable/JobCard";
import Loading from "../../components/reusable/Loading";
import { filterJob } from "../../features/filter/filterSlice";
import { useGetAppliedJobQuery } from "../../features/job/jobApi";

const AppliedJobs = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.filter);
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const {data, isLoading} = useGetAppliedJobQuery(email);
  const appliedJobs = data ? data.data : [];

  if(isLoading){
    return <Loading />
  }
  let content;
  if (filter === "last") {
    content = appliedJobs.slice().sort((a,b)=>a.postDate>b.postDate ? 1 : -1).map(job=> <JobCard key={job._id} jobData={job} />);
  } else {
    content = appliedJobs.slice().sort((a,b)=>a.postDate>b.postDate ? -1 : 1).map(job=> <JobCard key={job._id} jobData={job} />);
  }

  return (
    <div>
      <div className='flex gap-6 py-6'>
          <div className='w-auto lg:w-4/5'>
            <h2 className='text-4xl font-bold'>Applied jobs</h2>
          </div>
          <div className='w-auto lg:w-1/5 flex justify-end items-end'>
            <select className="select select-primary max-w-xs" onChange={(e)=>{
              const selected = e.target.value; 
              dispatch(filterJob(selected));
              }}>
              <option value="first">sort by first applied</option>
              <option value="last">sort by last applied</option>
            </select>
          </div>
        </div>
      <div className='grid grid-cols-2 gap-5 pb-5'>
        {
          content
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
