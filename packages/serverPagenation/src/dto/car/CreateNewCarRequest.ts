import T_fuelType from "../../unions/T_fuelType";


class CreateNewCarRequest {
    license: string;
    model: string;
    year: number;
    color: string;
    price: number;
    fuelType: T_fuelType;
    isAvailable: boolean;

    constructor(license = '', model = '',  year = 1990, color = '', price =0, fuelType: T_fuelType ='petrol', isAvailable = true) {
        this.license = license
        this.model = model
        this.color = color
        this.year = year
        this.price = price
        this.fuelType = fuelType
        this.isAvailable = isAvailable
    }
}

export default CreateNewCarRequest