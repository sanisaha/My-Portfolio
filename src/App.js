import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './Routes/Route';

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
