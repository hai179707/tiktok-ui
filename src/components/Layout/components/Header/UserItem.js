import { GetCoinIcon, LogOutIcon, ProfileIcon, SettingIcon } from '~/components/Icons';
import { MENU_ITEMS } from './MenuItem';
import routesConfig from '~/config/routes'

const currentUser = {
    userName: 'thanhhai179707'
}

export const USER_ITEMS = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: `/@${currentUser.userName}`,
    },
    {
        icon: <GetCoinIcon />,
        title: 'Get coin',
        to: routesConfig.coin,
    },
    {
        icon: <SettingIcon />,
        title: 'Setting',
        to: routesConfig.setting,
    },
    ...MENU_ITEMS,
    {
        type: 'log-out',
        icon: <LogOutIcon />,
        title: 'Log out',
        separate: true
    }
]