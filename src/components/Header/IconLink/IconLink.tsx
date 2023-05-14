import { Link } from 'react-router-dom';

interface Props {
  to: string;
  src: string;
  alt: string;
  classNameIconLinkBlock?: string;
  classNameIconLink: string;
  classNameIcon: string;
  clickFunc?: () => void;
}

export const IconLink = ({
  to,
  src,
  alt,
  classNameIconLink,
  classNameIcon,
  clickFunc,
}: Props) => (
    <Link to={`/${to}`} className={classNameIconLink}>
      <img
        src={src}
        alt={alt}
        className={classNameIcon}
        onClick={clickFunc}
      />
    </Link>
  );
