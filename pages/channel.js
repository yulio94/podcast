import React from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelAudios from "../components/ChannelAudios";
import ChannelSeries from "../components/ChannelSeries";
import Error from "./_error";

export default function Channel(props) {
  const { channel, channelAudioClips, channelSeries, statusCode } = props;

  if (statusCode !== 200) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title={Channel.title}>
      <h1>{channel.title}</h1>
      <ChannelAudios channelAudioClips={channelAudioClips} />
      <ChannelSeries channelSeries={channelSeries} />
    </Layout>
  );
}

export async function getServerSideProps({ query, res }) {
  let idChannel = query.id;

  try {
    const [reqChannel, reqAudio, reqSeries] = await Promise.all([
      fetch(`https://api.audioboom.com/channels/${idChannel}`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
      fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
    ]);

    if (reqChannel.status >= 404) {
      res.statusCode = reqChannel.status;
      return {
        props: {
          channel: null,
          channelAudioClips: null,
          channelSeries: null,
          statusCode: reqChannel.status,
        },
      };
    }

    let channel = (await reqChannel.json()).body.channel;
    let channelAudioClips = (await reqAudio.json()).body.audio_clips;
    let channelSeries = (await reqSeries.json()).body.channels;

    return {
      props: { channel, channelAudioClips, channelSeries, statusCode: 200 },
    };
  } catch (error) {
    res.statusCode = 503;
    return {
      props: {
        channel: null,
        channelAudioClips: null,
        channelSeries: null,
        statusCode: 503,
      },
    };
  }
}
