import { Router } from "express";
import ProductsController from "../controllers/controllers.products.js";

class Routes {
    constructor() {
        const productController = new ProductsController();

        this.routes = Router();

        this.routes.get('/products', productController.index.bind(productController));
        this.routes.post('/products', productController.store.bind(productController));
        this.routes.put('/products/:id', productController.update.bind(productController));
        this.routes.delete('/products/:id', productController.delete.bind(productController));
        this.routes.get('/products/:id', productController.view.bind(productController));
    }
}

const router = new Routes();

export default router.routes;