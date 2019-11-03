import routes from "./routes";

test("correct routes are exported", () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
