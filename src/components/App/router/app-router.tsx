import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from './route-config';
// import { PageLoader } from 'widgets/PageLoader/PageLoader';
// todo add loader

const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;