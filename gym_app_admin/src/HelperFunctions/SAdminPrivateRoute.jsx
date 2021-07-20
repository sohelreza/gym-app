import React from "react";
import { Route, Redirect } from "react-router-dom";

import { SAdminUserLayout } from "../Components/SAdminUserLayout";
import { SAdminSlideMenu } from "../Components/SAdminSlideMenu";

import { routesList } from "../Constants";

const SAdminPrivateRoute = ({
  component: Component,
  sAdminLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        sAdminLoggedIn ? (
          <>
            <SAdminSlideMenu />

            <SAdminUserLayout>
              <Component {...props} />
            </SAdminUserLayout>
          </>
        ) : (
          <Redirect to={routesList.S_ADMIN_LOG_IN} />
        )
      }
    />
  );
};

export default SAdminPrivateRoute;
