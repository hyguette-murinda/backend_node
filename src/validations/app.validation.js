import Joi from "joi";

// User Validations
const CreateUserSchema = Joi.object({
    fullname: Joi.string().required().min(4).max(50),
    email: Joi.string().email().required().max(40).min(4),
    // mobile: Joi.string().max(15).min(10),
    // gender: Joi.string(),
    password: Joi.string().required().max(16).min(4),
})

const CreateEmpLaptopSchema = Joi.object({
    firstname: Joi.string().required().min(4).max(50),
    lastname: Joi.string().required().min(4).max(50),
    nationalid: Joi.string().required().min(16).max(16),
    mobile: Joi.string().max(15).min(10),
    email: Joi.string().email().required().max(40).min(4),
    department: Joi.string().required().min(4).max(50),
    position: Joi.string().required().min(2).max(50),
    laptopmanu: Joi.string().required().min(4).max(50),
    model: Joi.string().required().min(4).max(50),
    serialnumber: Joi.string().required().min(4).max(50),

})


const UpdateUserSchema = Joi.object({
    fullname: Joi.string().required().min(4).max(50),
    email: Joi.string().email().required().max(40).min(4),
    avatar: Joi.string(),
    coverImage: Joi.string(),
})

const LoginUserSchema = Joi.object({
    email: Joi.string().email().required().max(40).min(4),
    password: Joi.string().required().max(16).min(4),
})

const UpdatePasswordSchema = Joi.object({
    oldPassword: Joi.string().required().max(16).min(4),
    newPassword: Joi.string().required().max(16).min(4),
})

const DeleteUserSchema = Joi.object({
    password: Joi.string().required().max(16).min(4),
})

// Product Validations
const CreateProductSchema = Joi.object({
    supplier: Joi.string().required(),
    weight: Joi.number().required(),
    price: Joi.number().required(),
    dateOfBirth: Joi.number().required(),
    avatarString: Joi.string().required(),
    gender: Joi.string().required(),
    whenImpreganated: Joi.number(),
    status: Joi.string(),
    quantity: Joi.number(),
    sold: Joi.boolean(),
})


const UpdateProductSchema = Joi.object({
    supplier: Joi.string().required(),
    weight: Joi.number().required(),
    price: Joi.number().required(),
    dateOfBirth: Joi.number().required(),
    avatarString: Joi.string(),
    gender: Joi.string().required(),
    whenImpreganated: Joi.number(),
    status: Joi.string(),
    sold: Joi.boolean(),
})




export { CreateUserSchema, CreateEmpLaptopSchema ,
    UpdateUserSchema, LoginUserSchema, UpdatePasswordSchema,
     DeleteUserSchema, CreateProductSchema, UpdateProductSchema
    }