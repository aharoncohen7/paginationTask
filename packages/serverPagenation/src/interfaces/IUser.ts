import { ObjectId } from "mongodb"
import Permission from "../unions/T_Permission"
import { Document } from "mongoose"
import PartialDoc from "../unions/T_PartialDoc"


export default interface IUser extends Partial<Pick<Document,PartialDoc>> {
    // _id? : ObjectId | string
    fullName : string
    age : number
    email : string
    phone : string
    password? : string
    isActive?: boolean
    permission : Permission
}

