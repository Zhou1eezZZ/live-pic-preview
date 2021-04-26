import React, { useState } from "react";
import styled from "styled-components";

const TimeLineWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  .picSwipe {
    width: 100%;
    overflow: hidden;
    display: flex;
    height: 300px;
    position: relative;
  }
  .line {
    width: 100%;
    height: 4px;
    border-radius: 3px;
    background-color: black;
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 9;
  }
`;

const DotWrapper = styled.div`
  width: 16px;
  height: 16px;
  ${(props) => props.active && `box-shadow: 0 2px 12px 0 rgb(0 0 0 / 70%);`};
  background-color: ${(props) => (props.active ? 'red' : 'black')};
  border-radius: 50%;
  position: absolute;
  bottom: 14px;
  left: ${(props) => props.left};
  z-index: 10;
  cursor: pointer;
  transform: scale(${(props) => (props.active ? 2 : 1)});
  color:${(props) => (props.active ? 'red' : 'black')};
  transition: all 0.3s;
  .dotTime {
    position: absolute;
    top: 20px;
    z-index: 10;
    width: 50px;
    text-align: center;
    left: -17px;
  }
`;

const PicWrapper = styled.div`
  transition: all 0.3s;
  width: ${(props) =>
    props.active ? `${props.maxWidth}px` : `${props.minWidth}px`};
  padding: 20px;
  border-radius: 5px;
  /* height: ${(props) => (props.active ? "300px" : "150px")}; */
  img {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 70%);
    width: calc(100% - 40px);
  }
  position: absolute;
  bottom: 0;
  left: ${(props) => props.left};
  z-index: 10;
`;

const minWidth = 100;
const maxWidth = 400;

function TimeLine({ data, title }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const clientWidth = document.body.clientWidth;
  console.log(clientWidth);

  const calcPicLeft = (index) => {
    if (activeIndex === -1) return (index - 1) * minWidth + "px";
    const minLeft =
      clientWidth -
      80 -
      (index > activeIndex ? 0 : maxWidth) -
      minWidth * (data.length - index - (index > activeIndex ? 0 : 1));
    const tap = activeIndex - 2;
    let result = 0;
    if (index <= activeIndex) {
      result = (index - (tap > 0 ? tap : 0)) * minWidth;
    } else {
      result = (index - (tap > 0 ? tap + 1 : 1)) * minWidth + maxWidth;
    }
    return (result >= minLeft ? result : minLeft) + "px";
  };

  const calcDotLeft = (index) => {
    return `calc(calc(calc(100% - 140px) * ${index / (data.length - 1)
      }) + 70px)`;
  };
  return (
    <TimeLineWrapper onMouseLeave={() => setActiveIndex(-1)}>
      <div className="picSwipe">
        {data.map((d, i) => (
          <Pic
            key={i}
            img={d.img}
            active={activeIndex === i}
            left={calcPicLeft(i)}
          />
        ))}
      </div>
      <div className="line" />
      {data.map((d, i) => (
        <Dot
          key={i}
          left={calcDotLeft(i)}
          active={activeIndex === i}
          onMouseOver={() => setActiveIndex(i)}
        >
          <div className="dotTime">{d.time}</div>
        </Dot>
      ))}
      <h3>{title}</h3>
    </TimeLineWrapper>
  );
}

function Dot({ left, ...props }) {
  return <DotWrapper left={left} {...props} />;
}

function Pic({ img, active, left }) {
  return (
    <PicWrapper
      active={active}
      left={left}
      maxWidth={maxWidth}
      minWidth={minWidth}
    >
      <img src={img} alt={""} />
    </PicWrapper>
  );
}

export default TimeLine;
