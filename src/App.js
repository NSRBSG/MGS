import { RouterProvider } from 'react-router-dom';
import CuteMouse from './components/pointer/CuteMouse';
import router from './pages/Routes';
import GlobalStyle from './styles/GlobalStyle';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <CuteMouse />
      <RouterProvider router={router} />
    </>
  );
}
