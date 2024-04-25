import { Route, Routes } from 'react-router-dom'
import { Page as RegisterPage } from '@pages/register/Page'
import { Page as LoginPage } from '@pages/login/Page'
import { Page as ResetPasswordPage } from '@pages/reset-password/Page'
import { Page as ProfilePage } from '@pages/profile/Page'
import { Page as HomePage } from '@pages/home/Page'
import { Page as BoardDetailPage } from '@pages/board-detail/Page'

const AppRoutes = () => {
  return <Routes>
    <Route path={'/'} element={<HomePage />} />
    <Route path={'/login'} element={<LoginPage />} />
    <Route path={'/register'} element={<RegisterPage />} />
    <Route path={'/reset-password'} element={<ResetPasswordPage />} />
    <Route path={'/profile'} element={<ProfilePage />} />
    <Route path={'/board/:id'} element={<BoardDetailPage />} />
  </Routes>
}

export default AppRoutes
