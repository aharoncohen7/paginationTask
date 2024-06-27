import ICar from "../../interfaces/ICar";
import AvailableStatus from "../../unions/T_availableStatus";
import SortOrder from "../../unions/T_sortOrder";


class FilterCarRequest {
    model?: string;
    sortKey?: keyof ICar;
    search?: string;
    isAvailable?: AvailableStatus;
    sortOrder?: SortOrder;
    currentPage?: number;


    constructor(search: string = '', sortOrder: SortOrder = 'asc', sortKey: keyof ICar = 'model', color: string = '', currentPage: number = 1, isAvailable: AvailableStatus = "all") {
        this.search = search;
        this.isAvailable = isAvailable;
        this.sortKey = sortKey;
        this.sortOrder = sortOrder;
        this.currentPage = currentPage;
    }
}

export default FilterCarRequest

