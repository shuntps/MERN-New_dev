import connectDB from "./connectDB.js";

const PORT = process.env.PORT;

const startServer = async (app) => {
   try {
      if (!PORT) {
         console.error("Environment variable PORT is not defined.");
         process.exit(1);
      }

      await connectDB();
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   } catch (error) {
      console.error(`Failed to start the server: ${error.message}`);
      process.exit(1);
   }
};

export default startServer;
