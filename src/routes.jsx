import App from './App';
import About from './components/About';
import Experience from './components/Experience';
import Home from './components/Home';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: 'Coming soon!' },
    ],
  },
];

export default routes;
