import { FilterQuery, UpdateQuery } from 'mongoose'
import IUser from '../interfaces/IUser'
import UserModel from '../models/UserModel'
import IController from '../interfaces/IController'
import FilterUserRequest from '../dto/user/FilterUserRequest'
import SortOrder from '../unions/T_sortOrder'



class UserController implements IController<IUser> {
    async create(data: IUser): Promise<IUser> {
        let user = await UserModel.create(data)
        return user
    }

    // async read(filter: FilterQuery<IUser> = {}): Promise<IUser[]> {
    //     try {
    //       const users = await UserModel.find(filter).exec();
    //       if (users.length > 0) {
    //         return users;
    //       } else {
    //         throw new Error('No users found');
    //       }
    //     } catch (error) {
    //       throw new Error(`Failed to read users: ${error}`);
    //     }
    //   }

    async read(filter: FilterUserRequest): Promise<{ items: IUser[], count: number }> {
        const { search, sortKey, sortOrder, currentPage, filters } = filter;
        console.log(search, sortKey, sortOrder, currentPage, filters, "🎖️😒➡️👌👌😫👍📵🤣");
        const itemsPerPage = 10;
        const startIndex = currentPage ? (currentPage - 1) * itemsPerPage : 0;
        let mongooseFilter = {
            $or: [
                { fullName: { $regex: search || "", $options: 'i' } },
                { email: { $regex: search || "", $options: 'i' } }
            ],
            isActive: (filters &&  filters.isActive) ? (filters.isActive == "true" || filters.isActive == "false" ? (filters.isActive == "true" ? true : false) : undefined) : undefined
        };
        if (!filters || !filters.isActive || (filters.isActive != "true" && filters.isActive != "false")) {
            delete mongooseFilter.isActive;
        }

        let items = await UserModel.find(mongooseFilter)
        console.log({items});
        if (items.length > 0) {
            return { items: sortData(items, sortKey, sortOrder).slice(startIndex, startIndex + itemsPerPage), count: items.length };
        }
        else return { items: [], count: 0 }
    }


    async readOne(filter: FilterQuery<IUser>): Promise<IUser | null> {
        console.log({ filter }, "--------------------------------")
        return await UserModel.findOne(filter)
    }
    update(filter: FilterQuery<IUser>, newData: UpdateQuery<IUser>): IUser {
        throw new Error('Method not implemented.')
    }
    del(filter: FilterQuery<IUser>): boolean {
        throw new Error('Method not implemented.')
    }




}

export default UserController


export const sortData = (data: any, key: keyof IUser | undefined, order: SortOrder | undefined = 'asc') => {
    if (key != undefined) {
        return [...data].sort((a, b) => {
            if (a[key].toString().toLowerCase() < b[key].toString().toLowerCase()) return order === 'asc' ? -1 : 1;
            if (a[key].toString().toLowerCase() > b[key].toString().toLowerCase()) return order === 'asc' ? 1 : -1;
            return 0;
        });
    }
    return data;
};

