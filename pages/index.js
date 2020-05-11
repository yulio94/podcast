import React from "react";

export default function Index(props) {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: red;
        }
        div :global(p) {
          color: green;
        }
        img {
          max-width: 50px;
          display: block;
          margin: 0 auto;
        }
      `}</style>
      <style jsx global>{`
        body {
          background: yellow;
        }
      `}</style>

      <h1>Hola Mundo!</h1>
      <p>Bienvenidos al curso de next js</p>
      <img src="static/platzi-logo-small.png" alt="Platzi" />
    </div>
  );
}
