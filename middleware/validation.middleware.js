import { body,validationResult } from "express-validator";

// Validation rules for job seeker application form
export const applicationValidationRules = () => {
    return [
        // Full name validation
        body('name')
            .trim()
            .notEmpty()
            .withMessage('Full name is required'),

        // Email validation
        body('email')
            .trim()
            .isEmail()
            .withMessage('Invalid email address'),

        // Resume validation (optional)
        body('resume')
            .custom((value, { req }) => {
                // Check if a file is uploaded
                if (!req.files || !req.files.resume) {
                    return true; // No file uploaded, validation passes
                }
                // Check file type (example: allow only PDF)
                const allowedTypes = ['application/pdf'];
                if (!allowedTypes.includes(req.files.resume.mimetype)) {
                    throw new Error('Only PDF files are allowed for resume');
                }
                // Check file size (example: limit to 5 MB)
                if (req.files.resume.size > 5 * 1024 * 1024) {
                    throw new Error('Resume file size exceeds 5 MB limit');
                }
                return true; // Validation passes
            })
    ];
};

// Validation rules for recruiter registration form
export const recruiterValidationRules = () => {
    return [
        // First name validation
        body('firstName')
            .trim()
            .notEmpty()
            .withMessage('First name is required'),

        // Last name validation
        body('lastName')
            .trim()
            .notEmpty()
            .withMessage('Last name is required'),

        // Email validation
        body('email')
            .trim()
            .isEmail()
            .withMessage('Invalid email address'),

        // Phone number validation
        body('phone')
            .trim()
            .isMobilePhone()
            .withMessage('Invalid phone number'),

        // Password validation
        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password is required')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long')
    ];
};

// Middleware to handle validation errors
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    // If there are validation errors, return 400 status with errors

    return res.status(400).render('errors',{ errors: errors.array() });
};


