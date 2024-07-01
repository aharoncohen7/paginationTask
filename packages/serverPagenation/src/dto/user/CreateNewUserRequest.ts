class CreateNewUserRequest {
    fullName: string
    age: number
    email: string
    phone: string


    constructor(fullName = '', age = 0, phone = '', email = '') {
        this.fullName = fullName
        this.age = age
        this.email = email
        this.phone = phone
    }
}

export default CreateNewUserRequest