import IUser from "../../interfaces/IUser";

type ActivityStatus = 'all' | 'true' | 'false' | boolean;
export type SortOrder = 'asc' | 'desc';

class FilterUserRequest {

    email?: string;
    sortKey?: keyof IUser;
    search?: string;
    isActive?: ActivityStatus;
    sortOrder?: SortOrder;
    currentPage?: number;
    filters?: Object

    constructor(search: string = '', sortOrder: SortOrder = 'asc', isActive: ActivityStatus = 'all', filters:Object = {}, sortKey: keyof IUser = 'fullName', email: string = '', currentPage: number = 1) {
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

