import App from './App';
import About from './components/About';
import Home from './components/Home';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: 'todo -- experinece' },
      { path: 'projects', element: 'todo -- projects' },
    ],
  },
];

export default routes;
