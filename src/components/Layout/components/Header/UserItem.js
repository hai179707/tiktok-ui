import { GetCoinIcon, LogOutIcon, ProfileIcon, SettingIcon } from '~/components/Icons';
import { MENU_ITEMS } from './MenuItem';
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
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'View profile',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        type: 'log-out',
        icon: <LogOutIcon />,
        title: 'Log out',
        separate: true
    }
]