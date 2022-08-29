import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss'
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeSolidIcon, LiveIcon, LiveSolidIcon, UserGroupIcon, UserGroupSolidIcon } from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import SidebarItem from './SidebarItem';
import Discover from '~/components/Discover';
import Footer from '~/components/Footer';

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('container')}>
                <Menu>
                    <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeSolidIcon />} />
                    <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupSolidIcon />} />
                    <MenuItem title='LIVE' to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveSolidIcon />} />
                </Menu>
                <SidebarItem>
                    <SuggestedAccounts label='Suggested accounts' />
                </SidebarItem>
                <SidebarItem>
                    <SuggestedAccounts label='Following accounts' />
                </SidebarItem>
                <SidebarItem>
                    <Discover />
                </SidebarItem>
                <SidebarItem>
                    <Footer />
                </SidebarItem>
            </div>
        </aside>
    )
}

export default Sidebar;