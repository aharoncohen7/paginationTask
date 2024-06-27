import { FilterQuery, UpdateQuery } from "mongoose";
import IController from "../interfaces/IController";
import IItem from "../interfaces/IItem";

class ItemController implements IController<IItem> {
    create(data: IItem): Promise<IItem> {
        throw new Error("Method not implemented.");
    }
    read(filter: FilterQuery<IItem>): Promise<{ items: IItem[], count: number }> {
        throw new Error("Method not implemented.");
    }
    readOne(filter: FilterQuery<IItem>): Promise<IItem | null> {
        throw new Error("Method not implemented.");
    }
    update(filter: FilterQuery<IItem>, newData: UpdateQuery<IItem>): IItem {
        throw new Error("Method not implemented.");
    }
    del(filter: FilterQuery<IItem>): boolean {
        throw new Error("Method not implemented.");
    }
}

export default ItemController