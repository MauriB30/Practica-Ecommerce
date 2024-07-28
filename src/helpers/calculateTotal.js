export default function calculateTotal(products) {
  const totalProducts = products.reduce((total, product) => total + product.quantity, 0);
  const totalPrice = products.reduce((total, product) => total + product.quantity * product.price, 0);
  return { totalProducts, totalPrice: parseFloat(totalPrice.toFixed(2)) };
}
