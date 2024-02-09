import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Events from './components/Events/Events.jsx';
import EventDetails from './components/Events/EventDetails.jsx';
import NewEvent from './components/Events/NewEvent.jsx';
import EditEvent from './components/Events/EditEvent.jsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './components/utils/http.js';
import ViewEditorPage from './components/Events/ViewEditorPage.jsx';
import FullFeaturedCrudGrid from './components/Events/DataTable.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/events" />,
  },
  {
    path: '/events',
    element: <Events />,

    children: [
      {
        path: '/events/new',
        element: <NewEvent />,
      },
    ],
  },  
  {
    path: '/events/:id',
    element: <EventDetails />,
    children: [
      {
        path: '/events/:id/edit',
        element: <EditEvent />,
      },
    ],
  },
  {
    path: '/json-editor',
    element: <ViewEditorPage/>
  },
  {
    path: '/table',
    element: <FullFeaturedCrudGrid/>  
  }
]);


function App() {
  return <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
}

export default App;
