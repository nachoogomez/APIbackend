import { Router } from "express";
import { createUser, loginUser } from "../controllers/controllers.js";
import { check } from "express-validator";

const router = Router();

router.post("/register",
[
    check('user', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
], 
createUser
);
router.post("/login",
    [
        check("email", "El mail es obligatorio").not().isEmpty(),
        check("email", "El mail no es válido").isEmail(),
        check("password", "El password debe ser de 6 caracteres minimo").isEmpty()
    ], 
loginUser);

export default router;