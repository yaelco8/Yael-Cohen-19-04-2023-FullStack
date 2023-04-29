import {HomePage} from './pages/homePage'
import {FavoritePage} from './pages/favoritePage'
 
const routes=[
    {
        path:'/',
        component:<HomePage/>
    },
    {
        path:'/favorites',
        component:<FavoritePage/>
    }
]

export default routes