import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProductPreview from "./components/ProductPreview";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./pages/AdminDashboard";
import CartPage from "./pages/CartPage";
import CategoryPage from "./pages/CategoryPage";
import EditProductPage from "./pages/EditProductPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import OrdersPage from "./pages/Orders";
import ProductPage from "./pages/ProductPage";
import Signup from "./pages/Signup";
import { io } from "socket.io-client";
import { addNotifications } from "./features/userSlice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const socket = io("ws://localhost:5000");
    socket.off("notification").on("notification", (msgObject, user_id) => {
      //logic for notification
      if (user_id === user._id) {
        dispatch(addNotifications(msgObject));
      }
    });

    socket.off("new-order").on("new-order", (msgObj) => {
      if (user.isAdmin) {
        dispatch(addNotifications(msgObj));
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          {user && (
            <>
              <Route path="/cart/" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </>
          )}

          {user && user.isAdmin && (
            <>
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/product/:id/edit" element={<EditProductPage />} />
            </>
          )}
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
