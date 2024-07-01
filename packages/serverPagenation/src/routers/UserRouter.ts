import { Request, Response, Router } from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
import CreateNewUserRequest from '../dto/user/CreateNewUserRequest'
import { filterData, getTableColumns, sortData } from '../helpers/functions'
import FilterUserRequest from '../dto/user/FilterUserRequest'


const router = Router()



// router.get('/get-columns', async (req: Request, res: Response) => {
    
//     try {
//         res.send(getTableColumns("users"))    }
//     catch (err) {
//         res.status(400).send(err)
//     }
// })


router.get('/:email', async (req: Request, res: Response) => {
    try {
        res.send(await UserService.getSingleUser(req.params.email))
    }
    catch (err) {
        res.status(400).send(err)
    }
})


router.post('/', async (req: Request, res: Response) => {
    try {
        // console.log(req.body, '__❤❤____')
        let filter = Mapper<FilterUserRequest>(new FilterUserRequest(), req.body)
        console.log({ filter })
        res.send(await UserService.getAllUsers(filter))
    }
    catch (err) {
        res.status(400).send(err)
    }
})


router.post('/crate', async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        // let newBody =  Mapper<CreateNewUserRequest>(new CreateNewUserRequest(),req.body)
        let newBody = new CreateNewUserRequest(req.body.fullName, req.body.age, req.body.phone, req.body.email)
        console.log({ newBody })
        const user = await UserService.createUser(newBody)
        console.log(user)
        res.send(user)
    }
    catch (err) {
        console.log({ err })
        res.status(400).send(err)
    }
})



export default router