import { ObjectId } from "mongodb"
import { Document } from "mongoose"
import PartialDoc from "../unions/T_PartialDoc"
import IItem from "./IItem"


export default interface IUser extends Partial<Pick<Document,PartialDoc>> {
    // _id? : ObjectId | string
    date : Date
    items : IItem[] | ObjectId[]
    user : IUser | ObjectId
}

