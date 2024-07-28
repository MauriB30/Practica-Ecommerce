export default function filterProducts(products,category,term) {

  if (category) {
    const newProducts = products.filter(
        product => product.category === category
    );
    return newProducts;
  }

  if (term) {
    const newProducts = products.filter(product => product.title.toLowerCase().includes(term.toLowerCase()));
    return newProducts
  }

  return products
}

