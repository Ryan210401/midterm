import { getProductList } from "../server/product.js";

export const getListProduct = async (req, res) => {
    const {id} = req.params
    try {
        const productList = await getProductList(parseInt(id));

        if(productList.length === 0) {
            return res.status(404).json({
                message: 'Failed to fecth the product',
                error: `product list with video id ${id} not found`
            });
        }

        res.status(200).json({
            message: 'Success to fetch the product',
            name: productList
        });
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
}