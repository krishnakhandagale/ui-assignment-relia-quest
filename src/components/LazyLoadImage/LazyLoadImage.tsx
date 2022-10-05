import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useStyles } from './LazyLoadImage.styled';
import { Props } from './types';

export const LazyImage: React.FC<Props> = ({ url }: Props) => {

    const classes = useStyles();

    return (<LazyLoadImage
        className={classes.pkmImage}
        alt={'image'}
        src={url} />)
};