import { Routes, Route } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"

export const RoutesMain = () => {
    return(
        <Routes>
            <Route path='/' element={<h1>Estou na rota / </h1>}  />
            <Route path='/dashboard' element={<Dashboard />}>
                <Route path="banana" element={<h2>Banana</h2>} />
                <Route path="abacaxi" element={<h2>Abacaxi</h2>} />
                <Route path="manga" element={<h2>Manga</h2>} />
                <Route path="uva" element={<h2>Manga</h2>} />
            </Route>
            <Route path='/home' element={<Home />} />
            <Route path='*' element={<h1>Pagina nao encontrada</h1>} />
        </Routes>
    )
}

// switch() {
//     case 1:

//     case 2:
// }