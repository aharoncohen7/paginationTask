import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const DataTable = ({ type }) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  // const [isActive, setIsActive] = useState('all');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalLength, setTotalLength] = useState(0);
  const [filters, setFilters] = useState({});
  const itemsPerPage = 10;
  const dir = sortOrder === 'asc' ? "🔽" : "🔼";
  const url = 'http://localhost:3355/api/';
  const totalPages = Math.ceil(totalLength / itemsPerPage);

  // קבלת תבנית טבלה ריקה
  useEffect(() => {
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
    fetchColumns()
  }, []);

  // קבלת תוכן טבלה
  useEffect(() => {
    const fetchTableData = async () => {
      try {
        const response = await axios.post(url + type, { search, sortKey, sortOrder, filters, currentPage });
        if (response.status == 200) {
          console.log(response.data.items);
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

    fetchTableData()
  }, [search, sortKey, sortOrder, currentPage, filters]);


  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
    setTotalLength(0);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1);
    setTotalLength(0);
  };

  const handleSortChange = (key) => {
    const order = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
  };



  return (
    <>
      <div className="p-4">
        <div className="flex mb-4">
          <input
            type="text"
            className="border p-2 mr-2"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          {columns && columns.map((col) => {
            if (col.type === "boolean") {
              return (
                <select
                  key={col.key}
                  className="border p-2"
                  value={filters[col.key] || 'all'}
                  onChange={(e) =>
                    // setIsActive(e.target.value)
                    handleFilterChange(col.key, e.target.value)

                  }
                >
                  <option value="all">All</option>
                  <option value="true">{col.key.slice(2, col.key.length)}</option>
                  <option value="false">Not {col.key.slice(2, col.key.length).toLowerCase()}</option>
                </select>
              );
            }
            return null;
          })}
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              {columns && columns.map((col) => (
                <>
                  <th
                    key={col.key}
                    className="py-2 px-4 border cursor-pointer first-letter:uppercase"
                    onClick={() => col.sortable && handleSortChange(col.key)}
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
                {row && Object.entries(row).map(([key, value]) => (
                  <>
                    {key != "__v" && <td
                      key={key}
                      className={`py-2 px-4 border ${key === "isActive" ||key === "isAvailable" ? (value ? 'text-green-500' : 'text-red-500') : ""}`}
                    >
                      {key !== "isActive" && key !== "isAvailable" ? value : (value ? 'Yes' : 'No')}
                  
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
          <button className='border text-xl' onClick={() => handleSearchChange('')}>Refresh </button>
        </div>}
        <Pagination currentPage={currentPage} totalPages={totalPages} totalLength={totalLength} itemsPerPage={data.length} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
};

export default DataTable;
