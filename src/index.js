import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home.page';
import BlogPage from './pages/blog/page';
import SinglePage from './components/singleBlog/page';
import { ThemeContextProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import './index.css'
import Login from './components/authentication/Login.jsx';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import Register from './components/authentication/Register.jsx';
import ForgotPassword from './components/authentication/ForgotPassword.jsx';
import ResetPassword from './components/authentication/ResetPassword.jsx';
import WritePage from './components/write/page.jsx';
import { GOOGLE_CLIENT_ID } from './constant.js';

const router = createBrowserRouter([{
  path : '/',
  element : <ThemeContextProvider> 
              <App />
            </ThemeContextProvider>,
  children : 
  [{
    path : "/",
    element : <Home />
  },
  {
    path : '/blog',
    element : <BlogPage />
  },
  {
    path : '/blog/:blog_id',
    element : <SinglePage />
  },
  {
    path : '/login',
    element : <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}><Login /></GoogleOAuthProvider>
  },
  {
    path : 'signin',
    element : <Register />
  },
  {
    path : '/forgot-password',
    element : <ForgotPassword />
  },
  {
    path : '/api/v1/auth/reset-password/:tocken',
    element : <ResetPassword />
  },
  {
    path : '/write',
    element : <WritePage />
  }
]
  
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition = {Bounce}
      bodyClassName="toastBody"
    />
    <RouterProvider  router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
