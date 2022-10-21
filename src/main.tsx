import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './template/app';
import { Movie } from './pages/Movie';
import { Search } from "./pages/Search";
import Home from './pages/Home';

import { GlobalStyle } from './style/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route element={ <App /> } >
              <Route path='/' element= { <Home /> } />
              <Route path='movie/:id' element={ <Movie /> } />
              <Route path='search' element={ <Search /> } />
            </Route>
          </Routes>
          <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
