import { ObjectId } from "mongodb"
import { Document } from "mongoose"
import PartialDoc from "../unions/T_PartialDoc"
import T_fuelType from "../unions/T_fuelType";


export default interface ICar extends Partial<Pick<Document,PartialDoc>> {
    // _id? : ObjectId | string
    license: string;
    model: string;
    year: number;
    color: string;
    price: number;
    fuelType: T_fuelType ;
    isAvailable: boolean;

}

