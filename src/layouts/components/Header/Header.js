import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routesConfig from 'config/routes.js';

import {
    faSignLanguage,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faBookmark,
    faCoins,
    faGear,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Images';
import Button from 'components/Button';
import 'tippy.js/dist/tippy.css';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from 'components/Popper/Menu';
import { DotIcon, LogoTiktok, MessageSms, MessengerIcon, UploadIcon } from 'components/Icons';
import Search from '../Search';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faSignLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        to: '/avatar',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu thích',
        to: '/like',
    },

    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
];
function Header() {
    const handleMenuChange = () => {
        return;
    };
    const currentUser = true;
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <LogoTiktok />
                </Link>
                <Search />
                <div className={cx('action')}>
                    <Tippy interactive delay={[0, 200]} content="Tải lên" placement="bottom">
                        <Link to={routesConfig.upload}>
                            <Button
                                primary
                                className={cx('gap')}
                                iconLeft={<UploadIcon className={cx('upload-icon')} />}
                            >
                                Tải lên
                            </Button>
                        </Link>
                    </Tippy>
                    <Tippy interactive delay={[0, 200]} content="Tin nhắn" placement="bottom">
                        <button className={cx('MessageSms')}>
                            <MessageSms />
                        </button>
                    </Tippy>
                    {currentUser ? (
                        <>
                            <Tippy interactive delay={[0, 200]} content="Hộp Thư" placement="bottom">
                                <button className={cx('messenger')}>
                                    <MessengerIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('avatar-header')}
                                alt="avatar"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/78a57708c273482c65e3105230c4ece9.jpeg?x-expires=1690365600&x-signature=%2BYOy%2BW6LKvN2UR3cd6qmpmd7DV4%3D"
                            />
                        ) : (
                            <button className={cx('dot')}>
                                <DotIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
