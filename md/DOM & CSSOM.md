# DOM & CSSOM

모든Node는 eventtarget이다,

[Node - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Node)

[EventTarget - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/EventTarget)

- CSSOM: CSS Object Model

→compute styles based on CSS cascading rules, 모든 것들이 계산된 스타일

→제일부모에게 font size 지정하면 아래 모든 요소들도 font size 지정됨

- DOM + CSS = CSSOM
- DOM + CSSOM = Render Tree
- Render Tree : 사용자에게 궁극적으로 보여지는 아이들만 선별이 되어서 이렇게 DOM과 CSS의 스타일이 합해져서 최종적으로 트리가 만들어짐