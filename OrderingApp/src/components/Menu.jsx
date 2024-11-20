import React from "react";

const Menu = ({ menuItems, addToOrder }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Fast Food Menu</h1>
      <div className="row">
        {menuItems.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card" style={{ height: "100%" }}>
              <img
                src={`/images/${item.image}`}
                alt={item.name}
                className="card-img-top"
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price} SEK</p>
                <button
                  className="btn btn-primary"
                  onClick={() => addToOrder(item)}
                >
                  Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
