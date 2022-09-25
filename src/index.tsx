import '@aws-amplify/ui-react/styles.css';
import { studioTheme } from './ui-components';
import { Amplify, DataStore } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';;

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AmplifyProvider theme={studioTheme}>
      <Authenticator>
      {({ signOut, user }) => (
        user && 
        user.username &&
        user.attributes && 
        user.attributes["preferred_username"]
        ?
        <App userId={user.username} preferred_username={user.attributes["preferred_username"]}/>
        : 
        <></>
      )}
      </Authenticator>
    </AmplifyProvider>
  </React.StrictMode>
);

