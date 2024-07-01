import { Request, Response, Router } from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
import CreateNewUserRequest from '../dto/user/CreateNewUserRequest'
import { filterData, getTableColumns, sortData } from '../helpers/functions'
import FilterUserRequest from '../dto/user/FilterUserRequest'
import FilterCarRequest from '../dto/car/FilterCarRequest'
import CarServices from '../services/CarServices'


const router = Router()



router.post('/', async (req: Request, res: Response) => {
    try {
        console.log(req.body, '__❤❤____')
        let filter = Mapper<FilterCarRequest>(new FilterCarRequest(), req.body)
        console.log({ filter })
        res.send(await CarServices.getAllCars(filter))
    }
    catch (err) {
        res.status(400).send(err)
    }
})


router.get('/get-columns', async (req: Request, res: Response) => {
    try {
        res.send(getTableColumns("cars"))
    }
    catch (err) {
        res.status(400).send(err)
    }
})





export default router