import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Section() {
  const [index, setIndex] = useState(0);
  const isScrolling = useRef(false);

  window.addEventListener(
    "wheel",

    { passive: false }
  );

  useEffect(() => {
    const handleIndex = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;
      isScrolling.current = true; // 스크롤 중임을 명시
      setTimeout(() => {
        isScrolling.current = false; // 스크롤이 끝날 쯤에 다시 스크롤 false로
      }, 500);

      // e.deltaY : 휠 방향에따라 양수(내림)/ 음수(올림)
      if (e.deltaY > 0) {
        if (index < 2) setIndex(index + 1);
      } else {
        if (index > 0) setIndex(index - 1);
      }
    };
    // windwo.scrollTo() : 스크롤바를 움직이는 메서드
    //window.innerHeight : 뷰포트 높이}, [index]);
    window.addEventListener("wheel", handleIndex, { passive: false });

    window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
    //뒷정리 함수
    return () => {
      window.removeEventListener("whell", handleIndex, { passive: false });
    };
  }, [index]);

  return (
    <Container>
      <SectionItem bgColor="red">1</SectionItem>
      <SectionItem bgColor="blue">2</SectionItem>
      <SectionItem bgColor="yellow">3</SectionItem>
    </Container>
  );
}

const Container = styled.div``;

const SectionItem = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;
  color: #eee;

  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Section;
