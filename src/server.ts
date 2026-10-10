import express from 'express';
import { serverConfig } from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';
import { appErrorHandler, genericErrorHandler } from './middlewares/error.middleware';
import logger from './config/logger.config';
import { attachCorrelationIdMiddleware } from './middlewares/correlation.middleware';
import sequelize from './db/models/sequelize';
// import Hotel from './db/models/hotel';
const app = express();

app.use(express.json());

/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use(attachCorrelationIdMiddleware);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router); 


/**
 * Add the error handler middleware
 */

app.use(appErrorHandler);
app.use(genericErrorHandler);


app.listen(serverConfig.PORT, async() => {
    logger.info(`Server is running on http://localhost:${serverConfig.PORT}`);
    logger.info(`Press Ctrl+C to stop the server.`);

    //   try {
    await sequelize.authenticate();
      logger.info("Database connection established successfully.");
    /*

    2. What does authenticate() do?
await sequelize.authenticate();


It attempts to connect to MySQL and verifies that the connection works.
- If the connection succeeds, the promise resolves and your code continues.
- If the connection fails, it throws an error. For example, your password might be incorrect or MySQL might not be running.
    



    // const hotel = await Hotel.create({
       
    //   name: "oberoi",
    //   location: "india",
    //   rating: 5,
    //   Price: 23030,
    // });
    // const hotels=await Hotel.findAll();
    // logger.info("all Hotels",hotels);
 const count = await Hotel.count();

logger.info(`what is count: ${count}`);

    // console.log(hotel.toJSON());
  } catch (error) {
    console.error("Database operation failed:", error);
  }
*/
});







