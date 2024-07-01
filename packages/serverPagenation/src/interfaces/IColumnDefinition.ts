import TableSchema from "../unions/T_TableSchema";
import ColumnType from "../unions/T_columnType";
import IUser from "./IUser";

export default interface IColumnDefinition<T> {
  key: keyof T;
  type: ColumnType;
  label: string;
}



