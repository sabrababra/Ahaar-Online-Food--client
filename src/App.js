import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Route';

function App() {
  return (
    <div className=' max-w-[1440px] mx-auto '>
   <RouterProvider router={router} ></RouterProvider>
 
    </div>
  );
}

export default App;
