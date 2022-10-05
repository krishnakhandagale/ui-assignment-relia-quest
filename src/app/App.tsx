import { ApolloProvider } from '@apollo/client';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from '../components';
import { Loader } from '../components/Loader';
import PokemonDetailsModal from '../components/PokemonDetailsModal/PokemonDetailsModal';
import { LayoutProvider } from '../contexts';
import { useStyles } from './App.styled';

import { client } from './client';

const Home = React.lazy(() => import('../screens/Home'));

const ListPage = React.lazy(() =>import('../screens/ListPage'));

function App() {
  const classes = useStyles();
  return (
    <ApolloProvider client={client}>
      <LayoutProvider>
        <div className={classes.root}>
          <BrowserRouter>
            <Nav />
            <div className={classes.content}>
              <div className={classes.scrollableArea}>
                <Suspense fallback={<Loader size='sm'></Loader>}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemon" element={<ListPage />}>
                      <Route path=":id/:name" element={<PokemonDetailsModal />} />
                    </Route>
                  </Routes>
                </Suspense>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </LayoutProvider>
    </ApolloProvider>
  );
}

export default App;
