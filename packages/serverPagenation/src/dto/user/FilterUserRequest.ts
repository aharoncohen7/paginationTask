import IUser from "../../interfaces/IUser";

type ActivityStatus = 'all' | 'active' | 'inactive' | boolean ;
export type SortOrder = 'asc' | 'desc';

class FilterUserRequest {
   
    email?: string;
    sortKey?: keyof IUser;
    search?: string;
    isActive?: ActivityStatus;
    sortOrder?: SortOrder;
    currentPage?: number;

    constructor(search: string = '', sortOrder: SortOrder = 'asc', isActive: ActivityStatus = 'all', sortKey: keyof IUser = 'fullName', email: string = '', currentPage: number =1) {
        this.email = email;
        this.search = search;
        this.isActive = isActive;
        this.sortKey = sortKey;
        this.sortOrder = sortOrder;
        this.currentPage = currentPage;
            }
}

export default FilterUserRequest

