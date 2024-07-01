import ICar from "../../interfaces/ICar";
import AvailableStatus from "../../unions/T_availableStatus";
import SortOrder from "../../unions/T_sortOrder";


class FilterCarRequest {
    license?: string;
    sortKey?: keyof ICar;
    search?: string;
    isAvailable?: AvailableStatus;
    sortOrder?: SortOrder;
    currentPage?: number;


    constructor(license:string = "", search: string = '', sortOrder: SortOrder = 'asc', sortKey: keyof ICar = 'model', color: string = '', currentPage: number = 1, isAvailable: AvailableStatus = "all") {
        this.license = license;
        this.search = search;
        this.isAvailable = isAvailable;
        this.sortKey = sortKey;
        this.sortOrder = sortOrder;
        this.currentPage = currentPage;
    }
}


export default FilterCarRequest

