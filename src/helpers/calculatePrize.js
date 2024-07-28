export default function calculatePrize(quantity, price) {
    const total = price * quantity;
    return parseFloat(total.toFixed(2));
}
