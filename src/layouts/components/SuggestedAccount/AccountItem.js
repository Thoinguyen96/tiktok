import PropTypes from 'prop-types';
import { Wrapper as PopperWrapper } from 'components/Popper';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/Button';
const cx = classNames.bind(styles);
function AccountItem() {
    const renderHandle = (attrs) => {
        return (
            <div {...attrs}>
                <PopperWrapper className={cx('wrapper-popper')}>
                    <div className={cx('wrapper-avatar')}>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/429b5f6b617c83518b0c0615279171c7~c5_100x100.jpeg?x-expires=1690412400&x-signature=S1Inq%2BlV0agcp7zLfFQ0JhhLFxg%3D"
                            alt=""
                        />
                        <Button primary>Follow</Button>
                    </div>
                    <div className={cx('item-info')}>
                        <div className={cx('wrap-name')}>
                            <h4 className={cx('nick-name')}>Le haru98</h4>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                        </div>
                        <span className={cx('name')}>Le haru</span>
                    </div>
                    <div className={cx('interact')}>
                        <span>
                            <strong>1.1M</strong> Followers
                        </span>
                        <span>
                            <strong>51M</strong> likes
                        </span>
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div className={cx('wrapper-avatar')}>
            <Tippy delay={[0, 200]} interactive render={renderHandle}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/429b5f6b617c83518b0c0615279171c7~c5_100x100.jpeg?x-expires=1690412400&x-signature=S1Inq%2BlV0agcp7zLfFQ0JhhLFxg%3D"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <div className={cx('wrap-name')}>
                            <h4 className={cx('nick-name')}>Le haru98</h4>
                            <FontAwesomeIcon icon={faCheckCircle} className={cx('icon-check')} />
                        </div>
                        <span className={cx('name')}>Le haru</span>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    // label: PropTypes.string.isRequired,
};
export default AccountItem;
