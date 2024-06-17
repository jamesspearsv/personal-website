import App from './App';
import Home from './components/Home';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: 'todo -- about' },
      { path: 'experience', element: 'todo -- experinece' },
      { path: 'projects', element: 'todo -- projects' },
    ],
  },
];

export default routes;
