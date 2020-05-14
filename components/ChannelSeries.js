import React from "react";

export default function ChannelSeries(props) {
  const { channelSeries } = props;

  return (
    <>
      <h2>Series</h2>
      {channelSeries.map((serie) => (
        <div key={serie.id}>{serie.title}</div>
      ))}
    </>
  );
}
