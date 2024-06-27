import { FilterQuery, Model } from "mongoose";

export default class AdvancedController<T> {
    model: Model<T>
    constructor(model: Model<T>) {
        this.model = model
    }

    read2(): Promise<T[]>
    read2(filter: FilterQuery<T>): Promise<T[]>
    read2(filter: FilterQuery<T>, pop: string): Promise<T[]>
    read2(filter: FilterQuery<T>, pop: string, select: string): Promise<T[]>
    read2(filter: FilterQuery<T>, pop: string, select: number): Promise<T[]>

    async read2(filter?: FilterQuery<T>, pop?: string, select?: string | number) {
        let user = this.model.find()
        if (filter) user = user.find(filter)
        if (pop) user = user.populate(pop)
        if (select) {
            user = user.select(select.toString())
        }
        return await user.exec()
    }
}