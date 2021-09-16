# Browser 구조 분석

- Document

→페이지가 표기되는 부분, html에 작성한 요소가 표시되는부분

- Navigator

→window에 관련된 브라우저 자체에 관한 정보가 담겨있음

- BOM

→browser object model

```jsx
//chrome console 창에서 입력하면
console.log(this)

//결과
Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
```

→ 이유: global object가 window라서

[Window - Web API | MDN](https://developer.mozilla.org/ko/docs/Web/API/Window)

- window.screen:
- window.outer:
- window.inner:
- documentElement.clientWidth: