import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const DataTable = ({ url }) => {

  const [data, setData] = useState('');
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState('all');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalLength, setTotalLength] = useState(0);
  const itemsPerPage = 10;

  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };
  const dir = sortOrder === 'asc' ? "🔽" : "🔼";

  const fetchBodyInfo = async () => {
    try {
      const response = await axios.post(url, { search, sortKey, sortOrder, isActive, currentPage });
      if (response.status == 200) {
        setData(response.data.items);
        setTotalLength(response.data.count)
      }
     
    } catch (err) {
      console.log("Error in fetching data");
      setData([]);
      setTotalLength(0)
      console.error(err);
    }
  };

  useEffect(() => {
    setCurrentPage(1)
    setTotalLength(0)
  }, [url, search, isActive]);

  useEffect(() => {
    fetchBodyInfo();
  }, [url, search, sortKey, sortOrder, isActive, currentPage]);

  const totalPages = Math.floor(totalLength / itemsPerPage);
  return (
    <>
      <div className="p-4">

        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="border p-2" value={isActive} onChange={(e) => setIsActive(e.target.value)}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {data.length ? <table className="min-w-full">
          <thead>
            <tr>
              {data && Object.keys(data[0]).map((key, i) => (
             <>
               {key != "__v" && <th
                  key={key}
                  className="py-2 px-4 border cursor-pointer first-letter:uppercase"
                  onClick={() => handleSort(key)}
                >
                  {key == "isActive" ? "status" : (key == "_id" ? "id" : key)}{sortKey === key ? <span>{dir}</span>: <span className='text-white'>{`---`}</span>}
                </th>}
             
             </>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && data.map((obj) => (
              <tr key={obj.id} className="text-center">
                {obj && Object.entries(obj).map(([key, value]) => (
                  <>
                 { key != "__v" &&<td
                    key={key}
                    className={`py-2 px-4 border ${key === "isActive" ? (obj.isActive ? 'text-green-500' : 'text-red-500') : ""}`}
                  >
                    {key !== "isActive" ? value : (obj.isActive ? 'Yes' : 'No')}
                  </td>}
                  </>
                ))}
              </tr>
            ))}
          </tbody>
        </table> :
          <div className='flex items-center justify-center  gap-6 flex-col hover:'>
            <h1 className='flex items-center justify-center h-10 p-8 border text-5xl' >not found data</h1>
            <button className='border text-xl' onClick={() => setSearch('')}>Refresh </button>
          </div>

        }

        <Pagination currentPage={currentPage} totalPages={totalPages} totalLength={totalLength} itemsPerPage={data.length} setCurrentPage={setCurrentPage} />

      </div>



    </>
  );
};

export default DataTable;
