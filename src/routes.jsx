import App from './App';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Error404 from './components/Error404';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
    ],
    errorElement: <Error404 />,
  },
];

export default routes;
