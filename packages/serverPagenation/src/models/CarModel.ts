import mongoose from 'mongoose'
import ICar from '../interfaces/ICar'
// import T_fuelType from '../unions/T_fuelType'

type T_fuelType =  'petrol' | 'diesel' | 'electric' | 'hybrid'

const carSchema = new mongoose.Schema<ICar>({

    license:{
        type: String,
        required: true,
        unique: true,
        // match: /^[A-Z]{2}-\d{3}-\d{3}$/i,
        // message: 'License number is not in the correct format (e.g. AA-123-456)'
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
   
    price: {
        type: Number,
        required: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    fuelType: {
        type: String,
        enum: ['petrol', 'diesel' , 'electric' , 'hybrid'],
        default: 'petrol'
    },
  
})

export default mongoose.model<ICar>('car', carSchema)

