import React from "react";

const Order = ({ orderItems, updateOrder, removeFromOrder }) => {
  const getTotalPrice = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleUpdateOrder = (itemId, change) => {
    const item = orderItems.find((item) => item.id === itemId);
    if (item) {
      updateOrder(itemId, change);

      if (item.quantity + change <= 0) {
        removeFromOrder(itemId);
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Order</h2>
      {orderItems.length === 0 ? (
        <p>No items in your order yet.</p>
      ) : (
        <div>
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="d-flex justify-content-between align-items-center mb-0 p-3 border rounded-3 bg-white"
              style={{ color: "black" }}
            >
              {/* Item Name and Quantity */}
              <div className="d-flex align-items-center">
                <span>{item.name}</span>
                <span className="ms-1">x{item.quantity}</span>{" "}
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => handleUpdateOrder(item.id, -1)}
                >
                  -
                </button>
                <button
                  className="btn btn-success btn-sm mx-1"
                  onClick={() => handleUpdateOrder(item.id, 1)}
                >
                  +
                </button>
              </div>

              {/* Item Price */}
              <div className="d-flex align-items-center">
                <span>{(item.price * item.quantity).toFixed(2)} SEK</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <hr />
      <div className="d-flex justify-content-between">
        <h4>Total:</h4>
        <h4>{getTotalPrice().toFixed(2)} SEK</h4>
      </div>
    </div>
  );
};

export default Order;
