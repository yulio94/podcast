import React from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import Error from "next/error";

export default function Index(props) {
  const { channels, statusCode } = props;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="Podcasts">
      <ChannelGrid channels={channels} />
    </Layout>
  );
}

export async function getServerSideProps({ res }) {
  try {
    let req = await fetch("https://api.audioboom.com/channels/recommended");
    let { body: channels } = await req.json();
    return { props: { channels, statusCode: 200 } };
  } catch (error) {
    res.statusCode = 503;
    return { props: { channels: null, statusCode: 503 } };
  }
}
