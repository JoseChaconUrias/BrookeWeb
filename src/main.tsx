import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import { Home } from './_roots/pages';
import Research from './_roots/pages/Research';

const router = createBrowserRouter([
    {
        path:"/BrookeWeb/",
        element: <App />,
        children: [
            {
                path: "/BrookeWeb/",
                element: <Home />
            },
            {
                path: "/BrookeWeb/",
                element: <Research />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <RouterProvider router={router} />
    </BrowserRouter>
)