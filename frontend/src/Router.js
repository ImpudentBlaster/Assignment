import { createBrowserRouter , createRoutesFromElements , RouterProvider,Route } from 'react-router-dom';
import React from 'react';
import MainLayout from './Components/Mainlayout/MainLayout';
import Sidebar from './Components/Sidebar/Sidebar';
import Homepage from './Pages/HomePage/Homepage';
import EventCreator from './Pages/EventCreator/EventCreator';
import Signup from './Pages/SignUp/Signup';
import Login from './Pages/Login/Login';


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/CreateEvent' element={<EventCreator/>}/>
        </Route>
        </>
    )
)

const Router = () =>{
    return(
        <RouterProvider router={router}></RouterProvider>
    )
}

export default Router