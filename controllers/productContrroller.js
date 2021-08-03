const factory=require('./handlerFactory')

exports.getAllProducts = factory.getAll('product');
exports.getProduct = factory.getOne('product');
exports.createProduct = factory.createOne('product');
exports.updateProduct = factory.updateOne('product');
exports.deleteProduct = factory.deleteOne('product');