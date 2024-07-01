// import { Model, Document } from 'mongoose';
// import { GenericFilterRequest } from '../interfaces/IGenericFilterRequest';



// async function GenericRead<T extends Document>(
//     model: Model<T>,
//     filter: GenericFilterRequest<T>,
//     searchFields: (keyof T)[],
//     booleanFields: (keyof T)[]
// ): Promise<{ items: T[], count: number }> {
//     const { search, sortKey, sortOrder, currentPage, filters } = filter;
//     const itemsPerPage = 10;
//     const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;

//     // בניית מסנן מונגוס
//     let mongooseFilter: any = {};

//     // הוספת חיפוש טקסט
//     if (search) {
//         mongooseFilter.$or = searchFields.map(field => ({
//             [field]: { $regex: search, $options: 'i' }
//         }));
//     }

//     // הוספת מסננים בוליאניים
//     booleanFields.forEach(field => {
//         if (filters && filters[field as string] !== undefined) {
//             const boolValue = filters[field as string];
//             if (boolValue === 'true' || boolValue === 'false') {
//                 mongooseFilter[field] = boolValue === 'true';
//             }
//         }
//     });

//     // ביצוע השאילתה
//     let items = await model.find(mongooseFilter);

//     // מיון התוצאות
//     if (sortKey && sortOrder) {
//         items.sort((a, b) => {
//             if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
//             if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     // החזרת התוצאות
//     return {
//         items: items.slice(startIndex, startIndex + itemsPerPage),
//         count: items.length
//     };
// }

// export default GenericRead;



// import { Model, Document } from 'mongoose';
// import { IFilters } from "../interfaces/IFilters";
// import ActivityStatus from "../unions/T_activeStatus";
// import AvailableStatus from "../unions/T_availableStatus";

// type SortOrder = 'asc' | 'desc';

// interface GenericFilterRequest<T> {
//     search?: string;
//     sortKey?: keyof T;
//     sortOrder?: SortOrder;
//     currentPage?: number;
//     filters?: IFilters;
// }

// type FilterKeys = keyof IFilters;

// async function genericRead<T extends Document>(
//     model: Model<T>,
//     filter: GenericFilterRequest<T>,
//     searchFields: (keyof T)[],
//     booleanFields: FilterKeys[]
// ): Promise<{ items: T[], count: number }> {
//     const { search, sortKey, sortOrder, currentPage, filters } = filter;
//     const itemsPerPage = 10;
//     const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;

//     let mongooseFilter: any = {};

//     if (search) {
//         mongooseFilter.$or = searchFields.map(field => ({
//             [field]: { $regex: search, $options: 'i' }
//         }));
//     }

//     booleanFields.forEach(field => {
//         if (filters && filters[field] !== undefined) {
//             const value = filters[field];
//             if (value === 'true' || value === 'false') {
//                 mongooseFilter[field] = value === 'true';
//             } else if (value === 'all') {
//                 // אם הערך הוא 'all', לא נוסיף אותו למסנן
//             } else {
//                 mongooseFilter[field] = value;
//             }
//         }
//     });

//     let items = await model.find(mongooseFilter);

//     if (sortKey && sortOrder) {
//         items.sort((a, b) => {
//             if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1;
//             if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }

//     return {
//         items: items.slice(startIndex, startIndex + itemsPerPage),
//         count: items.length
//     };
// }

// export default genericRead;