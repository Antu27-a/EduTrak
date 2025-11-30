import Sidebar from "./Sidebar.jsx";

export default function AdminLayout({ children }) {
    return (
        <div className="flex w-full min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenido principal */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
