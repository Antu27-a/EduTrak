import { Routes, Route, Navigate } from "react-router-dom"
import AdminLayout from "../components/layout/AdminLayout"
import AdminDashboard from "../Pages/Admin/AdminDashboard"
import Usuarios from "../Pages/Admin/Usuarios"
import Alumnos from "../Pages/Admin/Alumnos"
import Cursos from "../Pages/Admin/Cursos"
import Configuracion from "../Pages/Admin/Configuracion"
import Login from "../Pages/Login"
import Landing from "../Pages/Landing"

export default function AppRoutes() {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            {/* Rutas Admin */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="alumnos" element={<Alumnos />} />
                <Route path="cursos" element={<Cursos />} />
                <Route path="configuracion" element={<Configuracion />} />
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    )
}
