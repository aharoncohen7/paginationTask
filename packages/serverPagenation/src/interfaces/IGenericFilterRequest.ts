import SortOrder from "../unions/T_sortOrder";
import { IFilters } from "./IFilters";

export interface GenericFilterRequest<T> {
    search?: string;
    sortKey?: keyof T;
    sortOrder?: SortOrder;
    currentPage?: number;
    filters?: IFilters;
}