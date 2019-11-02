import React from "react";

export default [
  { path: "/pizza", name: "Pizza", Component: () => <h1>1</h1> },
  { path: "/pizza/:pizzaId", name: "Edit Pizza", Component: () => <h1>2</h1> },
  {
    path: "/pizza/:pizzaId/toppings",
    name: "Pizza Toppings",
    Component: () => <h1>3</h1>
  }
];
