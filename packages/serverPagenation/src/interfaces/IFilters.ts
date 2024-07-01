import ActivityStatus from "../unions/T_activeStatus";
import AvailableStatus from "../unions/T_availableStatus";

export interface IFilters {
    isActive?: ActivityStatus;
    isAvailable?: AvailableStatus;
}