import { SaveOptions, Document } from "mongoose";
import CarController from "../controller/CarController";
import ICar from "../interfaces/ICar";
import CreateNewCarRequest from "../dto/car/CreateNewCarRequest";
import FilterCarRequest from "../dto/car/FilterCarRequest";

class CarServices {
    private static controller: CarController = new CarController()

    static getAllCars(filter: FilterCarRequest) {
        return this.controller.read(filter);
    }

    static async getSingleCar(license: string) {
        return await this.controller.readOne({ license })
    }

    static async createCar(body: CreateNewCarRequest) {
        let oldCar = await this.getSingleCar(body.license)
        if (oldCar) throw new Error("car is exist")

        let nCar: ICar = {
            license:  body.license,
            model:  body.model,
            year:  body.year,
            color:  body.color,
            price:  body.price,
            fuelType:  body.fuelType, 
            isAvailable:  body.isAvailable,
            
        }


        let newCar = await this.controller.create(nCar)
        if (newCar.save) newCar.save()

        return newCar
    }
}

export default CarServices