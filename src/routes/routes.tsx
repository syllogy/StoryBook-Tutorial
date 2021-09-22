import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const DocumentsUploadStep = lazy(() => import("../pages/DocumentsUploadStep"));

const Routes: React.FC<{}> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DocumentsUploadStep} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
