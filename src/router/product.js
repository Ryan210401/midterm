import express from 'express';
import {getListProduct} from './handler/product.js';

const productRoute = express.Router();

productRoute.get('/:id', getListProduct);

export default productRoute;

