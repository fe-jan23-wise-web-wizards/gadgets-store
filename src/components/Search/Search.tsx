import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const formatQuery = (query: string) => {
  let queryFormatted = query.trim().toLowerCase();

  while (queryFormatted.includes(' ')) {
    queryFormatted = queryFormatted.replace(' ', '-');
  }

  return queryFormatted;
};

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query') || '';
  const [query, setQuery] = useState(currentQuery);

  const applyQuery = debounce((query: string) => {
    const queryFormatted = formatQuery(query);

    if (queryFormatted) {
      searchParams.set('query', queryFormatted);
    } else {
      searchParams.delete('query');
    }

    searchParams.delete('page');
    setSearchParams(searchParams);
  }, 1300);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
    applyQuery(event.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <label>
        <p className={styles.search_title}>
          Search
        </p>

        <div className={styles.search_field_wrapper}>
          <input
            className={styles.search_field}
            placeholder='Enter...'
            value={query}
            onChange={handleQueryChange}
          />
          <div className={styles.search_field_icon_container}></div>
        </div>
      </label>
    </div>
  );
};