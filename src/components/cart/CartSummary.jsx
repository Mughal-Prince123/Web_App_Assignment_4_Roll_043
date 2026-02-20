import Button from '../common/Button';

const CartSummary = ({ total }) => {
  const shipping = total > 100 ? 0 : 15;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 sticky top-24">
      <h2 className="text-xl font-bold mb-6">Order Summary</h2>
      <div className="space-y-4 text-gray-600">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="border-t pt-4 flex justify-between text-xl font-bold text-gray-900">
          <span>Total</span>
          <span>${(total + shipping).toFixed(2)}</span>
        </div>
      </div>
      <Button className="w-full mt-8 py-3 bg-green-600 hover:bg-green-700">
        Proceed to Checkout
      </Button>
      {shipping > 0 && (
        <p className="text-xs text-center mt-4 text-gray-400">
          Spend ${(100 - total).toFixed(2)} more for FREE shipping!
        </p>
      )}
    </div>
  );
};
export default CartSummary;