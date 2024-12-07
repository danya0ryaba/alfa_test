import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Card } from "./pages/Card";
import { CreateProduct } from "./pages/CreateProduct";
import { Error } from "./pages/Error";
import React from "react";
import { useUsersStore } from "./store/store";

function App() {

  const fetchUsers = useUsersStore(state => state.fetchUsers);

  React.useEffect(() => {
    fetchUsers();
  }, [])

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<Card />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App
