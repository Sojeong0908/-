import { useState } from "react";
import styled from "styled-components";

const PI = 3.14; // 상수(Constant)는 재할당 불가능. 객체의 속성값은 변경 가능.

function Slider() {
  const [상태, 최신화] = useState(0);
  // 이전 버튼 클릭시 index 1 줄어들고, 다음은 1증가

  const 상태증가 = () => {
    if (상태 < 2) 최신화(상태 + 1);
  };
  const 상태감소 = () => {
    if (상태 > 0) 최신화(상태 - 1);
  };

  return (
    <Container>
      <SlideList index={상태}>
        <SlideItem bgColor="red">
          <img src={process.env.PUBLIC_URL + "/짱구_01.jpg"} alt="떡잎방범대" />
        </SlideItem>
        <SlideItem bgColor="yellow">
          <img src={process.env.PUBLIC_URL + "/짱구_02.png"} alt="짱구야구" />
        </SlideItem>
        <SlideItem bgColor="blue">
          <img
            src={process.env.PUBLIC_URL + "/짱구_03.png"}
            alt="짱구랑 흰둥이"
          />
        </SlideItem>
      </SlideList>
      <button onClick={상태감소}>이전</button>
      <button onClick={상태증가}>다음</button>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eee;
  overflow: hidden;
`;

const SlideList = styled.ul`
  display: flex;
  transform: translate(${({ index }) => index * -100}%);
  transition: transform 0.3s;
`;

const SlideItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  border: 1px solid black;
  list-style: none;
  width: 100%;
  height: 300px;
  flex-shrink: 0;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Slider;
