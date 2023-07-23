import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'components/Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <div className={cx('name')}>
                    <span className={cx('name-user')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('icon-tick')} icon={faCircleCheck} />}
                </div>
                <span className={cx('desc-user')}>{data.nickname}</span>
            </div>
        </Link>
    );
}
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItem;
