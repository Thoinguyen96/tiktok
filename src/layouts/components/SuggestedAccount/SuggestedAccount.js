import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function SuggestedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
        </div>
    );
}
SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccount;
