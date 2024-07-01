import ICar from "../interfaces/ICar";
import IColumnDefinition from "../interfaces/IColumnDefinition";
import IUser from "../interfaces/IUser";
import TableSchema from "../unions/T_TableSchema";
import ColumnType from "../unions/T_columnType";

function createColumn<T>(
    key: keyof T, 
    type: ColumnType, 
    label: string,
    sortable: boolean,
    filterable: boolean,
  ): IColumnDefinition<T> {
    return { key, type, label, sortable, filterable};
  }
  
  
  export const userTableSchema: TableSchema<IUser> = {
    name: 'users',
  
    columns: [
        createColumn<IUser>('_id', 'string', "מזהה", false, true),
        createColumn<IUser>('fullName', 'string', 'שם מלא', true, true),
        createColumn<IUser>('age', 'number', 'גיל', true, true),
        createColumn<IUser>('email', 'string', 'אימייל', true, true),
        createColumn<IUser>('phone', 'string', 'טלפון', true, true),
        createColumn<IUser>('permission', 'permission', 'הרשאה', true, true),
        createColumn<IUser>('isActive', 'boolean', 'פעיל', true, true),
    ]
  };
  


  export const carTableSchema: TableSchema<ICar> = {
    name: 'cars',
    columns: [
        createColumn<ICar>('_id', 'string', "מזהה", false, true  ),
        createColumn<ICar>('license', 'string', 'License', true, true),
        createColumn<ICar>('model', 'string', 'Model', true, true),
        createColumn<ICar>('year', 'number', "שנת ייצור", true, true),
        createColumn<ICar>('color', 'string', 'צבע', true, true),
        createColumn<ICar>('price', 'number', 'מחיר', true, true),
        createColumn<ICar>('isAvailable', 'boolean', 'האם פנוי', true, true),
        createColumn<ICar>('fuelType','T_fuelType', 'סוג הנעה', true, true),
    ]
  };
    //   const userTableSchema: TableSchema = {
  //   name: 'users',
  //   columns: [
  //     { name: 'id', type: 'number', label: 'מזהה', sortable: true, filterable: false },
  //     { name: 'fullName', type: 'string', label: 'שם מלא', sortable: true, filterable: true },
  //     { name: 'email', type: 'string', label: 'אימייל', sortable: true, filterable: true },
  //     { name: 'isActive', type: 'boolean', label: 'פעיל', sortable: true, filterable: true },
  //     { name: 'lastLogin', type: 'date', label: 'כניסה אחרונה', sortable: true, filterable: true }
  //   ]
  // };