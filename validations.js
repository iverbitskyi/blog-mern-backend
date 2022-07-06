import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Неправильний формат пошти').isEmail(),
    body('password', 'Пароль повинен мати мінімум 5 символів').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Неправильний формат пошти').isEmail(),
    body('password', 'Пароль повинен мати мінімум 5 символів').isLength({ min: 5 }),
    body('fullName', 'Вкажіть повне імя').isLength({ min: 3 }),
    body('avatarUrl', 'Невірне посилання на автарку').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введіть заголовок статті').isLength({ min: 3 }).isString(),
    body('text', 'Введіть текст статті').isLength({ min: 3 }).isString(),
    body('tags', 'Неправильний формат тегів').optional().isString(),
    body('imageUrl', 'Неправильне посилання на зображення').optional().isString(),
  ];