import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: 'todo -- home' },
      { path: 'about', element: 'todo -- about' },
      { path: 'experience', element: 'todo -- experinece' },
      { path: 'projects', element: 'todo -- projects' },
    ],
  },
];

export default routes;
