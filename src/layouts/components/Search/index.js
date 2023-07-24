import HeadlessTippy from '@tippyjs/react/headless';
import axios from 'axios';
import * as searchServices from 'services/searchService';
import { Wrapper as PopperWrapper } from 'components/Popper';
import AccountItem from 'components/AccountItem';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from 'hooks';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServices.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        // use fetch

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((response) => {
        //         setSearchResult(response.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         return setLoading(false);
        //     });

        // use axios

        fetchApi();
    }, [debounced]);
    const handleHiddenResult = () => {
        return setShowResult(false);
    };
    return (
        <HeadlessTippy
            appendTo={() => document.body}
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('result-title')}>Account</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHiddenResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('input')}
                    placeholder="Tìm kiếm"
                    spellCheck="false"
                    onChange={(e) => {
                        const searchValue = e.target.value;
                        if (!searchValue.startsWith(' ')) {
                            setSearchValue(searchValue);
                        }
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            setSearchResult([]);
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx('loading')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
