import { createBrowserRouter } from 'react-router-dom';
import Error from './Error';
import Layout from '../components/layouts/Layout';
import Home from './Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
]);

export default router;
