# styled component 변환 실습

[해당 페이지](https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/)와
[해당 수업](https://courses.joshwcomeau.com/css-for-js)을 참고하여 실습한 내용임.

styled-component로 변환한 후의 명확한 장점?

1. class nesting이 필요 없음. - 매우 중요

- &(self-reference)로 자기 스타일은 자기가 책임진다.

2. 더 명확한 이름
3. 스타일 충돌 걱정 및 벤더프리픽스 걱정을 안해도 됨.

- 이건 명시적이진 않음.

4. className 속성을 사용하지 않음.

- 이건 tailwind같은 프레임워크를 사용하면서도 점차 나타나는 현상.

<iframe src="https://codesandbox.io/embed/css-to-styledcomponent-271ce?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css-to-styledcomponent"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
