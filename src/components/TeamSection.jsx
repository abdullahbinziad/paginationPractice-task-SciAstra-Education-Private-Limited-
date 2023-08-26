/* eslint-disable react/prop-types */
import  { useState } from 'react';
import MentorsCard from './MentorsCard'; // Replace with your actual path

const itemsPerPage = 8; // Number of items to display per page

function TeamSection({  data }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the starting index and ending index of items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the array to get the mentors for the current page
  const mentorsToShow = data.slice(startIndex, endIndex);

  return (
    <div>
      {/* Render mentors for the current page */}

      <div className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  sm:grid-cols-1 gap-8'>

      {mentorsToShow.map((mentor) => (
        <MentorsCard key={mentor.id} mentor={mentor} />
      ))}

      </div>
     

      {/* Pagination controls */}
      <div className="mt-8 flex justify-center items-center space-x-4">
  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-md ${
      currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Previous
  </button>

  {/* Page numbers */}
  <div className="flex space-x-2">
    {[...Array(totalPages).keys()].map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page + 1)}
        className={`px-3 py-2 rounded-full ${
          currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-blue-200'
        }`}
      >
        {page + 1}
      </button>
    ))}
  </div>

  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded-md ${
      currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
    }`}
  >
    Next
  </button>
</div>
    </div>
  );
}

export default TeamSection;
