import * as TestController from './controllers/TestController';

export default (app) => {
  app.get('/test', TestController.test);
  app.get('/fail', TestController.fail);
  //
  // error hanlders
  //
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res, next) => {
    console.log(err.stack);

    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err,
    });
    next();
  });
};
