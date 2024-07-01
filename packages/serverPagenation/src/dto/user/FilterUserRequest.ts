import { IFilters } from "../../interfaces/IFilters";
import { GenericFilterRequest } from "../../interfaces/IGenericFilterRequest";
import IUser from "../../interfaces/IUser";
import ActivityStatus from "../../unions/T_activeStatus";
import SortOrder from "../../unions/T_sortOrder";

class FilterUserRequest  implements GenericFilterRequest<IUser>{
    email?: string;
    sortKey?: keyof IUser;
    search?: string;
    isActive?: ActivityStatus;
    sortOrder?: SortOrder;
    currentPage?: number;
    filters?: IFilters;

    constructor(search: string = '',
         sortOrder: SortOrder = 'asc',
          isActive: ActivityStatus = 'all',
           filters:IFilters = {},
           sortKey: keyof IUser = 'fullName',
           email: string = '',
           currentPage: number = 1) 
        {
        this.email = email;
        this.search = search;
        this.isActive = isActive;
        this.filters = filters;
        this.sortKey = sortKey;
        this.sortOrder = sortOrder;
        this.currentPage = currentPage;
    }
}

export default FilterUserRequest

