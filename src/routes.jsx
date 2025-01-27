import App from './App';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';
import Projects from './pages/projects/Projects';
import Error from './components/Error';
import Blog from './pages/blog/blog';
import { element } from 'prop-types';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'blog/:postName?', element: <Blog /> },
    ],
    errorElement: <Error />,
  },
];

export default routes;
