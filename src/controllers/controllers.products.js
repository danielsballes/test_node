import Product from "../models/Product.js";

class ProductsController {
    returnNotFound(req, res) {
        res.status(404);
        res.json({
            status: 404,
            msg: "No se ha encontrado el producto",
            id: req.params.id
        });
    }

    async index(req, res) {
        try {
            const products = await Product.findAll();

            res.status(200);
            res.json({
                status: 200,
                msg: "Se han encontrado los productos",
                products
            });
        } catch (error) {
            res.status(500);
            res.json({
                status: 500,
                msg: "Error al crear el producto",
                errors: error.message
            });
        }
    }

    async view(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);

            if (product === null) {
                this.returnNotFound(req, res);
            }

            res.status(200);
            res.json(product.dataValues);
        } catch (error) {
            res.status(500);
            res.json({
                status: 500,
                msg: "Error al crear el producto",
                errors: error.message
            });
        }
    }

    async store(req, res) {
        try {
            const {
                name,
                reference,
                price,
                weight,
                category,
                stock
            } = req.body;

            const product = await Product.create({
                name,
                reference,
                price,
                weight,
                category,
                stock
            });

            res.status(201);
            res.json({
                status: 201,
                msg: "Se han creado el producto",
                id: product.dataValues.id
            });
        } catch (error) {
            if (error?.errors) {
                res.status(400);
                res.json({
                    status: 400,
                    msg: "Error al crear el producto",
                    errors: error.errors
                });
            }

            res.status(500);
            res.json({
                status: 500,
                msg: "Error al crear el producto",
                errors: error.message
            });
        }
    }

    async update(req, res) {
        try {
            const {
                name,
                reference,
                price,
                weight,
                category,
                stock
            } = req.body;

            const product = await Product.findByPk(req.params.id);
            if (product === null) {
                this.returnNotFound(req, res);
            }
            product.name = name;
            product.reference = reference;
            product.price = price;
            product.weight = weight;
            product.category = category;
            product.stock = stock;
            await product.save();

            res.status(200);
            res.json({
                status: 200,
                msg: "Se ha actualizado el producto",
                id: product.dataValues.id
            });
        } catch (error) {
            if (error?.errors) {
                res.status(400);
                res.json({
                    status: 400,
                    msg: "Error al crear el producto",
                    errors: error.errors
                });
            }

            res.status(500);
            res.json({
                status: 500,
                msg: "Error al actualizar el producto",
                errors: error.message
            });
        }
    }

    async delete(req, res) {
        try {
            const product = await Product.findByPk(req.params.id);

            if (product === null) {
                this.returnNotFound(req, res);
            }

            await Product.destroy({
                where: {
                    id: req.params.id
                }
            });

            res.status(200);
            res.json({
                status: 200,
                msg: "Se ha eliminado el producto",
                id: req.params.id
            });
        } catch (error) {
            res.status(500);
            res.json({
                status: 500,
                msg: "Error al eliminar el producto",
                errors: error.message
            });
        }
    }
}

export default ProductsController;