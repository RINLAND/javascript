# Browser 좌표

- coordinates(좌표)
- Element.getBoundingCilentRect()

⇒element:DOM의 모든요소

⇒bottom, right : 항상 x와 y축 시작에서 좌표계산

- Client x,y vs Page x,y

⇒ Client x,y? 사용자가 보는 페이지 상관없이 브라우저 window 창에서 x와  y가 떨어져있는 거리

⇒Page x,y? 페이지 자체에서 떨어져있는 x와y

`DOMRect`의 주요 프로퍼티는 다음과 같습니다.

- `x`와 `y` – 요소를 감싸는 네모의 창 기준 X, Y 좌표
- `width`와 `height` – 요소를 감싸는 네모의 너비, 높이(음수도 가능)