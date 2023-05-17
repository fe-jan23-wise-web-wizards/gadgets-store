import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import debounce from 'lodash.debounce';

import styles from './Search.module.scss';

const formatInput = (input: string) => {
  let inputFormatted = input.trim().toLowerCase();

  while (inputFormatted.includes(' ')) {
    inputFormatted = inputFormatted.replace(' ', '-');
  }

  return inputFormatted;
};

export const Search = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    setQuery('');
  }, [pathname]);

  const applyQuery = useCallback(debounce((input: string) => {
    const inputFormatted = formatInput(input);

    if (inputFormatted) {
      searchParams.set('query', inputFormatted);
    } else {
      searchParams.delete('query');
    }

    searchParams.delete('page');
    setSearchParams(searchParams);
  }, 1000), [searchParams]);

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