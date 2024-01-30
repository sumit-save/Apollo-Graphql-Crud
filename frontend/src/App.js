import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./configs/apollo-client";
import CardPage from "./pages/Character/CardPage";
import AddPage from "./pages/Character/AddPage";
import EditPage from "./pages/Character/EditPage";
import ViewPage from "./pages/Character/ViewPage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<CardPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:_id" element={<EditPage />} />
          <Route path="/view/:_id" element={<ViewPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
};

export default App;
