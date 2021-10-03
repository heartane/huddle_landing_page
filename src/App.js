import { ThemeProvider } from "styled-components";
import Box from "./components/Box";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/utils/Container";
import { GlobalStyles } from "./components/styles/utils/Global";
import contents from "./contents/contents";

const theme = {
  colors: {
    header: "hsl(193, 100%, 96%)",
    body: "#fff",
    footer: "hsl(192, 100%, 9%)",
  },
  mobile: "768px",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {contents.body.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Container>
        <Box />
        <Footer />
      </>
    </ThemeProvider>
  );
}
