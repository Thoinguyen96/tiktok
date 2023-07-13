// Layout
import { HeaderOnly } from 'components/Layout';

// Page
import Home from 'pages/Home';
import Following from 'pages/Following';
import Profile from 'pages/Profile';
import Upload from 'pages/Upload';
import Search from 'pages/Search';
// import { Route } from 'react-router-dom';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];
// export const privateRoutes = [];
