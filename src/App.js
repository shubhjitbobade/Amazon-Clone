import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from './pages/Home'
import {
      createBrowserRouter,
      createRoutesFromElements,
      Outlet,
      Route,
      RouterProvider,
} from 'react-router-dom';

    const Layout=()=>{
         return(
           <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
         )
        }

function App() {
  const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />}></Route>
    </Route>
  ))
  return (
    <div className="App font-bodyFont">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
