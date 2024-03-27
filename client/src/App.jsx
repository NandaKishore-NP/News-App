import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ExploreView,Error,PostView,CreatePostView,MessengerView,SearchView,ProfileView,LoginView,SignupView} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExploreView />,
    errorElement: <Error />,
    children: [
  {
    path: "/posts/:id",
    element: <PostView />,
  },
  {
    path: "/posts/create",
    element: (
     
        <CreatePostView />
     
    ),
  },
  {
    path: "/messenger",
    element: (
      
        <MessengerView />
      
    ),
  },
  {
    path: "/search",
    element: <SearchView />,
  },
  {
    path: "/users/:id",
    element: <ProfileView />,
  },
  {
    path: "/login",
    element: <LoginView />,
  },
  {
    path: "/signup",
    element: <SignupView />,
  },
],
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
