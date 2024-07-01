import { FilterQuery, UpdateQuery } from 'mongoose'
import ICar from '../interfaces/ICar';
// import users from '../data'
// import ICar from '../interfaces/ICar'
import IController from '../interfaces/IController'
import FilterCarRequest from '../dto/car/FilterCarRequest';
import CarModel from '../models/CarModel';
import SortOrder from '../unions/T_sortOrder';
// import FilterUserRequest, { SortOrder } from '../dto/user/FilterUserRequest'
// import CarModel from '../models/CarModel'



class CarController implements IController<ICar> {

    async read(filter: FilterCarRequest): Promise<{ items: ICar[], count: number }> {
        const { search, sortKey, sortOrder, currentPage, filters } = filter;
        console.log(search, sortKey, sortOrder, currentPage, filters, "🎖️😒➡️👌👌😫👍📵🤣");
        const itemsPerPage = 10;
        const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;
        let mongooseFilter = {
            $or: [
                { license: { $regex: search || "", $options: 'i' } },
                { model: { $regex: search || "", $options: 'i' } }
            ],
            isAvailable: (filters && filters.isAvailable) ? (filters.isAvailable == "true" || filters.isAvailable == "false" ? (filters.isAvailable == "true" ? true : false) : undefined) : undefined
        };
        if (!filters || !filters.isAvailable || (filters.isAvailable != "true" && filters.isAvailable != "false")) {
            delete mongooseFilter.isAvailable;
        }

        let items = await CarModel.find(mongooseFilter)
        console.log({ items });
        if (items.length > 0) {
            return { items: sortData(items, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count: items.length };
        }
        else return { items: [], count: 0 }
    }



    async readOne(filter: FilterQuery<ICar>): Promise<ICar | null> {
        console.log({ filter }, "--------------------------------")
        return await CarModel.findOne(filter)
    }
    update(filter: FilterQuery<ICar>, newData: UpdateQuery<ICar>): ICar {
        throw new Error('Method not implemented.')
    }
    del(filter: FilterQuery<ICar>): boolean {
        throw new Error('Method not implemented.')
    }

    async create(data: ICar): Promise<ICar> {
        let car = await CarModel.create(data)
        return car
    }

}

export default CarController


export const sortData = (data: any, key: keyof ICar | undefined, order: SortOrder | undefined = 'asc') => {
    if (key != undefined) {
        return [...data].sort((a, b) => {
            if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return order === 'asc' ? -1 : 1;
            if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return order === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return data;
};






// class CarController implements IController<ICar> {
//     async create(data: ICar): Promise<ICar> {
//         let user = await CarModel.create(data)
//         return user
//     }

//     // async read(filter: FilterQuery<ICar> = {}): Promise<ICar[]> {
//     //     try {
//     //       const users = await CarModel.find(filter).exec();
//     //       if (users.length > 0) {
//     //         return users;
//     //       } else {
//     //         throw new Error('No users found');
//     //       }
//     //     } catch (error) {
//     //       throw new Error(`Failed to read users: ${error}`);
//     //     }
//     //   }

//     async read(filter: FilterUserRequest): Promise<{ items: ICar[], count: number }> {
//         const { search, isAvailable, sortKey, sortOrder, currentPage } = filter;
//         const itemsPerPage = 10;
//         const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;

//         let filter2 = {
//             $or: [
//                 { fullName: { $regex: search || "", $options: 'i' } },
//                 { email: { $regex: search || "", $options: 'i' } }
//             ],
//             isAvailable: isAvailable ? (isAvailable == "true || isAvailable == "false" ? (isAvailable == "true ? true : false) : undefined) : undefined
//         };
//         if (!isAvailable || (isAvailable != "true && isAvailable != "false")) {
//             delete filter2.isAvailable;
//         }

//         let users = await CarModel.find(filter2)
//         if (users.length > 0) {
//             return { items: sortData(users, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count:users.length };
//         }
//         else  return { items: [], count:0 }
//     }


//     async readOne(filter: FilterQuery<ICar>): Promise<ICar | null> {
//         console.log({ filter }, "--------------------------------")
//         return await CarModel.findOne(filter)
//     }
//     update(filter: FilterQuery<ICar>, newData: UpdateQuery<ICar>): ICar {
//         throw new Error('Method not implemented.')
//     }
//     del(filter: FilterQuery<ICar>): boolean {
//         throw new Error('Method not implemented.')
//     }




// }

// export default CarController


// export const sortData = (data: any, key: keyof ICar | undefined, order: SortOrder | undefined = 'asc') => {


//     if (key != undefined) {
//         return [...data].sort((a, b) => {
//             if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return order === 'asc' ? -1 : 1;
//             if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return order === 'asc' ? 1 : -1;
//             return 0;
//         });
//     }
//     return data;
// };

