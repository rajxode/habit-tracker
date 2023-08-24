
// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// importing all the required components and pages
// navbar 
import Navbar from "./Component/Navbar";
// the main homepage
import Homepage from "./Pages/Homepage";
// details page for showing habit stats
import DetailsPage from "./Pages/DetailsPage";
// error page in case of error
import { Error } from "./Pages/Error";


// to render the habit tracker app
function App() {

  // defining different routes 
  const router = createBrowserRouter([
    {
      // default path 
      path:"/",
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        // to render the homepage
        {index:true, element: <Homepage />},
        // for rendering the detailspage
        {path:"/detailspage", element: <DetailsPage />},
      ]
    }
  ]);


  return (
    // rendering the page based on routes
    <RouterProvider router={router} />
  );
}

// export the component
export default App;
