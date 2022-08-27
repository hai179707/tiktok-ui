import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faAdn } from '@fortawesome/free-brands-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import OptionItem from '~/components/OptionItem';
import Button from '~/components/Button';

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

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to='/' className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </Link>
            <Tippy
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
                        <FontAwesomeIcon icon={faCircleXmark}
                        />
                    </span>
                    <span className={cx('load')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </span>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>
            <div className={cx('actions')}>
                <Button outline to='/upload' className={cx('upload')} leftIcon={<img src={images.upload} alt='Upload' />}>Upload</Button>
                <Button primary>Log in</Button>
                <Tippy
                    delay={[0, 500]}
                    interactive
                    render={attrs => (
                        <div className={cx('more-option')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <OptionItem icon={<img src={images.upload} alt='Upload' />} title="Language" />
                                <OptionItem icon={<FontAwesomeIcon icon={faCircleQuestion} />} title="Feedback and help" />
                                <OptionItem icon={<FontAwesomeIcon icon={faKeyboard} />} title="Keyboard shortcuts" />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('more')}>
                        <img src={images.more} alt='More' />
                    </div>
                </Tippy>
            </div>
        </div>
    </header>
}

export default Header;