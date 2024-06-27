
const Pagination = ({ currentPage, totalPages, totalLength, itemsPerPage, setCurrentPage, }) => {
   console.log(totalPages)
   const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

   return (
      <span className="flex justify-center items-center gap-4 mt-4">
         {pages.map((page, i) => (
            (page === currentPage || page === currentPage - 1 || page === currentPage + 1 || page === totalPages) &&
            <>
               <button
                  key={i}
                  onClick={() => setCurrentPage(page)}
                  className={`border p-2 mx-1 rounded ${page === currentPage ? 'bg-blue-500 text-white' : ''}`}
               >
                  {page}
               </button>
               {page === currentPage + 1 && page != totalPages && <span>...</span>}
            </>
         ))}


         <p>
            {`showing ${itemsPerPage} items from ${totalLength}`}
         </p>
      </span>
   );
};

export default Pagination;

