import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const DataTable = ({ type }) => {

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [isActive, setIsActive] = useState('all');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalLength, setTotalLength] = useState(0);
  const itemsPerPage = 10;
  const dir = sortOrder === 'asc' ? "🔽" : "🔼";
  const url = 'http://localhost:3355/api/';

  const [filters, setFilters] = useState({});
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };



  const fetchColumns = async () => {
    try {
      const response = await axios.get(url + "tables/" + type);
      if (response.status == 200) {
        console.log(response.data.columns);
        setColumns(response.data.columns);
        setTotalLength(0)
        setData([]);
      }

    } catch (err) {
      console.log("Error in fetching data");
      setColumns([])
      setData([]);
      setTotalLength(0)
      console.error(err);
    }


  }

  const handleSort = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };



  const fetchTableData = async () => {
    try {
      const response = await axios.post(url + type, { search, sortKey, sortOrder, isActive,filters, currentPage });
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
    fetchColumns()
  }, [type]);



  useEffect(() => {
    setFilters({});
    setCurrentPage(1)
    setTotalLength(0)
  }, [type, search, isActive]);

  useEffect(() => {
    console.log(filters)
    fetchTableData();
  }, [type, search, sortKey, sortOrder, isActive, currentPage, filters]);

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
          {/* {columns &&  <select className="border p-2" value={isActive} onChange={(e) => setIsActive(e.target.value)}>
            <option value="all">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>} */}

          {columns && columns.map((col) => {
            if (col.type === "boolean") {
              return (
                <select
                  key={col.key}
                  className="border p-2"
                  value={filters[col.key] || 'all'}
                  onChange={(e) => handleFilterChange(col.key, e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="true">{col.key.slice(2,col.key.length )}</option>
                  <option value="false">Not {col.key.slice(2,col.key.length ).toLowerCase()}</option>
                </select>
              );
            }
            return null; // או רנדור של סוגי עמודות אחרים
          })}





        </div>

        <table className="min-w-full">
          <thead>
            <tr>
              {columns && columns.map((col, i) => (
                <>
                  <th
                    key={col.key}
                    className="py-2 px-4 border cursor-pointer first-letter:uppercase"
                    onClick={() => handleSort(col.key)}
                  >
                    {col.label}{sortKey === col.key ? <span>{dir}</span> : <span className='text-white'>{`---`}</span>}
                  </th>

                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length ? data.map((row) => (
              <tr key={row.id} className="text-center">
                {row && Object.entries(row).map(([key, value], i) => (
                  <>
                    {key != "__v" && <td
                      key={key}
                      className={`py-2 px-4 border ${key === "isActive" ? (row.isActive ? 'text-green-500' : 'text-red-500') : ""}`}
                    >
                      {key !== "isActive" ? value : (row.isActive ? 'Yes' : 'No')}
                    </td>
                    }
                  </>
                ))}
              </tr>
            )) : null}
          </tbody>
        </table>

        {!data.length && <div className='flex items-center justify-center  gap-6 flex-col'>
          <h1 className='flex items-center justify-center h-10 p-8 border text-5xl' >No data found</h1>
          <button className='border text-xl' onClick={() => setSearch('')}>Refresh </button>
        </div>}
        <Pagination currentPage={currentPage} totalPages={totalPages} totalLength={totalLength} itemsPerPage={data.length} setCurrentPage={setCurrentPage} />

      </div>



    </>
  );
};

export default DataTable;
