import { createHashRouter } from 'react-router-dom';
import Error from './Error';
import Layout from '../components/layouts/Layout';
import Home from './Home';
import Story from './Story';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: '/story',
    element: (
      <Layout>
        <Story />
      </Layout>
    ),
    errorElement: <Error />,
  },
]);

export default router;
