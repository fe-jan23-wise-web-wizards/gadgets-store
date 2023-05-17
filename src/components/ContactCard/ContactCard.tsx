import styles from './ContactCard.module.scss';

import linkedInIcon from '@assets/icons/linkedin.svg';
import githubIcon from '@assets/icons/github.svg';
import mailIcon from '@assets/icons/email.svg';

interface ContactCard {
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
}: ContactCard) => {
  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = `mailto:${mail}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <img src={photo} alt="" className={styles.photo} />
        <div className={styles.text}>
          <h3 className={styles.name}>{name}</h3>
          <div className={styles.links}>
            <a href={linkedin} target="_blank" className={styles.link}>
              <img src={linkedInIcon} alt="" />
            </a>
            <a href={github} target="_blank" className={styles.link}>
              <img src={githubIcon} alt="" />
            </a>
            <a href={`mailto:${mail}`} onClick={handleMailClick} className={styles.link}>
              <img src={mailIcon} alt="" />
            </a>
            <p className={styles.role}>{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
