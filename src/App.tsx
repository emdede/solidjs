import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { query, gql } from './GraphQLProvider';

const App: Component = () => {
  const [data] = query(
    gql`
      query MyQuery {
        query {
          dnsRecords {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    `
  );

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p class="bg-red-500 text-5xl">
          {JSON.stringify(data() || 'Loading')}.
        </p>
      </header>
    </div>
  );
};

export default App;
