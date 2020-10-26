import React from 'react'

export default function SnowFlake(props) {

  var styles = {
    dot: {
      left: props.x + "px",
      top: props.y + 'px',
    }
  };


  return (
    <div style={styles.dot} className="snowflake"></div>
  );
};
