export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
import { ShoppingCartProvider } from "../src/context/ShoppingCartContext";
import { MemoryRouter } from "react-router";
export const decorators = [
  (Story) => (
    <ShoppingCartProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    </ShoppingCartProvider>
  ),
];
// import React, { useReducer, createContext } from "react";
// import { initialState } from "../../App";

// export const BoxContext = createContext();

// export const ContextDecorator = (props) => {
//   return <ShoppingCartProvider>{props.children}</ShoppingCartProvider>;
// };

//   (Story) => (
//     <MemoryRouter initialEntries={["/"]}>
//       <Story />
//     </MemoryRouter>
//   ),
// ];
