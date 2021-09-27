import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { GlobalStyles } from "./components/styles/utils/Global";

const theme = {
  colors: {
    header: "hsl(193, 100%, 96%)",
    body: "#fff",
    footer: "hsl(208, 11%, 55%)",
  },
  mobile: "768px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
}
