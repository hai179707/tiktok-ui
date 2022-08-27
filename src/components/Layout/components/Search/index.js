import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ClearIcon, SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles)


function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([])
            return
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setSearchResult(res.data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [searchValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder='Tìm kiếm tài khoản và video'
                    onChange={e => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <span
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <ClearIcon width='16px' />
                    </span>
                )}
                {loading && <span className={cx('load')}><FontAwesomeIcon icon={faCircleNotch} /></span>}
                <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                    <SearchIcon width='24px' />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;