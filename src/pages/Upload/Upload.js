import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
const cx = classNames.bind(styles);
function Upload() {
    return <h1 className={cx('wrapper')}>Upload page</h1>;
}

export default Upload;
