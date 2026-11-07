import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./screens/home/App"
import { MovieDetailes } from "./screens/movie/MovieDetailes"
import { Layout } from "./components/Layout"


export function MainRoutes() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>

                    <Route path='/' element={<App />}></Route>

                    <Route path='/movie/:id' element={<MovieDetailes />}></Route>
         
                </Route>
            </Routes>
        </Router>
    )
}
