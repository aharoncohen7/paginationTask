import ICar from "../interfaces/ICar";
import IColumnDefinition from "../interfaces/IColumnDefinition";
import IUser from "../interfaces/IUser";
import TableSchema from "../unions/T_TableSchema";
import ColumnType from "../unions/T_columnType";

function createColumn<T>(
    key: keyof T, 
    type: ColumnType, 
    label: string, 
  ): IColumnDefinition<T> {
    return { key, type, label };
  }
  
  
  export const userTableSchema: TableSchema<IUser> = {
    name: 'users',
    columns: [
        createColumn<IUser>('_id', 'string', "מזהה"),
        createColumn<IUser>('fullName', 'string', 'שם מלא'),
        createColumn<IUser>('age', 'number', 'גיל'),
        createColumn<IUser>('email', 'string', 'אימייל'),
        createColumn<IUser>('phone', 'string', 'טלפון'),
        createColumn<IUser>('permission', 'permission', 'הרשאה'),
        createColumn<IUser>('isActive', 'boolean', 'פעיל'),
    ]
  };

    // const userTableSchema: TableSchema = {
  //   name: 'users',
  //   columns: [
  //     { name: 'id', type: 'number', label: 'מזהה', sortable: true, filterable: false },
  //     { name: 'fullName', type: 'string', label: 'שם מלא', sortable: true, filterable: true },
  //     { name: 'email', type: 'string', label: 'אימייל', sortable: true, filterable: true },
  //     { name: 'isActive', type: 'boolean', label: 'פעיל', sortable: true, filterable: true },
  //     { name: 'lastLogin', type: 'date', label: 'כניסה אחרונה', sortable: true, filterable: true }
  //   ]
  // };
  


    
  export const carTableSchema: TableSchema<ICar> = {
    name: 'cars',
    columns: [
      
        createColumn<ICar>('_id', 'string', "מזהה"),
        createColumn<ICar>('license', 'string', 'License'),
        createColumn<ICar>('model', 'string', 'Model'),
        createColumn<ICar>('year', 'number', "שנת ייצור"),
        createColumn<ICar>('color', 'string', 'צבע'),
        createColumn<ICar>('price', 'number', 'מחיר'),
        createColumn<ICar>('fuelType','T_fuelType', 'סוג דלק'),
        createColumn<ICar>('isAvailable', 'boolean', 'האם פנוי'),
    ]
  };
