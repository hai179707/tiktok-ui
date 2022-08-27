import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Feedback from '~/pages/Feedback'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/feedback', component: Feedback, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }