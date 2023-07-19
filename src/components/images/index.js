import { useState, forwardRef } from 'react';
import images from 'assets/images';
import classNames from 'classnames/bind';
import styles from './Images.module.scss';
const cx = classNames.bind(styles);
// export default Image;
function Image({ alt, className, src, ...props }, ref) {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        return setFallback(images.noAvatar);
    };
    return <img ref={ref} alt={alt} src={fallback || src} {...props} onError={handleError} className={className} />;
}

export default forwardRef(Image);
