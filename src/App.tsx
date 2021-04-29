import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Categories from './pages/Categories';
import Category from './pages/Category';
import Post from './pages/Post';
import Posts from './pages/Posts';

function App() {
    return (
        <Switch>
            <Route path={['/', '/posts', '/post/:slug', '/categories', '/categories/:id']} exact>
                <AppLayout>
                    <AppLayout.Header>
                        <p>Header</p>
                    </AppLayout.Header>
                    <AppLayout.GnbNav>
                        <p>Nav</p>
                    </AppLayout.GnbNav>
                    <AppLayout.Main>
                        <Route path={['/', '/posts']} exact>
                            <Posts />
                        </Route>
                        <Route path="/post/:slug">
                            <Post />
                        </Route>
                        <Route path="/categories" exact>
                            <Categories />
                        </Route>
                        <Route path="/categories/:id">
                            <Category />
                        </Route>
                    </AppLayout.Main>
                </AppLayout>
            </Route>
        </Switch>
    );
}

export default App;
