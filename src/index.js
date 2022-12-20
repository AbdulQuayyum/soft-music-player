import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Background from './Components/Theme/Background';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from "./Redux/Store"
import { ThemeProvider } from './Contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Background>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Background>
      </Router>
    </Provider>
  </React.StrictMode>
);
