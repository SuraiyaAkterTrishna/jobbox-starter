import React from "react";
import { useShowUsersQuery } from "../../features/api/authApi";

const CandidateList = () => {
  const {data} = useShowUsersQuery();
  const candidates = data ? data?.data : [];
  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Candidates Details</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Email</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Full Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Gender</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Address</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>City</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Country</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Post Code</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {candidates.filter(({role})=>role==="candidate").map(({ email, firstName, lastName, gender, address, city, country, postcode, _id }) => (
                <tr key={_id}>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{email}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{firstName+" "+lastName}</div>
                  </td>
                  <td className='p-2'>
                  <div className='font-medium text-gray-800'>{gender}</div>
                  </td>
                  <td className='p-2'>
                  <div className='font-medium text-gray-800'>{address}</div>
                  </td>
                  <td className='p-2'>
                  <div className='font-medium text-gray-800'>{city}</div>
                  </td>
                  <td className='p-2'>
                  <div className='font-medium text-gray-800'>{country}</div>
                  </td>
                  <td className='p-2'>
                  <div className='font-medium text-gray-800'>{postcode}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default CandidateList;
