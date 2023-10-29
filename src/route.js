import { Navigate, useRoutes } from 'react-router-dom';
import MiniDrawer from './pages/DashboardPage';
import ProductList from './Section/ProductList';
import AddText from './Section/AddText';
import UploadImage from './Section/UploadImage';
import Art from './Section/Art';

export default function Router() {

  const routes = useRoutes([
    {
      path: '/',
      element: <MiniDrawer/>,
      children: [
        {path:"/products", element:<ProductList/>},
        {path:"/products", element:<AddText/>},
        {path:"/products", element:<UploadImage/>},
        {path:"/products", element:<Art/>},
      ],
    },
  ]);

  return routes;
}
