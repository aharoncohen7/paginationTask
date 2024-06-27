import { Request, Response, Router } from 'express'
import UserService from '../services/UserService'
import { Mapper } from '../helpers/Mapper'
import CreateNewUserRequest from '../dto/user/CreateNewUserRequest'
import { filterData, sortData } from '../helpers/functions'
import FilterUserRequest from '../dto/user/FilterUserRequest'


const router = Router()

// CRUD : all users, signle user, create user, update user
router.post('/', async (req: Request, res: Response) => {
    try {
        console.log(req.body, '__❤❤____')
        let filter = Mapper<FilterUserRequest>(new FilterUserRequest(), req.body)
      
        res.send(await UserService.getAllUsers(filter))
        // res.send(new UserService().getAllUsers())
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// CRUD : all users, signle user, create user, update user
router.get('/:email', async (req: Request, res: Response) => {
    try {
        res.send(await UserService.getSingleUser(req.params.email))
        // res.send(new UserService().getAllUsers())
    }
    catch (err) {
        res.status(400).send(err)
    }
})


router.post('/craete', async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        // let newBody =  Mapper<CreateNewUserRequest>(new CreateNewUserRequest(),req.body)
        let newBody = new CreateNewUserRequest(req.body.fullName, req.body.age, req.body.phone, req.body.email, req.body.isRemeber)
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