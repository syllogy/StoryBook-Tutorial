import React from "react";
import ConnectedIntlProvider from "./components/ConnectedIntlProvider";
import Routes from "./routes";

function App(): JSX.Element {
  return (
    <div>
      <ConnectedIntlProvider>
        <Routes />
      </ConnectedIntlProvider>
    </div>
  );
}

export default App;
