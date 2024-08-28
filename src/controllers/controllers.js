import { User } from "../models/user.js";
import bycrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const createUser = async (req = request, res = response) => {
   const {user, password, email} = req.body;

   const newUser = await User.create({
         user,
         password,
         email
    });

    const salt = bycrypt.genSaltSync();
    newUser.password = bycrypt.hashSync(password, salt);

    await newUser.save();

    console.log(newUser);
    res.status(201).json({
        message: 'User created',
        user: newUser
    });    
}

export const loginUser = async (req = request, res = response) => {
    const {email, password} = req.body;

    try{
        const user = await User.findOne({where: {email}});

        if(!user){
            return res.status(400).json({
                message: 'Usuario no encontrado'
            });
        }

        const validPassword = bycrypt.compareSync(password, user.password);

        if (!validPassword){
            return res.status(400).json({
                message: 'Contraseña incorrecta'
            });
        }

        //toker
        const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });


        res.status(202).json({
            message: 'Login correcto',
            user, 
            token,
        });
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor'
    });
}
}

