import ApplicationsController from "../controller/ApplicationsController";
import fileController from "../controller/FileController";

export default (server) => {

    // POST ROUTES
    server.post(`/api/file/upload`, fileController.uploadFile);
    server.post('/api/create',ApplicationsController.create);
    server.get('/api/getDataById',ApplicationsController.getDataById);
  }