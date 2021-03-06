import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ListMovies } from "../pages/ListMovies/ListMovies"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListMovies />} />
                <Route path="/movies/:id" element={<ListMovies />} />
            </Routes>
        </BrowserRouter>
    )
}