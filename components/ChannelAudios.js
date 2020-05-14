import React from "react";
import Link from "next/link";

export default function ChannelAudios(props) {
  const { channelAudioClips } = props;

  return (
    <>
      <h2>Ultimos podcasts</h2>
      {channelAudioClips.map((audio) => (
        <Link href={`/podcast?id=${audio.id}`} prefetch={false}>
          <a className="audio">
            <div key={audio.id}>{audio.title}</div>
          </a>
        </Link>
      ))}

      <style jsx>
        {`
          .audio {
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
}
