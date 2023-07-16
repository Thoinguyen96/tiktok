import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/95a630d5efc3bc56f2c5675d360188d2~c5_100x100.jpeg?x-expires=1689559200&x-signature=k66ZxLZlMP1fvdnVj79JKjeF1Ew%3D"
                alt="avatar"
            />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span className={cx('name-user')}> Tiểu Muội</span>
                    <FontAwesomeIcon className={cx('icon-tick')} icon={faCircleCheck} />
                </div>
                <span className={cx('desc-user')}>Trần Hà</span>
            </div>
        </div>
    );
}

export default AccountItem;
