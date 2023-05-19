import styles from './ContactCard.module.scss';

import linkedInIcon from '@assets/icons/linkedin.svg';
import githubIcon from '@assets/icons/github.svg';
import mailIcon from '@assets/icons/email.svg';
import { useState, useRef } from 'react';
interface ContactCardProps {
  name: string,
  photo: string,
  linkedin: string,
  github: string,
  mail: string,
  role?: string,
}

export const ContactCard = ({ 
  name, 
  photo, 
  linkedin, 
  github, 
  mail,
  role,
}: ContactCardProps) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<NodeJS.Timeout>();

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(mail);
    setIsEmailCopied(true);

    timerRef.current = setTimeout(() => {
      setIsEmailCopied(false);
      setShowTooltip(false);
    }, 2000);
  };

  const showMessage = () => {
    setShowTooltip(true);
  };

  const hideMessage = () => {
    setShowTooltip(false);
    setIsEmailCopied(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <img src={photo} alt="" className={styles.photo} />
        <div className={styles.text}>
          <h3 className={`${styles.name} naame`}>{name}</h3>
          <div className={styles.links}>
            <a href={linkedin} target="_blank" className={styles.link}>
              <img src={linkedInIcon} alt="" />
            </a>

            <a href={github} target="_blank" className={styles.link}>
              <img src={githubIcon} alt="" />
            </a>

            <a
              onMouseEnter={showMessage}
              onClick={handleMailClick}
              className={`${styles.link} ${styles.mail}`}
              onMouseLeave={hideMessage}
            >
              {showTooltip && (
                <div className={`${styles.tooltip}`}>
                  {isEmailCopied ? 'Copied' : 'Copy email to clipboard'}
                </div>
              )}
              <img src={mailIcon} alt="" />
            </a>

            <p className={styles.role}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
