import React, {useState} from 'react';
import { RouterProvider } from 'react-router-dom';
import NoPermissions from "./components/NoPermissions/NoPermissions";

import './App.css';
import {routerConfig} from "./router/routerConfig";

function App() {

    const [userRole, setUserRole] = useState(false);

    const checkPermissions = (component: JSX.Element) => {
        if(!userRole) {
            return <NoPermissions/>
        } else {
            return component;
        }
    }

  return (
      <RouterProvider router={routerConfig} />
  )
}

export default App;
