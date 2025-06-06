//layouts
import { UploadLayout } from '~/components/Layout'

// pages
import Home from '~/container/Home/Home'
import Following from '~/container/Following/Following'
import Profile from '~/container/Profile/Profile'
import Upload from '~/container/Upload/Upload'
import Search from '~/container/Search/Search'


const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: UploadLayout},
    {path: '/search', component: Search, layout: null},

]

// Dành cho đăng nhập tài khoản mới vào được
const privateRoutes = [

]

export {publicRoutes, privateRoutes}