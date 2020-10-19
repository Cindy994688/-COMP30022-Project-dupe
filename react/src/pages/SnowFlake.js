import React from 'react'

export default function SnowFlake(props) {

  var styles = {
    dot: {
      position: "absolute",
      left: props.x + "px",
      top: props.y + 'px',
      height: "10px",
      width: "10px",
      backgroundColor: "#bbb",
      borderRadius: "50%",
    }
  };


  return (
    <div style={styles.dot}></div>
  );
};
