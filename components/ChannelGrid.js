import React from "react";
import Link from "next/link";

export default function ChannelGrid(props) {
  const { channels } = props;
  return (
    <>
      <div className="channels">
        {channels.map((channel) => {
          return (
            <Link href={`/channel?id=${channel.id}`} key={channel.id}>
              <a className="channel">
                <img src={channel.urls.logo_image.original} alt="" />
                <h3>{channel.title}</h3>
              </a>
            </Link>
          );
        })}
      </div>

      <style jsx>
        {`
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          a.channel {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
          .channel {
            display: block;
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            margin-bottom: 0.5em;
          }

          .channel img {
            width: 100%;
          }

          .channel h3 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
