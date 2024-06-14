import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <h1>Home page</h1> },
      { path: 'test', element: <h1>Test page</h1> },
    ],
  },
];

export default routes;
