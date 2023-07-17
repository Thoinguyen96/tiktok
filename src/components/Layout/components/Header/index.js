import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faBurger,
    faSignLanguage,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from 'components/Popper';
import AccountItem from 'components/AccountItem';
import Menu from 'components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSignLanguage} />,
        title: 'Tiếng Việt',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt và bàn phím',
    },
];
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="120px"
                        height="30px"
                        viewBox="0 0 320.000000 93.000000"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <g
                            transform="translate(0.000000,93.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none"
                        >
                            <path d="M459 583 c0 -211 -4 -319 -12 -343 -16 -47 -68 -80 -125 -80 -38 0 -50 5 -83 39 -33 33 -39 45 -39 82 0 78 49 128 128 129 l42 0 0 74 0 73 -35 6 c-63 10 -157 -27 -212 -85 -170 -177 -41 -472 207 -471 108 0 193 50 246 145 29 53 29 54 32 246 2 105 5 192 7 192 1 0 27 -11 57 -25 30 -14 76 -28 101 -31 l47 -7 0 75 0 74 -42 11 c-87 23 -152 89 -164 165 l-7 38 -73 0 -74 0 -1 -307z" />
                            <path d="M990 610 l0 -50 60 0 60 0 0 -195 0 -195 60 0 60 0 0 190 0 190 50 0 c49 0 49 0 60 41 6 22 14 47 17 55 4 12 -23 14 -181 14 l-186 0 0 -50z" />
                            <path d="M1405 635 c-14 -13 -25 -28 -25 -33 0 -19 42 -62 61 -62 25 0 59 35 59 60 0 24 -34 60 -55 60 -9 0 -27 -11 -40 -25z" />
                            <path d="M1550 415 l0 -245 60 0 60 0 0 63 c0 57 11 87 31 87 5 0 32 -34 60 -75 l53 -75 64 0 64 0 -35 48 c-18 26 -55 78 -82 115 l-48 69 67 67 c36 36 66 70 66 74 0 4 -27 7 -61 7 -60 0 -61 -1 -120 -57 l-59 -56 0 111 0 112 -60 0 -60 0 0 -245z" />
                            <path d="M1970 610 l0 -50 60 0 60 0 0 -195 0 -195 60 0 60 0 0 190 0 190 46 0 c47 0 54 7 78 88 l7 22 -185 0 -186 0 0 -50z" />
                            <path d="M2810 415 l0 -246 58 3 57 3 3 60 c3 55 14 85 32 85 4 0 31 -34 60 -75 l53 -75 59 0 c32 0 58 2 58 5 0 3 -34 56 -76 116 l-77 111 67 67 c36 36 66 70 66 74 0 4 -27 7 -61 7 -60 0 -61 -1 -119 -56 l-59 -56 -3 108 -3 109 -57 3 -58 3 0 -246z" />
                            <path d="M2466 555 c-167 -59 -181 -285 -22 -367 32 -16 54 -19 117 -16 67 3 83 7 120 33 105 75 116 213 24 301 -62 60 -156 79 -239 49z m137 -123 c58 -60 15 -162 -68 -162 -83 0 -127 105 -69 164 38 37 100 37 137 -2z" />
                            <path d="M1380 335 l0 -165 60 0 60 0 0 165 0 165 -60 0 -60 0 0 -165z" />
                        </g>
                    </svg>
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('result-search')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('result-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder="Tìm kiếm" spellCheck="false" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    <Button className={cx('gap')} iconLeft={<FontAwesomeIcon icon={faPlus} />}>
                        Tải lên
                    </Button>

                    <Button primary href="https://fullstack.edu.vn/" target="_blank">
                        Đăng nhập
                    </Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('dot')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
