import React, { useState } from "react";
import Menu from "./components/Menu";
import Order from "./components/Order";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [order, setOrder] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Burger",
      description: "A delicious beef burger.",
      price: 79,
      image: "burger.jpg",
    },
    {
      id: 2,
      name: "Fries",
      description: "Crispy golden fries served hot and fresh.",
      price: 29,
      image: "fries.jpg",
    },
    {
      id: 3,
      name: "Pizza",
      description: "Pepperoni pizza with extra cheese.",
      price: 129,
      image: "pizza.jpg",
    },
  ];

  const addToOrder = (item) => {
    const existingItem = order.find((orderItem) => orderItem.id === item.id);
    if (existingItem) {
      setOrder(
        order.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrder([...order, { ...item, quantity: 1 }]);
    }
  };

  const updateOrder = (id, quantityChange) => {
    setOrder(
      order.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + quantityChange, 1) }
          : item
      )
    );
  };

  const removeFromOrder = (id) => {
    setOrder(order.filter((item) => item.id !== id));
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={isDarkMode ? "bg-dark text-white" : "bg-light text-dark"}
      style={{ minHeight: "100vh" }}
    >
      <div className="container" style={{ flexGrow: 1 }}>
        <Menu menuItems={menuItems} addToOrder={addToOrder} />
        <Order
          orderItems={order}
          updateOrder={updateOrder}
          removeFromOrder={removeFromOrder}
        />
        <ThemeToggle toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default App;
