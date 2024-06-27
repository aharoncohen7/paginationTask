
 export const sortData = (data, key, order = 'asc') => {
   return data.sort((a, b) => {
     if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
     if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
     return 0;
   });
 };
 
 export const filterData = (data, search, isActive) => {
   return data.filter(user => {
     const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
     const matchesStatus = isActive === 'all' || user.isActive === (isActive === 'active');
     return matchesSearch && matchesStatus;
   });
 };
 