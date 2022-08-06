import { Route, Routes } from 'react-router-dom'
import { Login } from '../auth'
import { HeroRoutes } from '../heroes/routes/HeroRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="/*" element={<HeroRoutes/>}/>
        </Routes>
    </>
  )
}
