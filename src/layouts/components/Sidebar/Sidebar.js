import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import config from 'config';
import { HomeIcon, FollowIcon, ExploreIcon, LiveIcon } from 'components/Icons';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title={'Dành cho bạn'} to={config.routes.home} icon={<HomeIcon />} />

                <MenuItem title={'Đang follow'} to={config.routes.following} icon={<FollowIcon />} />
                <MenuItem title={'Khám phá'} to={config.routes.explore} icon={<ExploreIcon />} />
                <MenuItem title={'LIVE'} to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
