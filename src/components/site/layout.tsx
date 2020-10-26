import React from 'react';

import { Navigation, NavigationItem } from 'components/navigation';
import { Logo, LogoStar } from 'components/logo';
import { seoTitle } from 'helpers';
import { Head } from 'framework';
import { A } from 'elements';

import styles from './site.module.scss';

export interface LayoutProps {
  children: React.ReactNode;
  navigationItems: NavigationItem[];
  title: string;
  description?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, navigationItems, title, description = '' }) => {
  const date = new Date().toString();
  return (
    <div className={styles.Layout}>
      <Head key="head">
        <title>{seoTitle(title)}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <header className={styles.Header}>
        <A href="/" className={styles.Header__link}>
          <Logo />
        </A>
        <Navigation items={navigationItems} />
      </header>
      <main>{children}</main>
      <footer className={styles.Footer}>
        <LogoStar className={styles.Footer__logo} />
        <p>Generated {date}</p>
        <p>
          <A href="https://nextjs.org/" rel="external">
            Generated by Next.js
          </A>
          <A href="https://vercel.com/" rel="external">
            Hosted at Vercel
          </A>
          <A href="https://github.com/wolfiezero/wolfiezero.com/" rel="external me">
            Source on Github
          </A>
        </p>
        <p>Copyright 2020</p>
      </footer>
    </div>
  );
};
