import React from "react";
import { Link } from "react-router-dom";

const toppings = [
  { id: "1", name: "Cheese" },
  { id: "2", name: "Pepperoni" },
  { id: "3", name: "Ham" },
  { id: "4", name: "Pineapple" }
];

const pizza = [
  { id: "1", name: "Pepperoni", toppings: [toppings[0], toppings[1]] },
  { id: "2", name: "Cheese", toppings: [toppings[0]] },
  { id: "3", name: "Ham and Pineapple", toppings: [...toppings.slice(2)] }
];

const Pizza = () => (
  <div>
    <h1 className="bold text-6xl">List Of Pizza</h1>
    <ul>
      {pizza.map(({ id, name }) => (
        <li className="underline text-blue-500" key={id}>
          <Link to={`pizza/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const EditPizza = ({
  match: {
    params: { pizzaId }
  }
}) => (
  <div>
    <h1 className="bold text-6xl">
      Edit Pizza: {pizza.find(({ id }) => id === pizzaId).name}
    </h1>
    <Link className="underline text-blue-500" to=`{/pizza/${pizzaId}/toppings`}>
      View Toppings
    </Link>
  </div>
);

const Toppings = ({
  match: {
    params: { pizzaId }
  }
}) => (
  <div>
    <h1 className="bold text-6xl">
      Toppings for {pizza.find(({ id }) => id === pizzaId).name}
    </h1>
    <ul>
      {pizza
        .find(({ id }) => id === pizzaId)
        .toppings.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
    </ul>
  </div>
);

const AnotherRoute = () => <h1>Another One</h1>;

export { Pizza, EditPizza, Toppings, AnotherRoute };
