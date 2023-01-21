import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Spinner from './components/loader/Spinner';
import CuteMouse from './components/mouse/CuteMouse';
import router from './pages/Routes';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <CuteMouse />
      <RouterProvider router={router} />
    </Suspense>
  );
}
