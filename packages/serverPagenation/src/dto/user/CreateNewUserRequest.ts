class CreateNewUserRequest {
    fullName: string
    age: number
    email: string
    isRemeber: boolean
    phone: string


    constructor(fullName = '', age = 0, phone = '', email = '', isRemeber: boolean = false) {
        this.fullName = fullName
        this.age = age
        this.email = email
        this.isRemeber = isRemeber
        this.phone = phone
    }
}

export default CreateNewUserRequest