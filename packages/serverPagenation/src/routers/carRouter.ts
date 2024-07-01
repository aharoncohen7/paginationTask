import { Request, Response, Router } from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
import CreateNewUserRequest from '../dto/user/CreateNewUserRequest'
import { filterData, getTableColumns, sortData } from '../helpers/functions'
import FilterUserRequest from '../dto/user/FilterUserRequest'


const router = Router()

router.get('/get-columns', async (req: Request, res: Response) => {
    try {
        res.send(getTableColumns("cars"))
    }
    catch (err) {
        res.status(400).send(err)
    }
})





export default router