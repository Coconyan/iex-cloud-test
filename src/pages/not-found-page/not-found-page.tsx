import React from 'react';
import { RoutePath } from '../../components/app/router/route-config';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 Not found page</h1>
      <Link to={RoutePath.main}>go to Main</Link>
    </div>
  );
}

export default NotFoundPage;
