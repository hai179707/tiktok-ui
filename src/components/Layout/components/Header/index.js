import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { Menu as More } from '~/components/Popper'
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { MENU_ITEMS } from './MenuItem';
import { USER_ITEMS } from './UserItem';
import { ClearIcon, InboxIcon, MessagesIcon, MoreIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setSearchResult] = useState([])
    const inputRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);

    }, [])

    const handleClear = () => {
        inputRef.current.value = ''
        inputRef.current.focus()
    }

    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to='/' className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </Link>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        placeholder='Tìm kiếm tài khoản và video'
                    />
                    <span
                        onClick={handleClear}
                        className={cx('clear')}
                    >
                        <ClearIcon width='16px' />
                    </span>
                    <span className={cx('load')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </span>
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon width='24px' />
                    </button>
                </div>
            </HeadlessTippy>
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