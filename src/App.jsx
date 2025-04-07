import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import BeautyPage from "./pages/BeautyPage";
import CarsPage from "./pages/CarsPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";


// Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/beauty" element={<BeautyPage />} />
      <Route path="/cars" element={<CarsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
