export const validateEnv = () => {
   const requiredEnvVars = ["MONGODB_URI", "JWT_SECRET", "PORT", "NODE_ENV"];

   const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

   if (missingEnvVars.length > 0) {
      throw new Error(
         `Missing environment variables in your .env file: ${missingEnvVars.join(
            ", "
         )}`
      );
   }
};
