import * as React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Link href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </Link>
      </footer>
    </>
  );
};

export default Footer;
