import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Неправильний формат пошти').isEmail(),
    body('password', 'Пароль повинен мати мінімум 5 символів').isLength({ min: 5 }),
    body('fullName', 'Вкажіть повне імя').isLength({ min: 3 }),
    body('avatarUrl', 'Невірне посилання на автарку').optional().isURL(),
];