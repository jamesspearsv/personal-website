import App from './App';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [{ path: 'test', element: <h1>Test page</h1> }],
  },
];

export default routes;
