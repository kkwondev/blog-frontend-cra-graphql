import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLayout from './components/AppLayout/AppLayout';
import Header from './components/Header/Header';
import Nav from './components/Nav';
import useCurrentUser from './hooks/useCurrentUser';
import Categories from './pages/Categories';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Search from './pages/Search';
import Tag from './pages/Tag';
import Write from './pages/Write';

function App() {
    useCurrentUser();
    return (
        <Switch>
            <Route path={['/', '/posts', '/categories', '/categories/:id']} exact>
                <AppLayout>
                    <AppLayout.Header>
                        <Header />
                    </AppLayout.Header>
                    <AppLayout.GnbNav>
                        <Nav />
                    </AppLayout.GnbNav>
                    <AppLayout.Main>
                        <Route path={['/', '/posts']} exact>
                            <Posts />
                        </Route>
                        <Route path="/categories/:name" exact>
                            <Categories />
                        </Route>
                    </AppLayout.Main>
                </AppLayout>
            </Route>
            <Route path={['/post/:slug', '/search', '/search/:search', '/tag/:name']}>
                <AppLayout>
                    <AppLayout.Header>
                        <Header />
                    </AppLayout.Header>
                    <AppLayout.Post>
                        <Route path="/post/:slug">
                            <Post />
                        </Route>
                        <Route path={['/search', '/search/:search']} exact>
                            <Search />
                        </Route>
                        <Route path="/tag/:name">
                            <Tag />
                        </Route>
                    </AppLayout.Post>
                </AppLayout>
            </Route>
            <Route path={['/write', '/write/:slug']}>
                <AppLayout>
                    <AppLayout.Write>
                        <Route path={['/write', '/write/:slug']} exact>
                            <Write />
                        </Route>
                    </AppLayout.Write>
                </AppLayout>
            </Route>
        </Switch>
    );
}

export default App;
