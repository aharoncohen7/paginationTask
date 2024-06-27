import { SaveOptions, Document } from "mongoose";
import UserController from "../controller/UserController";
import IUser from "../interfaces/IUser";
import CreateNewUserRequest from "../dto/user/CreateNewUserRequest";
import FilterUserRequest from "../dto/user/FilterUserRequest";

class UserService {
    private static controller: UserController = new UserController()

    static getAllUsers(filter:FilterUserRequest) {
        return this.controller.read(filter);
    }

    static async getSingleUser(email: string) {
        return await this.controller.readOne({ email })
    }

    static async createUser(body: CreateNewUserRequest) {
        let oldUser = await this.getSingleUser(body.email)
        if (oldUser) throw new Error("user is exist")

        let nUser: IUser = {
            fullName: body.fullName,
            age: body.age,
            email: body.email,
            phone: body.phone,
            permission: "user",
            password: String(Math.random() * 100 * 100),
        }
        

        let newUser = await this.controller.create(nUser)
        if (newUser.save) newUser.save()

        return newUser
    }
}

export default UserService