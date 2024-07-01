import ICar from "../../interfaces/ICar";
import { IFilters } from "../../interfaces/IFilters";
import { GenericFilterRequest } from "../../interfaces/IGenericFilterRequest";
import AvailableStatus from "../../unions/T_availableStatus";
import SortOrder from "../../unions/T_sortOrder";


class FilterCarRequest  implements GenericFilterRequest<ICar>{
    license?: string;
    sortKey?: keyof ICar;
    search?: string;
    isAvailable?: AvailableStatus;
    sortOrder?: SortOrder;
    currentPage?: number;
    filters?: IFilters;


    constructor(
        license:string = "",
         search: string = '',
         sortOrder: SortOrder = 'asc',
         sortKey: keyof ICar = 'model',
         currentPage: number = 1,
         isAvailable: AvailableStatus = "all",
         filters:IFilters = {},) 
         {
        this.license = license;
        this.search = search;
        this.isAvailable = isAvailable;
        this.sortKey = sortKey;
        this.sortOrder = sortOrder;
        this.currentPage = currentPage;
        this.filters = filters;
    }
}


export default FilterCarRequest

