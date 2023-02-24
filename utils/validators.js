import { check, validationResult } from "express-validator";
export const signUpValidator = [
  check("firstName").trim().notEmpty().withMessage("Enter your first name"),
  check("lastName").trim().notEmpty().withMessage("Enter your last name"),
  check("email").trim().notEmpty().withMessage("Invalid email address"),
  check("password")
    .trim()
    .notEmpty()
    .withMessage("Enter your password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters"),
];
// export const signUpValidationResult = (req, res, next) => {
//   const result = validationResult(req).array();
//   if (!result.length) return next();
//   res.json(new Error(result));
// };
