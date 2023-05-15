import { FC, useEffect } from 'react';
import styles from '@components/ModalCheckout/ModalCheckout.module.scss';

interface Props {
  onClose: () => void;
}

export const Modal: FC<Props> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modal__Backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal__Content}>
        <p className={styles.modal__text}>
          Thank you!

          <span className={styles.modal__description}>
            Purchase confirmed!
          </span>
        </p>
      </div>
    </div>
  );
};