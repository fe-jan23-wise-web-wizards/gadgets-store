import styles from '@/components/Footer/Footer.module.scss';
import { FC } from 'react';

interface Props {
  href: string;
  content: string;
}

export const FooterLink: FC<Props> = ({ href, content }) => {
  return (
    <li className={styles.footer_links_item}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={styles.footer_links_list_link}
      >
        {content}
      </a>
    </li>
  );
};
