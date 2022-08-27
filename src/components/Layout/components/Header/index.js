import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Menu as More } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { MENU_ITEMS } from './MenuItem';
import { USER_ITEMS } from './UserItem';
import { InboxIcon, MessagesIcon, MoreIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)

function Header() {

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to='/' className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </Link>
            <Search />
            <div className={cx('actions')}>
                <Button outline to='/upload' className={cx('upload')} leftIcon={<UploadIcon />}>Upload</Button>
                {currentUser ? (
                    <>
                        <Tippy content='Messages' placement='bottom' interactive>
                            <div className={cx('message')}>
                                <Button iconOnly to='/messages' leftIcon={<MessagesIcon width='26px' />}></Button>
                            </div>
                        </Tippy>
                        <Tippy content='Inbox' placement='bottom' interactive>
                            <div className={cx('inbox')}>
                                <Button iconOnly leftIcon={<InboxIcon />}></Button>
                                <div className={cx('unread-inbox')}>12</div>
                            </div>
                        </Tippy>
                        <More
                            items={USER_ITEMS}
                            onChange={handleMenuChange}
                        >
                            <Image className={cx('user-avatar')} src={images.ribi} alt='User avatar' />
                        </More>
                    </>
                ) : (
                    <>
                        <Button primary>Log in</Button>
                        <More
                            items={MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            <div><MoreIcon className={cx('more-icon')} /></div>
                        </More>
                    </>
                )}
            </div>

        </div>
    </header>
}

export default Header;