import { useMemo } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

export function Layout() {
    const { pathname } = useLocation()

    const isHomePage = useMemo(() => pathname === '/', [pathname])

    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-0">
            {!isHomePage && (
                <header className="mb-10 flex items-center justify-between">
                    <Link to='/'>
                        <img
                            src='/netflix.png'
                            alt="Netflix"
                            className="h-30 w-auto"
                        />
                    </Link>
                </header>
            )}
            <Outlet />
        </div>
    )
}
