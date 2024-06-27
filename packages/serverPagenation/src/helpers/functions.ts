import IUser from "../interfaces/IUser";

export const filterData = (data: IUser[], search: string, isActive: 'all' | 'active' | 'inactive'): IUser[] => {
    return data.filter((user: IUser) => {
        const matchesSearch: boolean =
            user.fullName.toLowerCase().includes(search.toLowerCase()) ||
            user.email.toLowerCase().includes(search.toLowerCase());

        const matchesStatus: boolean =
            isActive === 'all' || user.isActive === (isActive === 'active');

        return matchesSearch && matchesStatus;
    });
};

// export const filterDataJs = (data, search, isActive) => {
//     return data.filter(user => {
//         const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase());
//         const matchesStatus = isActive === 'all' || user.isActive === (isActive === 'active');
//         return matchesSearch && matchesStatus;
//     });
// };

export const sortData = <K extends keyof IUser>(
    data: IUser[], 
    key: K, 
    order: 'asc' | 'desc' = 'asc'
  ): IUser[] => {
    return [...data].sort((a: IUser, b: IUser) => {
      const aValue = a[key] as unknown as string | number;
      const bValue = b[key] as unknown as string | number;
  
      if (aValue < bValue) return order === 'asc' ? -1 : 1;
      if (aValue > bValue) return order === 'asc' ? 1 : -1;
      return 0;
    });
  };
// export const sortData = <K extends keyof IUser>(
//     data: IUser[], 
//     key: K, 
//     order: 'asc' | 'desc' = 'asc'
//   ): IUser[] => {
//     return [...data].sort((a: IUser, b: IUser) => {
//       const aValue = a[key] as unknown as string | number;
//       const bValue = b[key] as unknown as string | number;
  
//       if (aValue < bValue) return order === 'asc' ? -1 : 1;
//       if (aValue > bValue) return order === 'asc' ? 1 : -1;
//       return 0;
//     });
//   };

// export const sortData = (data, key, order = 'asc') => {
//     return data.sort((a, b) => {
//       if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
//       if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
//       return 0;
//     });
//   };