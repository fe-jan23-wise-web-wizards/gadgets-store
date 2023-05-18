import { Link } from "react-router-dom";
import styles from './SignInButton.module.scss';

interface SignInButtonProps {
  onClick?: () => void;
}

export const SignInButton = ({ onClick }: SignInButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={'/sign-in'}
      className={styles.button}
      onClick={handleClick}
    >
      Sign In
    </Link>
  );
};
