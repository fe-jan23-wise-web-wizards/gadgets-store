import { Link } from "react-router-dom";
import styles from './SignInButton.module.scss';

export const SignInButton = () => {
  return (
    <Link to={'/sign-in'} className={styles.button}>Sign In</Link>
  );
};
