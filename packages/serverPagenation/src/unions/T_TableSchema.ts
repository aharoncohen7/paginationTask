import IColumnDefinition from "../interfaces/IColumnDefinition";

  
type TableSchema<T> = {
    name: string;
    columns: IColumnDefinition<T>[];
  }
    

  export default TableSchema;