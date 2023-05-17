import { SignIn } from '@clerk/clerk-react';
import styles from './SignInPage.module.scss';

export const SignInPage = () => {
  return (
    <div className={styles.signinpage}>
      <h1 className={styles.title}>Welcome to Gadgets Store!</h1>
      <SignIn
        redirectUrl="/"
        appearance={{
          variables: {
            colorPrimary: '#905BFF',
          },
          layout: {
            socialButtonsVariant: 'blockButton',
          },
        }}
      />
    </div>
  );
};
