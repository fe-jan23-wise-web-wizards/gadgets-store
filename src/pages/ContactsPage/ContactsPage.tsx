import { ContactCard } from '@components/ContactCard';

import StasPhoto from '@assets/team_photos/Stas.webp';
import VladPhoto from '@assets/team_photos/Vlad.webp';
import RashydPhoto from '@assets/team_photos/Rashyd.webp';
import AndriiPhoto from '@assets/team_photos/Andrii.webp';
import StasKulPhoto from '@assets/team_photos/StasKul.webp';
import VadymPhoto from '@assets/team_photos/Vadym.webp';

import styles from './ContactsPage.module.scss';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const ContactsPage = () => {
  return (
    <div className={styles.page}>
      <Breadcrumbs />
      <h2 className={styles.title}>Our team:</h2>
      <div className={styles.cards}>
        <ContactCard
          name="Stanislav Korchevskyi"
          photo={StasPhoto}
          linkedin="https://linkedin.com/in/stanislavkorchevskyi"
          github="https://github.com/stanislavcodes"
          mail="work.stanislav.codes@gmail.com"
          role="Team Lead"
        />

        <ContactCard
          name="Vladyslav Mosor"
          photo={VladPhoto}
          linkedin="https://linkedin.com/in/vladyslav-mosor"
          github="https://github.com/vladyslav-mosor"
          mail="mosorvlad@gmail.com"
        />

        <ContactCard
          name="Rashyd Hasratov"
          photo={RashydPhoto}
          linkedin="https://linkedin.com/in/rashyd-hasratov"
          github="https://github.com/rashyd-hasratov"
          mail="rashyd.hasratov@gmail.com"
        />

        <ContactCard
          name="Andrii Bezkorovainyi"
          photo={AndriiPhoto}
          linkedin="https://linkedin.com/in/andrii-bezkorovainyi-366166274"
          github="https://github.com/andriibezkorovainyi"
          mail="andrej.b.develop@gmail.com"
        />

        <ContactCard
          name="Stanislav Kulakovskyi"
          photo={StasKulPhoto}
          linkedin="https://linkedin.com/in/stanislav-kulakovskyi-a02651273"
          github="https://github.com/stanislavkulakovskyi"
          mail="kulakostas@gmail.com"
        />

        <ContactCard
          name="Vadym Kolomiiets"
          photo={VadymPhoto}
          linkedin="https://linkedin.com/in/vadym-kolomiiets-ua"
          github="https://github.com/VadKol"
          mail="kolomiietsvad@gmail.com"
        />
      </div>
    </div>
  );
};