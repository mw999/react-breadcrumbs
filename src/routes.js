import { Pizza, EditPizza, Toppings, AnotherRoute } from "./Components/index";

export default [
  { path: "/pizza", name: "Pizza", Component: Pizza },
  { path: "/pizza/:pizzaId", name: "Edit Pizza", Component: EditPizza },
  {
    path: "/pizza/:pizzaId/toppings",
    name: "Pizza Toppings",
    Component: Toppings
  },
  { path: "/another", name: "Another", Component: AnotherRoute },
  { path: "/one", name: "One", Component: AnotherRoute }
];
