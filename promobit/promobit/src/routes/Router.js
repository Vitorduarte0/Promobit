import { Route, Routes, BrowserRouter } from "react-router-dom"
import { ListMovies } from "../pages/ListMovies/ListMovies"
import { PageDatailMovie } from "../pages/PageDatailMovie/PageDatailMovie"
export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListMovies />} />
                <Route path="/movies/:id" element={<PageDatailMovie />} />
            </Routes>
        </BrowserRouter>
    )
}