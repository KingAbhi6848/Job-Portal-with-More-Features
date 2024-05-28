import multer from 'multer';

// Configure storage settings for multer
const storageFile = multer.diskStorage({
    // Specify the destination directory for uploaded files
    destination: (req, file, cb) => {
        cb(null, 'public/images'); // Set the upload directory to 'public/images'
    },
    // Define the filename format for uploaded files
    filename: (req, file, cb) => {
        // Create a unique filename using the current timestamp and the original file name
        const name = Date.now() + '-' + file.originalname;
        cb(null, name); // Set the filename to the generated name
    }
});

// Create a multer instance with the defined storage settings
export const fileUpload = multer({ storage: storageFile });
