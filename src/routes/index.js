import routesConfig from '~/config/routes'

import { HeaderOnly } from '~/components/Layout'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Feedback from '~/pages/Feedback'

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.feedback, component: Feedback, layout: HeaderOnly },
    { path: routesConfig.search, component: Search },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }