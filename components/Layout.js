import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function Layout(props) {
  const { children, title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <Link href="/" prefetch={false}>
          <a>Podcasts</a>
        </Link>
      </header>

      {children}

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }

        header a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}
