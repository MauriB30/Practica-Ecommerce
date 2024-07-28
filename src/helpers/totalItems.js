export default function totalItems(items) {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    return total;
}
