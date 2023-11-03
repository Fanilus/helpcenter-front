(this.webpackJsonptymio=this.webpackJsonptymio||[]).push([[0],{11:function(e,t,i){"use strict";i.d(t,"h",(function(){return B})),i.d(t,"g",(function(){return V})),i.d(t,"b",(function(){return Q})),i.d(t,"c",(function(){return Z})),i.d(t,"d",(function(){return ee})),i.d(t,"a",(function(){return te})),i.d(t,"e",(function(){return ne})),i.d(t,"f",(function(){return oe}));var n=i(1),r=i.p+"static/media/logo.449d7110.svg",a=(i(23),i(3)),o=i(2);a.b.div`
  opacity: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${o.a.LIGHT_BLACK};
  z-index: 9999;
  transition: opacity 1s ease-in-out;

  &.preloader-hidden {
    opacity: 0;
  }

  &.d-none {
    display: none;
  }
`;var s=i(0);i(22);const l=a.b.div`
  height: ${e=>{let{height:t}=e;return t}};
  padding: 48px 40px;
  display: ${e=>{let{flex:t}=e;return t?"flex":"grid"}};
  justify-content: ${e=>{let{justify:t}=e;return t}};
  flex-direction: ${e=>{let{direction:t}=e;return t}};
  gap: ${e=>{let{noGap:t,gapPx:i}=e;return t?"0":i?"80px":void 0}};

  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 60px rgba(98, 126, 235, 0.1);
  border-radius: 20px;

  @media (max-width: 1439px) {
    padding: 35px 30px;
  }

  @media (max-width: 767px) {
    max-width: 100%;
    padding: 24px 12px;
  }
`,d=a.b.div`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  color: ${o.a.WHITE};
  text-align: ${e=>{let{align:t}=e;return t}};

  @media (max-width: 767px) {
    font-size: 32px;
  }
`,c=a.b.div`
  width: 100%;
  display: grid;
  gap: 16px;
  margin-bottom: ${e=>{let{bottom:t}=e;return t?"128px":"0"}};
`,p=a.b.div`
  width: 100%;
  display: flex;
  justify-content: ${e=>{let{center:t}=e;return t?"space-between":"center"}};
  font-size: 18px;
  color: ${o.a.WHITE};
`,x=l;x.Body=c,x.Footer=p,x.Header=d;a.b.div`
  @media (max-width: 1200px) {
    display: none;
  }
`,a.b.div`
  color: ${o.a.GRAY};
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  gap: 8px;
  &:hover {
    cursor: pointer;
  }
  svg {
    transition: transform 0.3s ease-in-out;
    transform: ${e=>{let{active:t}=e;return t&&"rotateZ(-180deg)"}};
  }
`,a.b.ul`
  transition: opacity 0.3s ease-in-out;
  opacity: ${e=>{let{active:t}=e;return t?"1":"0"}};
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  background: ${o.a.WHITE};
  border-radius: 12px;
`,a.b.li`
  padding: 6px;
  &:first-child {
    border-radius: 12px 12px 0 0;
  }
  &:last-child {
    border-radius: 0 0 12px 12px;
  }
  &:hover {
    background: ${o.a.GRAY};
    cursor: ${e=>{let{active:t}=e;return t?"pointer":"default"}};
  }
`;const h=a.b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
  counter-reset: my-awesome-counter;
  li {
    counter-increment: my-awesome-counter;

    &::before {
      content: counter(my-awesome-counter) '. ';
    }
  }
`,b=a.b.span`
  color: ${o.a.TURQUOISE};
  font-weight: ${e=>{let{font:t}=e;return"small"===t?"normal":"bold"}};
  font-size: ${e=>{let{font:t}=e;return"small"===t?"16px":"18px"}};
  text-align: left;

  @media (max-width: 767px) {
    font-size: ${e=>{let{font:t}=e;return"small"===t?"16px":"20px"}};
  }
`,u=a.b.div`
  color: ${o.a.WHITE};
  font-size: 24px;
  text-align: left;
  font-weight: ${e=>{let{font:t}=e;return"small"===t?"normal":"bold"}};

  @media (max-width: 767px) {
    font-size: 20px;
  }
`,g=h;g.Item=b,g.Title=u;const m=a.b.table`
  padding: 12px;
  border: 1px solid ${o.a.LIGHT_GRAY};
  border-radius: 30px;
  margin: 0;
  width: 100%;
  color: ${o.a.WHITE};
  display: flex;
  flex-direction: column;
  gap: 10px;

  &:hover {
    cursor: default;
  }
`,f=a.b.thead`
  margin: 0;
  font-size: 20px;

  tr {
    padding: 0 0 16px 0;
  }
`,j=a.b.tbody`
  margin: 0;
  font-size: 20px;
  font-weight: bold;

  tr {
    border-top: ${e=>{let{hr:t}=e;return t&&`3px solid ${o.a.LIGHT_BLUE}`}};
  }
`,w=a.b.tr`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px 0;

  &:hover {
    cursor: pointer;
    background-color: ${e=>{let{header:t}=e;return!t&&o.a.TRANSPARENT_BRIGHT_BLUE}};
  }

  &:last-child {
    &:hover {
      border-radius: ${e=>{let{header:t}=e;return!t&&"0 0 30px 30px"}};
    }
  }
`,O=a.b.th`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
`,v=a.b.td`
  width: 100%;
  text-align: center;
  vertical-align: top;
`,$=m;$.Body=j,$.Td=v,$.Tr=w,$.Th=O,$.Head=f;const y=a.b.div`
  color: ${o.a.WHITE};
  display: flex;
  border: 2px solid ${o.a.GRAY};
  background: ${o.a.BLACK};
  border-radius: 45px;
  padding: 12px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,E=(Object(a.b)(y)`
  border: unset;
  background: unset;
  border-radius: unset;
  padding: unset;
`,a.b.input`
  width: 100%;
  color: ${o.a.WHITE};
  font-size: 24px;
  text-align: ${e=>{let{align:t}=e;return t||"right"}};
  background: none;
  border: none;
  outline: none;
`);a.b.textarea`
  resize: none;
  overflow-y: auto;
  min-height: 33px;
  max-height: 200px;
  width: 100%;
  color: ${o.a.WHITE};
  font-size: 18px;
  text-align: ${e=>{let{align:t}=e;return t}};
  background: none;
  border: none;
  outline: none;
  @media (max-width: 767px) {
    max-height: 120px;
  }
`,Object(a.b)(E)`
  width: unset;
  &:checked {
    accent-color: ${o.a.LIGHT_BLUE};
  }
`,a.b.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 20px;
  font-weight: bold;
  user-select: none;
  color: ${e=>{let{active:t}=e;return t&&o.a.LIGHT_BLUE}};

  &:hover {
    cursor: pointer;
  }
`,a.b.a`
  padding-left: 5px;
  text-decoration: underline;
  color: ${o.a.WHITE};
  &:hover {
    color: ${o.a.WHITE};
  }
`,a.b.span``,a.b.div`
  white-space: nowrap;
  font-size: 14px;
  padding: 4px 16px;
  color: ${o.a.PINK};
`;var R=i(10);Object(a.b)(R.b)`
`;var A=i(18);const k=a.b.div`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  display: ${e=>{let{show:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: center;
  background: #0a131f;
  backdrop-filter: blur(28px);
`,L=a.b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a131f;
  backdrop-filter: blur(28px);

  @media (max-width: 992px) {
    display: none;
  }
`,I=a.b.div`
  z-index: 1;
  width: 900px;
  top: 0;
  position: fixed;
  margin: 24px 0;

  @media (max-width: 992px) {
    padding: 24px;
    width: 100%;
    background: #0a131f;
    backdrop-filter: blur(28px);
    margin: 0;
  }
`,T=a.b.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #131823;
  border-radius: 10px;
  padding: 32px;

  @media (max-width: 767px) {
    padding: 24px;
  }
`,_=a.b.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${o.a.WHITE};

  @media (max-width: 767px) {
    font-size: 22px;
  }
`,H=a.b.div`
  padding: 0 0 30px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${o.a.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .m-0 {
    margin: 0 !important;
  }
`,z=a.b.div`
  display: flex;
  justify-content: ${e=>{let{justify:t}=e;return t||"center"}};

  button {
    width: 50%;
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`,C=a.b.button`
  font-weight: bold;
  background: ${e=>{let{main:t}=e;return t?o.a.LAUNCH_PINK_RED:`linear-gradient(${o.a.PURPLE_DARK}, ${o.a.PURPLE_DARK}) padding-box, linear-gradient(90deg, #FE4C69 -8.65%, #A72174 108.02%) border-box`}};
  box-shadow: ${e=>{let{main:t}=e;return t?"0px 0px 40px rgba(254, 76, 105, 0.6)":"0px 0px 30px rgba(254, 76, 105, 0.5)"}};
  border-radius: 50px;
  padding: ${e=>{let{small:t}=e;return t?"14px 72px":"16px 86px"}};
  font-size: ${e=>{let{small:t}=e;return t?"22px":"28px"}};
  cursor: pointer;
  line-height: 1em;
  color: ${e=>{let{active:t}=e;return t?o.a.COLOR_HEX:o.a.WHITE}};

  opacity: ${e=>{let{disabled:t}=e;return t&&"0.7"}};

  border: ${e=>{let{main:t,active:i}=e;return t?"none":i?`2px solid ${o.a.WHITE}`:"2px solid transparent"}};

  &:hover {
    background: ${e=>{let{main:t}=e;return t?"none":o.a.PURPLE_DARK}};
    background-image: ${e=>{let{main:t}=e;return t?o.a.WHITE_LINER_GRADIENT:"none"}};
    color: ${e=>{let{main:t}=e;return t?o.a.COLOR_HEX:o.a.WHITE}};
    box-shadow: ${e=>{let{main:t}=e;return t?"0px 0px 25px #fe4c69":"0px 0px 30px rgba(255, 255, 255, 0.5)"}};
    border: ${e=>{let{main:t}=e;return t?"none":`2px solid ${o.a.WHITE}`}};
  }

  @media (max-width: 1366px) {
    padding: 12px 70px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 12px 60px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    padding: 12px 48px;
    font-size: 16px;
    font-weight: 700;
    max-width: ${e=>{let{size:t}=e;return"small"===t&&"300px"}};

    border: ${e=>{let{main:t,active:i}=e;return t?"none":i?`1px solid ${o.a.WHITE}`:"1px solid transparent"}};
    box-shadow: 0px 0px 20px rgba(254, 76, 105, 0.5);
  }
`;var G=()=>Object(s.jsx)("svg",{fill:"#ffd96a",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"48",x:"0px",y:"0px",viewBox:"0 0 52 52",style:{enableBackground:"new 0 0 52 52",marginRight:"15px"},xmlSpace:"preserve",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"}),Object(s.jsx)("path",{d:"M26,10c-0.552,0-1,0.447-1,1v22c0,0.553,0.448,1,1,1s1-0.447,1-1V11C27,10.447,26.552,10,26,10z"}),Object(s.jsx)("path",{d:"M26,37c-0.552,0-1,0.447-1,1v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2C27,37.447,26.552,37,26,37z"})]})});var S=()=>Object(s.jsx)("svg",{fill:"#E03C45",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"48",x:"0px",y:"0px",viewBox:"0 0 52 52",style:{enableBackground:"new 0 0 52 52",marginRight:"15px"},xmlSpace:"preserve",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"}),Object(s.jsx)("path",{d:"M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36 s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293 c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z"})]})});var P=()=>Object(s.jsx)("svg",{fill:"#13AF72",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",width:"48",x:"0px",y:"0px",viewBox:"0 0 52 52",style:{enableBackground:"new 0 0 52 52",marginRight:"15px"},xmlSpace:"preserve",children:Object(s.jsxs)("g",{children:[Object(s.jsx)("path",{d:"M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26 S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z"}),Object(s.jsx)("path",{d:"M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406 l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411 C39.251,14.885,38.62,14.922,38.252,15.336z"})]})});var B=()=>{const[e,t]=Object(n.useState)({show:!1}),[i,r]=Object(n.useState)(null);return Object(n.useEffect)((()=>{const e=A.a.state$.subscribe((e=>{t(e)}));return()=>{e.unsubscribe()}}),[]),Object(n.useEffect)((()=>(e&&((e=>{switch(e){case"success":r(P);break;case"warning":r(G);break;case"error":r(S);break;default:r(null)}})(e.type),setTimeout((()=>{document.getElementsByTagName("html")[0].style.overflowY=e.show?"hidden":"auto"}))),()=>{document.getElementsByTagName("html")[0].style.overflowY="auto"})),[e]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(k,{show:e.show,children:[Object(s.jsx)(L,{onClick:()=>A.a.hide()}),Object(s.jsx)(I,{children:Object(s.jsxs)(T,{shadow:!0,children:[Object(s.jsx)(_,{children:e.header}),Object(s.jsxs)(H,{children:[Object(s.jsx)("div",{className:"m-0",children:i}),Object(s.jsx)("div",{className:"m-0",children:e.message})]}),Object(s.jsx)(z,{children:Object(s.jsx)(C,{onClick:()=>A.a.hide(),children:"Close"})})]})})]})})};a.b.div`
  border-style: solid;
  border-width: 0.125rem 0.125rem 0 0;
  height: 1rem;
  width: 1rem;
  transition: all 0.25s ease-in-out;

  transform: ${e=>"top"===e.direction&&"rotate(-45deg)"};
  transform: ${e=>"right"===e.direction&&"rotate(45deg)"};
  transform: ${e=>"bottom"===e.direction&&"rotate(135deg)"};
  transform: ${e=>"left"===e.direction&&"rotate(-135deg)"};
`,a.b.div`
  color: ${o.a.WHITE};
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
`,a.b.div`
  padding: 3rem 0;
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.875rem;
  cursor: pointer;
  user-select: none;

  @media (max-width: 1366px) {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 767px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding: 1.5rem 0;
  }
`,a.b.div`
  max-height: ${e=>`${e.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`,a.b.div`
  padding: 0 0 3rem;
  color: ${o.a.WHITE};
  font-size: 1.5rem;
  line-height: 2.25rem;

  @media (max-width: 1366px) {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`,a.b.div`
  padding: 2rem;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;const N=a.c`
  0% {
    transform: translateY(-150%);
  }
  100% {
    transform: translateY(0);
  }
`,D=a.c`
  0% {
    transform: translateY(150%);
  }
  100% {
    transform: translateY(0);
  }
`;a.b.div`
  width: 16px;
  align-items: center;
  position: absolute;
  right: 100px;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  gap: 30px;
  flex-direction: column;
`,a.b.div`
  border-radius: 45px;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.6);

  &.active {
    width: 16px;
    height: 16px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.6);
  }
`,a.b.div`
  display: none;

  &.active {
    display: block;
    animation-name: ${e=>{let{appearDirection:t}=e;return"top"===t?N:D}};
    animation-duration: 0.7s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
`;var K=i(16);const Y=a.b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  display: ${e=>{let{show:t}=e;return t?"flex":"none"}};
  justify-content: center;
  align-items: center;
`,M=a.b.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a131f;
  backdrop-filter: blur(28px);
`,U=a.b.div`
  z-index: 1;
  width: 900px;

  @media (max-width: 992px) {
    padding: 24px;
    width: 100%;
  }
`,W=a.b.div`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #131823;
  border-radius: 10px;
  padding: 32px;

  @media (max-width: 767px) {
    padding: 24px;
  }
`,F=a.b.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  color: ${o.a.WHITE};

  @media (max-width: 767px) {
    font-size: 22px;
  }
`,X=a.b.div`
  padding: 30px 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: ${o.a.WHITE};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }

  .m-0 {
    margin: 0 !important;
  }
`,q=a.b.div`
  display: flex;
  justify-content: ${e=>{let{justify:t}=e;return t||"center"}};

  button {
    width: 50%;
  }

  @media (max-width: 767px) {
    button {
      width: 100%;
    }
  }
`;var V=()=>{const[e,t]=Object(n.useState)({show:!1}),[i,r]=Object(n.useState)(null);return Object(n.useEffect)((()=>{const e=K.a.state$.subscribe((e=>{t(e)}));return()=>{e.unsubscribe()}}),[]),Object(n.useEffect)((()=>(e&&((e=>{switch(e){case"success":r(P);break;case"warning":r(G);break;case"error":r(S);break;default:r(null)}})(e.type),setTimeout((()=>{document.getElementsByTagName("html")[0].style.overflowY=e.show?"hidden":"auto"}))),()=>{document.getElementsByTagName("html")[0].style.overflowY="auto"})),[e]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(Y,{show:e.show,children:[Object(s.jsx)(M,{onClick:()=>K.a.hide()}),Object(s.jsx)(U,{children:Object(s.jsxs)(W,{shadow:!0,children:[Object(s.jsx)(F,{children:e.header}),Object(s.jsxs)(X,{children:[Object(s.jsx)("div",{className:"m-0",children:i}),Object(s.jsx)("div",{className:"m-0",children:e.message})]}),Object(s.jsx)(q,{children:Object(s.jsx)(C,{onClick:()=>K.a.hide(),children:"Close"})})]})})]})})};a.b.div`
  width: ${e=>e.width+Math.ceil(e.width/2)}px;
  height: ${e=>e.width+Math.ceil(e.width/2)}px;
  margin: ${e=>{let{noMargin:t}=e;return t?"0":"0 auto"}};
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: ' ';
    display: block;
    width: ${e=>e.width}px;
    height: ${e=>e.width}px;
    border-radius: 50%;
    border: 6px solid ${o.a.LIGHT_BLUE};
    border-color: ${o.a.LIGHT_BLUE} transparent ${o.a.LIGHT_BLUE}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;a.b.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  margin: 0;
  padding: 0;
  color: ${o.a.WHITE};
`;const Q=a.b.div`
  min-height: 100vh;
  overflow-y: hidden;
  background-color: ${o.a.BLACK};
  &.cache {
    height: 0;
    width: 0;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1439px) {
  }
`,J=(e,t)=>{const{xs:i,md:n,lg:r,any:a}=e;switch(t){case 1439:if(r)return r;if(a)return a;break;case 767:if(n)return n;if(r)return r;if(a)return a;break;case 576:if(i)return i;if(n)return n;if(r)return r;if(a)return a;break;default:return a||""}},Z=a.b.div`
  margin: ${e=>{let{margin:t}=e;return t||0}};
  align-items: ${e=>{let{alignItems:t}=e;return t||"center"}};
  display: grid;
  grid-template-columns: ${e=>{let{columns:t,template:i}=e;return i||(t?`repeat(${t}, 1fr)`:"repeat(12, 1fr)")}};
  gap: ${e=>{let{gap:t}=e;return t||"initial"}};
  width: ${e=>{let{width:t}=e;return t}};

  @media (max-width: 1439px) {
    grid-template-columns: ${e=>{let{lgColumns:t,lgTemplate:i}=e;return i||t&&`repeat(${t}, 1fr)`}};
    gap: ${e=>{let{lgGap:t}=e;return t}};
  }

  @media (max-width: 767px) {
    grid-template-columns: ${e=>{let{mdColumns:t,mdTemplate:i}=e;return i||t&&`repeat(${t}, 1fr)`}};
    gap: ${e=>{let{mdGap:t}=e;return t}};
  }

  @media (max-width: 576px) {
    grid-template-columns: ${e=>{let{xsColumns:t,xsTemplate:i}=e;return i||t&&`repeat(${t}, 1fr)`}};
  }
`,ee=a.b.div`
  display: ${e=>{let{display:t}=e;return t||"block"}};
  grid-column: ${e=>{let{column:t}=e;return t||"span 12"}};
  grid-row: ${e=>{let{row:t}=e;return t}};
  grid-column-start: ${e=>{let{offset:t}=e;return t?t+1:0}};
  padding: 0;
  height: ${e=>{let{height:t}=e;return t||"auto"}};
  width: ${e=>{let{inline:t}=e;return t?"100%":"auto"}};
  display: ${e=>{let{inline:t,display:i}=e;return t?"inline-grid":i||"block"}};
  text-align: ${e=>{let{textAlign:t}=e;return t||"center"}};
  margin-left: ${e=>{let{floatRight:t}=e;return t&&"auto"}};

  @media (max-width: 1439px) {
    display: ${e=>{let{display:t,lgDisplay:i}=e;return J({any:t,lg:i},1439)||"block"}};
    grid-column: ${e=>{let{column:t,lgColumn:i}=e;return J({any:t,lg:i},1439)||"span 12"}};
    grid-row: ${e=>{let{row:t,lgRow:i}=e;return J({any:t,lg:i},1439)}};
    text-align: ${e=>{let{textAlign:t,lgTextAlign:i}=e;return J({any:t,lg:i},1439)||"left"}};
    grid-column-start: ${e=>{let{offset:t}=e;return t?t+1:0}};
    width: auto;
  }

  @media (max-width: 767px) {
    display: ${e=>{let{display:t,lgDisplay:i,mdDisplay:n}=e;return J({any:t,lg:i,md:n},767)||"block"}};
    grid-column: ${e=>{let{column:t,lgColumn:i,mdColumn:n}=e;return J({any:t,lg:i,md:n},767)||"span 12"}};
    grid-row: ${e=>{let{row:t,lgRow:i,mdRow:n}=e;return J({any:t,lg:i,md:n},767)}};
    text-align: ${e=>{let{textAlign:t,lgTextAlign:i,mdTextAlign:n}=e;return J({any:t,lg:i,md:n},767)||"left"}};
    grid-column-start: ${e=>{let{offset:t}=e;return t?t+1:0}};
  }

  @media (max-width: 576px) {
    display: ${e=>{let{display:t,lgDisplay:i,mdDisplay:n,xsDisplay:r}=e;return J({any:t,lg:i,md:n,xs:r},576)||"block"}};
    grid-column: ${e=>{let{column:t,lgColumn:i,mdColumn:n,xsColumn:r}=e;return J({any:t,lg:i,md:n,xs:r},576)||"span 12"}};
    grid-row: ${e=>{let{row:t,lgRow:i,mdRow:n,xsRow:r}=e;return J({any:t,lg:i,md:n,xs:r},576)}};
    text-align: ${e=>{let{textAlign:t,lgTextAlign:i,mdTextAlign:n,xsTextAlign:r}=e;return J({any:t,lg:i,md:n,xs:r},576)||"left"}};

    width: ${e=>{let{xsWidth:t}=e;return t}};
  }
`;a.b.div`
  margin: 0 auto;
  border-left: 24px solid transparent;
  border-right: 24px solid transparent;
  border-top: 32px solid rgba(19, 3, 35, 0.6);
  width: 24px;
  height: 32px;
`,a.b.svg`
  @media (max-width: 1439px) {
    height: 18px;
    width: 18px;
  }
  @media (max-width: 767px) {
    height: 16px;
    width: 16px;
  }
`;a.b.svg`
  @media (max-width: 767px) {
    width: 15px;
  }
`;var te=e=>{let{width:t,color:i}=e;const n=(e=>{switch(e){case"turquoise":return o.a.TURQUOISE;case"gray":return o.a.LIGHT_GRAY;default:return o.a.WHITE}})(i);return Object(s.jsxs)("svg",{width:t,fill:n,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 25.93 25.93",style:{enableBackground:"new 0 0 25.93 25.93"},xmlSpace:"preserve",children:[Object(s.jsxs)("g",{children:[Object(s.jsx)("g",{id:"c118_triangle",children:Object(s.jsx)("path",{d:"M25.397,4.554h-2.042l-9.974,12.644c-0.101,0.124-0.256,0.197-0.416,0.197c-0.164,0-0.315-0.073-0.419-0.197L2.575,4.554 H0.532c-0.206,0-0.392,0.115-0.479,0.299c-0.09,0.184-0.064,0.403,0.06,0.561l12.435,15.762c0.104,0.125,0.255,0.2,0.419,0.2 c0.16,0,0.315-0.075,0.416-0.2L25.816,5.413c0.128-0.157,0.148-0.377,0.058-0.561C25.789,4.669,25.601,4.554,25.397,4.554z"})}),Object(s.jsx)("g",{id:"Capa_1_184_"})]}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{}),Object(s.jsx)("g",{})]})};a.b.div`
  display: flex;
  align-items: center;

  @media (max-width: 1439px) {
    width: 35px;
  }

  @media (max-width: 767px) {
    width: 31px;
  }
`;a.b.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 31px;
  }
`;a.b.img``;const ie=a.b.img`
  /* margin-left: 8px;

  @media (max-width: 1439px) {
    width: 80px;
    height: 20px;
  }

  @media (max-width: 767px) {
    max-width: 75px;
    max-height: 18px;
  } */
`;var ne=e=>{let t,i,{size:n}=e;if("small"===n)t=100,i=15;else t=120,i=18;return Object(s.jsx)(ie,{src:r,alt:"",width:t,height:i})},re=i.p+"static/media/logo-footer.cbb36ab1.svg";const ae=a.b.img`
  /* margin-left: 8px;

  @media (max-width: 1439px) {
    width: 80px;
    height: 20px;
  }

  @media (max-width: 767px) {
    max-width: 75px;
    max-height: 18px;
  } */
`;var oe=e=>{let t,i,{size:n}=e;if("small"===n)t=124,i=83;else t=168,i=112;return Object(s.jsx)(ae,{src:re,alt:"",width:t,height:i})}},16:function(e,t,i){"use strict";var n=i(37);const r=new class{constructor(){this.initialState={show:!1,message:"",header:"",type:""},this.state$=new n.a(this.initialState)}show(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Attention";this.state$.next({...this.initialState,show:!0,message:e,type:"attention",header:t})}hide(){this.state$.next({...this.initialState,show:!1})}showError(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error";this.state$.next({...this.initialState,show:!0,message:e,type:"error",header:t})}showWarning(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Warning";this.state$.next({...this.initialState,show:!0,message:e,type:"warning",header:t})}showSuccess(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Success";this.state$.next({...this.initialState,show:!0,message:e,type:"success",header:t})}};t.a=r},18:function(e,t,i){"use strict";var n=i(37);const r=new class{constructor(){this.initialState={show:!1,message:""},this.state$=new n.a(this.initialState)}hide(){this.state$.next({...this.initialState,show:!1})}show(e){this.state$.next({...this.initialState,show:!0,message:e})}};t.a=r},2:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={RICH_BLACK:"#11071C",BLACK:"#1C102F",DARK:"#2B1C4D",RICH_PURPLE:"#3E2467",PURPLE_DARK:"#7E62CA",PURPLE_BRIGHT:"#A180FF",PURPLE_LIGHT:"#D7CBFA",GRAY_DARK:"#625C71",GRAY:"#827A95",PURPLE_GRAY:"#A093D1",LIGHT_BRIGHT:"#D9D0F1",LIGHT:"#E6E2EE",LEMON:"#C9E68C",LIME_LEMON:"#DDF0B5",WARNINGS:"#FF7996",RED:"#FC087C",PINK:"#DF39EA",BOX_SHADOW:"#EEEAF7",BOX_SHADOW_DARK:"#EEEAF7",GRADIENT_RED_PINK:"linear-gradient(90deg, #FC077A 0%, #DB3FF8 110.75%)",GRADIENT_DARK_PURPLE:"linear-gradient(180deg, rgba(28, 16, 47, 0.00) 0%, #A180FF 144.16%);",GRADIENT_DARK_PURPLE_LIGHT:" linear-gradient(180deg, rgba(230, 226, 238, 0.00) 0%, #A180FF 144.16%);",LIGHT_BLACK:"#0A131F",TRANSPARENT_BLACK:"rgb(19, 3, 35, .6)",WHITE:"#ffffff",LIGHT_BLUE:"#627EEA",BRIGHT_BLUE:"#2F8AF5",TRANSPARENT_BRIGHT_BLUE:"rgba(47, 138, 245, .25)",LIGHT_GRAY:"#BBBBBC",WHITE_LINER_GRADIENT:"linear-gradient(to right, #ffffff, #ffffff)",PINK_LINER_GRADIENT:"linear-gradient(to right, #fe0173, #d842ff)",TURQUOISE:"#1DABE3",BLUE_TO_PINK_LINER_GRADIENT:"linear-gradient(to right, rgb(17, 103, 176), rgb(167, 69, 147))",GRAY_TO_PINK:"#796E86",SEMI_LIGHT_GRAY:"#BFB8C5",LAUNCH_PINK_RED:"linear-gradient(90deg, #FE4C69 -8.65%, #A72174 108.02%)",COLOR_HEX:"#A72174",DARK_BLUE:"#627EEB"}},22:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(5),a=i(11),o=i(27),s=i(3);s.b.div`
  padding: 0 60px;
`;const l=s.b.main`
  /* @media (max-width: 1439px) {
    margin-top: 80px;
  }

  @media (max-width: 767px) {
    margin-top: 88px;
  } */
`;var d=i(0);t.default=()=>{const[e,t]=Object(n.useState)(!1),i=Object(r.m)();return Object(n.useEffect)((()=>{i.pathname.includes("/whitepaper")||i.pathname.includes("/terms")?t(!0):t(!1)}),[i.pathname]),Object(d.jsxs)(a.b,{children:[Object(d.jsx)(o.m,{light:e}),Object(d.jsx)(l,{children:Object(d.jsx)(r.a,{})}),Object(d.jsx)(o.i,{light:e})]})}},23:function(e,t,i){"use strict";i.d(t,"b",(function(){return l})),i.d(t,"a",(function(){return d}));i(16),i(18);var n=i(37),r=i(50),a=i(51),o=i(49);const s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(((i,n)=>{fetch(e+function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t="";return Object.keys(e).forEach(((i,n)=>{t+=0===n?`?${i}=${e[i]}`:`&${i}=${e[i]}`})),t}(t),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",System:!0}}).then((e=>{i(e.json())})).catch((e=>{n(new Error(e.message))}))}))};var l=new class{constructor(){this.initialState={loading:!1,error:null,statistics:null},this.state=this.initialState,this.state$=new n.a,this.apiUrl="https://api.tymio.com/api"}getData(){if(this.state.loading)return;this.state={...this.state,loading:!0},this.state$.next(this.state);Object(r.a)(s(`${this.apiUrl}/web/statistics`)).pipe(Object(a.a)(1),Object(o.a)((e=>{const{data:{statistics:{totalTradedVolume:t,totalValueLocked:i,totalOrders:n,users:r,totalPremiumGenerated:a,averageAPY:o}}}=e;return e.data.statistics.formatted.totalTradedVolume=t>999?Math.round(t/1e3*10)/10:Math.round(100*t)/100,e.data.statistics.formatted.totalTradedVolume=t>999999?Math.round(t/1e6*10)/10:e.data.statistics.formatted.totalTradedVolume,e.data.statistics.formatted.totalValueLocked=i>999?Math.round(i/1e3*10)/10:Math.round(100*i)/100,e.data.statistics.formatted.users=r>999?Math.round(r/1e3*10)/10:r,e.data.statistics.formatted.totalOrders=n>999?Math.round(n/1e3*10)/10:n,e.data.statistics.formatted.totalPremiumGenerated=a>999?Math.round(a/1e3*10)/10:Math.round(100*a)/100,e.data.statistics.formatted.averageAPY=Math.floor(o),e}))).subscribe({next:e=>{this.state={...this.state,error:null,loading:!1,statistics:e.data?e.data.statistics:null},this.state$.next(this.state)},error:e=>{this.state={...this.state,loading:!1,error:e.message},this.state$.next(this.state)}})}};var d=new class{constructor(){this.initialState={loaded:!1},this.state$=new n.a(this.initialState)}close(){this.state$.next({...this.initialState,loaded:!0})}}},27:function(e,t,i){"use strict";i.d(t,"j",(function(){return l})),i.d(t,"k",(function(){return c})),i.d(t,"l",(function(){return x})),i.d(t,"p",(function(){return u})),i.d(t,"e",(function(){return f})),i.d(t,"o",(function(){return v})),i.d(t,"q",(function(){return y})),i.d(t,"b",(function(){return S})),i.d(t,"a",(function(){return Y})),i.d(t,"n",(function(){return Q})),i.d(t,"f",(function(){return Z})),i.d(t,"m",(function(){return we})),i.d(t,"d",(function(){return ve})),i.d(t,"h",(function(){return Ie})),i.d(t,"i",(function(){return Ne})),i.d(t,"c",(function(){return We})),i.d(t,"g",(function(){return Fe}));var n=i(1),r=i(3),a=i(2);const o=r.b.h1`
  font-size: 176px;
  font-weight: 500;
  line-height: 90%;
  letter-spacing: -3.52px;
  text-transform: uppercase;
  color: ${e=>{let{color:t}=e;return t||a.a.LIGHT}};
  margin: 0;
  @media (max-width: 1439px) {
    font-size: 90px;
    letter-spacing: -1.8px;
  }
  @media (max-width: 767px) {
    font-size: 47px;
    letter-spacing: -0.94px;
  }
`;var s=i(0);var l=e=>{let{children:t,color:i,...n}=e;return Object(s.jsx)(o,{color:i,...n,children:t})};const d=r.b.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: 0.4px;
  margin: 0;
  color: ${e=>{let{color:t}=e;return t||a.a.LIGHT}};
  @media (max-width: 1439px) {
    font-size: 28px;
    letter-spacing: 0.28px;
  }
`;var c=e=>{let{children:t,color:i,...n}=e;return Object(s.jsx)(d,{color:i,...n,children:t})};const p=r.b.h1`
  font-size: ${e=>{let{mobile:t}=e;return t?"50px":"90px"}};
  font-weight: 500;
  line-height: 90%;
  color: ${e=>{let{color:t}=e;return t||a.a.LIGHT}};
  margin: 0;

  @media (max-width: 1439px) {
    font-size: 50px;
  }
`;var x=e=>{let{color:t,children:i,mobile:n}=e;return Object(s.jsx)(p,{mobile:n,color:t,children:i})};const h={large:{fontSize:"18px",letterSpacing:"0.18px",fontWeight:"400",lineHeight:"140%"},big:{fontSize:"17px",fontWeight:"400",letterSpacing:"0.34px",lineHeight:"140%"},medium:{fontSize:"16px",letterSpacing:"0.32px",lineHeight:"14px",fontWeight:"500"},small:{fontSize:"13px",letterSpacing:"0.39px",lineHeight:"15px",fontWeight:"400"}},b=r.b.p`
  margin: 0;
  font-size: ${e=>{var t;let{size:i}=e;return(null===(t=h[i])||void 0===t?void 0:t.fontSize)||h.medium.fontSize}};
  font-style: normal;
  font-weight: ${e=>{var t;let{size:i}=e;return(null===(t=h[i])||void 0===t?void 0:t.fontWeight)||h.medium.fontWeight}};
  line-height: ${e=>{var t;let{size:i,lh:n}=e;return n||(null===(t=h[i])||void 0===t?void 0:t.lineHeight)||h.medium.lineHeight}};
  letter-spacing: ${e=>{var t;let{size:i}=e;return(null===(t=h[i])||void 0===t?void 0:t.letterSpacing)||h.medium.letterSpacing}};
  color: ${e=>{let{color:t}=e;return t||a.a.LIGHT}};
  text-transform: ${e=>{let{uppercase:t}=e;return t&&"uppercase "}};
  text-align: ${e=>{let{align:t}=e;return t&&t}};

  @media (max-width: 1439px) {
    font-size: ${e=>{let{size:t}=e;return"large"===t&&"17px"}};
    letter-spacing: ${e=>{let{size:t}=e;return"large"===t&&"0.34px"}};
  }
`;var u=e=>{let{children:t,size:i,color:n,lh:r,...a}=e;return Object(s.jsx)(b,{size:i,color:n,lh:r,...a,children:t})},g=i(9);const m=r.b.button`
  padding: 14.5px 20px 12px 20px;
  border-radius: 5px;
  background: ${e=>{let{type:t}=e;switch(t){case g.a.PRIMARY:return a.a.GRADIENT_RED_PINK;case g.a.SECONDARY:return a.a.PURPLE_BRIGHT;default:return a.a.GRADIENT_RED_PINK}}};
  text-transform: ${e=>{let{common:t}=e;return!t&&"uppercase"}};
  border: none;
  font-weight: 500;
  width: fit-content;
  &:hover {
    cursor: pointer;
    background: ${e=>{let{type:t}=e;switch(t){case g.a.PRIMARY:return a.a.PINK;case g.a.SECONDARY:return a.a.PURPLE_DARK;default:return a.a.PINK}}};
  }

  &:focus {
    box-shadow: ${`0px 0px 3px 0px ${a.a.BOX_SHADOW}`};
    border: 1.5px solid ${a.a.LIGHT};
    padding: 13.5px 19px 11px 19px;
    background: ${e=>{let{type:t}=e;switch(t){case g.a.PRIMARY:return a.a.GRADIENT_RED_PINK;case g.a.SECONDARY:return a.a.PURPLE_BRIGHT;default:return a.a.GRADIENT_RED_PINK}}};
  }

  &:disabled {
    opacity: 0.5;
    background: ${e=>{let{type:t}=e;return g.a.PRIMARY,a.a.GRADIENT_RED_PINK}};
  }
`;var f=e=>{const{children:t,...i}=e;return Object(s.jsx)(m,{...i,children:t})};const j=r.b.div`
  padding: 0 10px;
  border-radius: 5px;
  display: flex;
  width: fit-content;
  background-color: ${e=>{let{light:t,scroll:i}=e;return i?"rgb(43, 28, 77, 0.9)":t?"rgba(215, 203, 250, 0.9)":"rgba(28, 16, 47, 0.9)"}};
`,w=r.b.button`
  padding: ${e=>{let{active:t}=e;return t?"13.5px 9px":"14.5px 10px"}};
  border-radius: ${e=>{let{active:t}=e;return t&&"5px"}};
  border: ${e=>{let{active:t,light:i}=e;return t?i?`1px solid ${a.a.BLACK}`:`1px solid ${a.a.LIGHT}`:"none"}};
  box-shadow: ${e=>{let{active:t,light:i}=e;return t?i?`0px 0px 3px 0px ${a.a.BOX_SHADOW_DARK}`:`0px 0px 3px 0px ${a.a.BOX_SHADOW}`:"none"}};
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;

  p {
    color: ${e=>{let{light:t}=e;return t?a.a.GRAY_DARK:a.a.PURPLE_GRAY}};
    font-weight: 500;
  }

  &:hover {
    p {
      color: ${e=>{let{light:t}=e;return t?a.a.RICH_BLACK:a.a.LIGHT}};
      font-weight: 500;
    }
  }
`,O=j;O.Item=w;var v=O,$=i(5);var y=e=>{let{scroll:t,light:i,active:n,options:r,...a}=e;const o=Object($.o)();return Object(s.jsx)(v,{scroll:t,light:i,...a,children:r.map(((e,t)=>{let{path:r,label:a}=e;return Object(s.jsx)(v.Item,{light:i,active:r===n,onClick:()=>o(r),children:Object(s.jsx)(u,{size:g.b.SMALL,children:a})},t)}))})},E=i.p+"static/media/ComplicatedGradientPink.49d0c551.svg";const R=r.b.div``,A=r.b.div`
  background-image: url(${E});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  padding: 60px;
  p {
    line-height: 140%;
    color: ${a.a.LIGHT};
  }

  @media (max-width: 1439px) {
    width: auto;
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`,k=r.b.div`
  border-top: 0.5px ${a.a.GRAY} solid;
  padding: 20px 0 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1439px) {
    padding: 20px 0 30px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,L=r.b.div`
  height: ${e=>{let{isOpen:t,itemRef:i}=e;return t?`${i.current.scrollHeight}px`:"0px"}};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`,I=r.b.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${e=>{let{expanded:t}=e;return t?a.a.PINK:a.a.LEMON}};
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    color: ${e=>{let{expanded:t}=e;return t?a.a.PINK:a.a.LIME_LEMON}};
    svg {
      transition: all 0.3s ease-in-out;
      path {
        stroke: ${e=>{let{expanded:t}=e;return t?a.a.PINK:a.a.LIME_LEMON}};
      }
    }
  }
  @media (max-width: 1439px) {
    margin-bottom: 30px;
  }
`,T=r.b.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
`,_=r.b.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  flex-basis: 50%;

  @media (max-width: 1439px) {
    height: fit-content;
    flex-basis: 33%;
    overflow-wrap: anywhere;

    div {
      margin-top: 1px;
    }
  }
`,H=r.b.div`
  flex-basis: 50%;
  flex-shrink: 0;
  padding-right: 115px;

  @media (max-width: 1439px) {
    flex-basis: 67%;
    padding-right: 0;
  }
`,z=r.b.div`
  margin-bottom: 30px;
  p {
    line-height: 140%;
  }
`;var C=e=>{let{expanded:t,size:i}=e;const n={transform:t?"rotate(180deg)":"rotate(0deg)"};let r,o;if("large"===i)r=24,o=11.2;else r=17,o=9;return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:r,height:o,viewBox:"0 0 17 9",fill:"none",style:n,children:Object(s.jsx)("path",{d:"M1 1L8.5 8L16 1",stroke:t?a.a.PINK:a.a.LEMON,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"bevel"})})};var G=e=>{let{isExpanded:t,isOpen:i,id:r,item:a,clickHandler:o}=e;const l=Object(n.useRef)(null);return Object(s.jsx)(We,{delay:1,children:Object(s.jsxs)(k,{children:[Object(s.jsx)(We,{delay:1.5,distance:"50px",children:Object(s.jsxs)(_,{children:[Object(s.jsx)(ve,{children:r+1}),Object(s.jsx)(c,{style:{lineHeight:"80%"},children:a.title})]})}),Object(s.jsxs)(H,{children:[Object(s.jsx)(z,{children:Object(s.jsx)(We,{delay:1.8,distance:"50px",children:Object(s.jsx)(u,{size:"large",dangerouslySetInnerHTML:{__html:a.description}})})}),Object(s.jsx)(We,{delay:2,distance:"50px",children:Object(s.jsxs)(I,{onClick:()=>o(r),expanded:i?t:null,children:[Object(s.jsx)(T,{children:a.question}),Object(s.jsx)(C,{expanded:i?t:null})]})}),Object(s.jsx)(L,{isOpen:i,itemRef:l,children:Object(s.jsx)(A,{ref:l,children:Object(s.jsx)(u,{children:a.answer})})})]})]},r)})};var S=e=>{let{faqList:t}=e;const[i,r]=Object(n.useState)(null),[a,o]=Object(n.useState)(!1),l=e=>{e===i?(r(null),o(!1)):(r(e),o(!0))};return Object(s.jsx)(R,{children:t.map(((e,t)=>Object(s.jsx)(G,{item:e,id:t,isExpanded:a,clickHandler:l,isOpen:t===i},t)))})};const P=r.b.div`
  height: ${e=>{let{height:t}=e;return t&&`${t}px`}};
  overflow: hidden;
  transition: height 0.2s ease-in-out;
  border-radius: 10px;
  p {
    line-height: 140%;
    color: ${a.a.LIGHT};
    padding-bottom: 30px;
  }
  a {
    text-decoration: none;
    color: ${a.a.PINK};
  }
  b {
    font-weight: 500;
  }
`,B=r.b.button`
  background: none;
  border: none;
  font: inherit;
  outline: inherit;

  text-align: left;
  width: ${e=>{let{type:t}=e;return"nested"===t&&"fit-content"}};
  display: flex;
  align-items: center;
  justify-content: ${e=>{let{type:t}=e;return"nested"===t?"flex-start":"space-between"}};
  gap: ${e=>{let{type:t}=e;return"nested"===t?"20px":"30px"}};
  margin-bottom: ${e=>{let{type:t}=e;return"nested"===t&&"30px"}};
  color: ${e=>{let{expanded:t}=e;return t?a.a.LEMON:a.a.LIGHT}};
  cursor: pointer;
  padding: ${e=>{let{type:t}=e;return"nested"===t?"10px 10px 10px 0":"0 0 30px 0"}};
  svg {
    flex-shrink: 0;
    transition: all 0.2s ease-in-out;
    path {
      stroke: ${e=>{let{expanded:t}=e;return t?a.a.LEMON:a.a.GRAY}};
    }
  }
`,N=r.b.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
  user-select: none;

  @media (max-width: 1439px) {
    font-size: 17px;
  }
`,D=r.b.div`
  width: 100%;
  border-bottom: ${e=>{let{type:t}=e;return"nested"===t?"none":`0.5px ${a.a.GRAY} solid`}};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 30px;
`,K=r.b.div`
  font-size: 18px;
  letter-spacing: 0.18px;
  font-weight: 400;
  line-height: 140%;
  color: ${a.a.LIGHT};
  padding-bottom: 30px;

  @media (max-width: 1439px) {
    font-size: 17px;
    letter-spacing: 0.34px;
  }
`;var Y=e=>{let{content:t,trigger:i,type:r}=e;const a=Object(n.useRef)(null),[o,l]=Object(n.useState)(!1),[d,c]=Object(n.useState)("0");return Object(n.useEffect)((()=>{let e=0;if(o){for(const t of a.current.children)e+=t.offsetHeight;"nested"===r&&(e="auto")}c(String(e))}),[o,r]),Object(s.jsxs)(D,{type:r,children:[Object(s.jsxs)(B,{onClick:()=>{l((e=>!e))},expanded:o,type:r,children:[Object(s.jsx)(N,{children:i}),Object(s.jsx)(C,{size:"large",expanded:o})]}),Object(s.jsx)(P,{height:d,ref:a,children:Object(s.jsx)(K,{children:t})})]})},M=i.p+"static/media/checkbox-check.e504c622.svg";const U=r.b.input`
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid ${a.a.GRAY};
  background: ${a.a.RICH_BLACK};
  padding: 10px 50px 10px 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.18px;
  line-height: 100%;
  color: ${a.a.LIGHT};
  outline: none;
  ::placeholder {
    color: ${a.a.PURPLE_GRAY};
  }
  :focus {
    border: 1px solid ${a.a.LIGHT_BRIGHT};
    background: ${a.a.DARK};
    ::placeholder {
      color: ${a.a.GRAY};
    }
  }
  @media (max-width: 1439px) {
    font-size: 13px;
  }
`,W=r.b.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: ${e=>{let{status:t}=e;return t?a.a.LIGHT:a.a.GRAY}};
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.39px;
  font-size: 13px;
  margin-right: 15px;
  cursor: pointer;
`,F=r.b.div`
  position: relative;
  width: 100%;
`,X=r.b.span`
  position: relative;
  display: inline-block;
  width: 15px;
  height: 15px;
  background: transparent;
  border-radius: 2px;
  border: 1px solid ${a.a.PURPLE_GRAY};
  :before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;

    background-image: url(${M});
    background-size: contain;
    background-repeat: no-repeat;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
  }
`,q=r.b.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  &:checked + ${X} {
    background: #eeeaf7;
    border: 1px solid ${a.a.LIGHT};
    :before {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`,V=r.b.label`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  p {
    color: ${a.a.PURPLE_GRAY};
    span {
      color: ${a.a.PURPLE_BRIGHT};
      cursor: pointer;
    }
  }
`;var Q=e=>{let{placeholder:t,checkbox:i,paste:r,label:a}=e;const[o,l]=Object(n.useState)(""),[d,c]=Object(n.useState)(!1),[p,x]=Object(n.useState)(!1);return Object(s.jsxs)(F,{children:[i?Object(s.jsxs)(V,{htmlFor:"check",children:[Object(s.jsx)(q,{type:"checkbox",id:"check",name:"check",checked:d,onChange:()=>{c(!d)}}),Object(s.jsx)(X,{}),Object(s.jsx)(u,{size:"small",children:a})]}):Object(s.jsx)(U,{placeholder:t,value:o,onChange:e=>{l(e.target.value)},onFocus:()=>{x(!0)},onBlur:()=>{x(!1)}}),r&&(o.length>0?Object(s.jsx)(W,{status:p,onClick:()=>{l("")},children:"Clean"}):Object(s.jsx)(W,{status:p,onClick:()=>{navigator.clipboard.readText().then((e=>{l(e)})).catch((e=>{console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430: ",e)}))},children:"Paste"}))]})};const J=r.b.div`
  border-radius: 10px;
  background: ${a.a.RICH_BLACK};
  padding: 30px;

  @media (max-width: 1439px) {
    padding: 30px 20px;
  }
  @media (max-width: 767px) {
    border-radius: ${e=>{let{xsRadius:t}=e;return t}};
  }
`;var Z=e=>{let{children:t,...i}=e;return Object(s.jsx)(J,{...i,children:t})},ee=i(10);var te=()=>{const e=[{label:"how it works",path:"/how_it_work"},{label:"Use cases",path:"/use_cases"},{label:"Safety",path:"/safety"},{label:"FAQ",path:"/faq"},{label:"Ambassadors",path:"/ambassadors"}],t=[{label:"How it works",path:"/how_it_work"},{label:"Use cases",path:"/use_cases"},{label:"Safety",path:"/safety"},{label:"FAQ",path:"/faq"},{label:"Ambassadors",path:"/ambassadors"},{label:"White Paper",path:"/whitepaper"},{label:"Terms Of Use",path:"https://app.tymio.com/terms"}],i=[{label:"DeBank",path:"https://debank.com/official-account/111827"},{label:"Telegram",path:"https://t.me/tymioapp"},{label:"Twitter",path:"https://twitter.com/TYMIOapp"},{type:"mail",label:"info@Tymio.com",path:"mailto:info@Tymio.com"}],n=[{label:"How it works",path:"/how_it_work"},{label:"Use cases",path:"/use_cases"},{label:"Safety",path:"/safety"},{label:"FAQ",path:"/faq"},{label:"Ambassadors",path:"/ambassadors"},{label:"White Paper",path:"/whitepaper"},{label:"Terms Of Use",path:"/terms"}];return{header:e,media:i,burger:t,footer:n,allRoutes:[...e,...i,...t,...n]}};const ie=Object(r.b)(ee.b)`
  cursor: pointer;
  line-height: 0;
`,ne=r.b.div`
  position: fixed;
  display: flex;
  width: fit-content;
  justify-content: flex-end;
  gap: 10px;
  right: 0;
  top: 0;
  padding: 20px 30px;
  z-index: 10;

  @media (max-width: 1439px) {
    display: none;
  }
`,re=r.b.header`
  position: absolute;
  z-index: 2;
  padding: 20px 60px;

  @media (max-width: 1439px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
  }

  @media (max-width: 767px) {
    padding: 15px;
  }
`,ae=r.b.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 1439px) {
    align-items: flex-start;
  }
`,oe=Object(r.b)(ae)`
  display: none;

  @media (max-width: 1439px) {
    display: flex;
  }
`,se=r.b.div`
  position: fixed;
  top: 15px;
  right: 30px;
  padding: 13px;
  border-radius: 5px;
  background: ${a.a.PURPLE_BRIGHT};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 15px;
  }
`,le=r.b.div`
  width: 20px;
  height: 2px;
  background: ${a.a.BLACK};
`,de=r.b.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: ${e=>{let{active:t}=e;return t?"0":"-100%"}};
  height: 100vh;
  z-index: 10;
  visibility: ${e=>{let{active:t}=e;return t?"visible":"hidden"}};
  opacity: ${e=>{let{active:t}=e;return t?"1":"0"}};
  transition: all 0.3s;
  width: ${e=>{let{active:t}=e;return t&&"100%"}};
`,ce=r.b.div`
  width: 50%;
  position: relative;
  background-color: ${a.a.DARK};
  height: 100%;
  padding: 85px 30px 0 30px;
  transition: all 0.6s;
  z-index: 10;

  button {
    margin-top: 45px;
    width: 100%;
  }

  @media (max-width: 1439px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 75px 15px 0 15px;
  }
`,pe=r.b.ul`
  list-style-type: none;
  max-width: 462px;
  padding: 0;
  margin-left: auto;
`,xe=r.b.li`
  position: relative;
  margin-bottom: 15px;
  font-size: 28px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.28px;
  cursor: pointer;

  a {
    color: ${a.a.LIGHT};
    text-decoration: none;
  }

  &:hover {
    a {
      color: ${a.a.PINK};
    }
  }
`,he=r.b.div`
  margin-top: 15px;
  height: 1px;
  background: ${a.a.GRAY};
`,be=r.b.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${a.a.TRANSPARENT_BLACK};
  opacity: 0.75;
  z-index: 5;
`,ue=r.b.div`
  position: absolute;
  top: 15px;
  right: 30px;
  padding: 10px 13px;
  border-radius: 5px;
  background: ${a.a.BLACK};
  height: 41px;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 15px;
  }
`,ge=r.b.div`
  position: absolute;
  left: 30px;
  top: 15px;

  @media (max-width: 767px) {
    left: 15px;
  }
`;var me=i.p+"static/media/cross-purple.42cc4e1a.svg",fe=i(11);var je=()=>{const{burger:e}=te(),[t,i]=Object(n.useState)(!1),r=()=>{i((e=>!e))};return Object(n.useEffect)((()=>{document.getElementsByTagName("html")[0].style.overflowY=t?"hidden":"auto"}),[t]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(se,{onClick:r,children:[Object(s.jsx)(le,{}),Object(s.jsx)(le,{long:!0}),Object(s.jsx)(le,{})]}),Object(s.jsxs)(de,{active:t?"true":void 0,children:[Object(s.jsxs)(ce,{children:[Object(s.jsx)(ge,{onClick:r,children:Object(s.jsx)(ee.b,{to:"/",children:Object(s.jsx)(fe.e,{})})}),Object(s.jsx)(ue,{onClick:r,children:Object(s.jsx)("img",{src:me,alt:""})}),Object(s.jsxs)(pe,{children:[e.map(((e,t)=>{let{path:i,label:n}=e;return Object(s.jsxs)(xe,{children:[Object(s.jsx)(ee.b,{to:i,onClick:r,children:n}),Object(s.jsx)(he,{})]},t)})),Object(s.jsx)(f,{type:g.a.PRIMARY,children:Object(s.jsx)(u,{color:a.a.BLACK,onClick:()=>window.open("https://app.tymio.com","_blank"),children:"Start earning"})})]})]}),Object(s.jsx)(be,{onClick:r})]})]})};var we=e=>{let{light:t}=e;const{header:i}=te(),[r,a]=Object(n.useState)(!1),o=Object($.m)(),[l,d]=Object(n.useState)();return Object(n.useEffect)((()=>{d(o.pathname)}),[o.pathname]),Object(n.useEffect)((()=>{if("undefined"!==typeof window){const e=()=>{window.scrollY>0?a(!0):a(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}}),[]),Object(s.jsxs)(re,{children:[Object(s.jsx)(ie,{to:"/",children:Object(s.jsx)(fe.e,{})}),Object(s.jsxs)(ne,{children:[Object(s.jsx)(y,{scroll:t?null:r,options:i,light:t,active:l}),Object(s.jsx)(f,{type:g.a.SECONDARY,onClick:()=>window.open("https://app.tymio.com","_blank"),children:"Start earning"})]}),Object(s.jsx)(oe,{children:Object(s.jsx)(je,{})})]})};const Oe=r.b.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${a.a.LEMON};
  border-radius: 10px;
  min-width: ${e=>{let{width:t}=e;return t||"30px"}};
  height: ${e=>{let{height:t}=e;return t||"30px"}};
  padding: ${e=>{let{padding:t}=e;return t||"0px"}};
  p {
    font-weight: 500;
    color: ${a.a.BLACK};
  }
`;var ve=e=>{let{children:t,height:i,width:n,padding:r,size:a}=e;return Object(s.jsx)(Oe,{padding:r,height:i,width:n,children:Object(s.jsx)(u,{size:"medium",children:t})})};i(23);var $e=function(e){const t=Object(n.useRef)(),i=Object(n.useRef)();return Object(n.useEffect)((()=>{t.current=e})),Object(n.useEffect)((()=>{return document.addEventListener("click",e),()=>document.removeEventListener("click",e);function e(e){i.current&&t.current&&!i.current.contains(e.target)&&t.current(e)}}),[]),i};const ye=Object(r.b)("div")`
  width: fit-content;
  position: relative;
  z-index: 1;
  width: 100%;
`,Ee=Object(r.b)("div")`
  width: 100%;
  border-radius: 5px;
  border: 0.5px solid ${e=>{let{isOpen:t}=e;return t?a.a.LIGHT:a.a.GRAY}};
  background: ${e=>{let{isOpen:t}=e;return t?a.a.DARK:a.a.RICH_BLACK}};
  padding: 11.5px 15px 11.5px 15px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.18px;
  line-height: 100%;
  color: ${e=>{let{isOpen:t,valueSelected:i}=e;return t||"Country"!==i?a.a.LIGHT:a.a.PURPLE_GRAY}};
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
  svg {
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 1439px) {
    font-size: 13px;
  }
`,Re=Object(r.b)("div")`
  position: absolute;
  width: 100%;
  top: 40px;
`,Ae=Object(r.b)("ul")`
  margin: 0;
  background: ${a.a.BLACK};
  border-radius: 0px 0px 5px 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 213px;
  overflow-y: scroll;

  border-right: 1px solid ${a.a.LIGHT_BRIGHT};
  border-bottom: 1px solid ${a.a.LIGHT_BRIGHT};
  border-left: 1px solid ${a.a.LIGHT_BRIGHT};
  background: ${a.a.DARK};
  user-select: none;

  ::-webkit-scrollbar {
    width: 15px;
  }

  ::-webkit-scrollbar-thumb {
    border: 5px solid ${a.a.DARK};
    background-color: ${a.a.PURPLE_GRAY};
    border-radius: 16px;
  }
`,ke=Object(r.b)("li")`
  list-style: none;
  color: ${a.a.LIGHT};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: 0.39px;
  text-transform: capitalize;
  padding: 5px;

  &:hover {
    border-radius: 5px;
    background: ${a.a.PURPLE_GRAY};
    color: ${a.a.BLACK};
    cursor: pointer;
  }
`;var Le=function(e){let{isOpen:t}=e;const i={transform:t?"rotate(180deg)":"rotate(0deg)"};return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"9",fill:"none",viewBox:"0 0 17 9",style:i,children:Object(s.jsx)("path",{stroke:"#827A95",strokeLinecap:"round",strokeLinejoin:"bevel",strokeWidth:"1.5",d:"M1 1l7.5 7L16 1"})})};var Ie=e=>{let{options:t,onSelectAction:i,children:r,valueSelected:a}=e;const o=$e((e=>{l&&d(!1)})),[l,d]=Object(n.useState)(!1);return Object(s.jsxs)(ye,{ref:o,children:[Object(s.jsxs)(Ee,{valueSelected:a,isOpen:l,onClick:()=>d(!l),children:[Object(s.jsx)("span",{children:r}),Object(s.jsx)(Le,{isOpen:l})]}),l&&Object(s.jsx)(Re,{children:Object(s.jsx)(Ae,{children:t.map(((e,t)=>{return Object(s.jsx)(ke,{onClick:(n=e,()=>{d(!1),i&&i(n)}),children:e},t);var n}))})})]})};const Te=r.b.footer`
  padding: 20px 60px 60px 60px;
  background: ${e=>{let{light:t}=e;return t?"linear-gradient(180deg, rgba(230, 226, 238, 0.00) 0%, #A180FF 350%)":"linear-gradient(rgba(28, 16, 47, 0) 0%, rgb(161, 128, 255) 350%)"}};
  background-color: ${e=>{let{light:t}=e;return t?a.a.LIGHT:"transparent"}};

  @media (max-width: 1439px) {
    padding: 30px;
  }

  @media (max-width: 767px) {
    padding: 30px 15px;
  }
`,_e=r.b.div`
  display: flex;
  justify-content: space-between;
`,He=r.b.div`
  width: 100%;
  height: 0.5px;
  background: ${a.a.GRAY};
  margin-bottom: 30px;

  @media (max-width: 1439px) {
    margin-bottom: 15px;
  }
`,ze=r.b.div`
  img {
    margin-bottom: 20px;
  }

  @media (max-width: 1439px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 125px;
      height: 83px;
      margin-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    p {
      padding-bottom: 4px;
    }
  }
`,Ce=r.b.div`
  display: flex;
  gap: 140px;
`,Ge=r.b.div`
  @media (max-width: 1439px) {
    display: none;
  }
`,Se=r.b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-wrap: wrap;
  height: 100px;

  @media (max-width: 1439px) {
    display: none;
  }
`,Pe=r.b.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,Be=r.b.div`
  margin-left: 60px;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  @media (max-width: 767px) {
    margin-left: 20px;
  }
`;var Ne=e=>{let{light:t}=e;const{footer:i,media:n}=te();return Object(s.jsxs)(Te,{light:t,children:[Object(s.jsx)(He,{}),Object(s.jsxs)(_e,{children:[Object(s.jsxs)(ze,{children:[Object(s.jsx)(fe.f,{}),Object(s.jsx)(u,{color:a.a.GRAY,size:g.b.SMALL,children:"\xa9 2023 Tymio. All rights reserved."})]}),Object(s.jsxs)(Ce,{children:[Object(s.jsx)(Se,{children:i.map(((e,t)=>{let{label:i,path:n}=e;return Object(s.jsx)(Be,{children:Object(s.jsx)(ee.b,{to:n,children:Object(s.jsx)(u,{color:a.a.PURPLE_DARK,size:g.b.LARGE,children:i})})},t)}))}),Object(s.jsx)(Pe,{children:n.map(((e,t)=>{let{label:i,path:n,type:r}=e;return Object(s.jsx)(Be,{children:Object(s.jsx)("a",{href:n,rel:"mail"!==r?"noreferrer":[],target:"mail"!==r?"_blank":"_self",children:Object(s.jsx)(u,{color:a.a.PURPLE_DARK,size:g.b.LARGE,children:i})})},t)}))})]}),Object(s.jsx)(Ge,{})]})]})};i(22);const De=r.c`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,Ke=r.c`
  0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`,Ye=r.b.div`
  opacity: ${e=>{let{type:t}=e;return"text"===t?1:0}};
  ${e=>{let{type:t}=e;return"text"===t&&r.a`
      animation: none;
    `}};
  ${e=>{let{active:t,type:i}=e;return t&&"opacity"===i&&r.a`
      animation: ${De} 0.5s ease-out;
    `}};
  ${e=>{let{active:t,type:i,distance:n}=e;return t&&!i&&r.a`
      animation: ${(e=>r.c`
  from {
    transform: translateY(${e||"100px"});
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`)(n)} 0.5s ease-out;
    `}};

  animation-duration: ${e=>{let{duration:t}=e;return t||.5}}s;
  animation-delay: ${e=>{let{delay:t}=e;return t||0}}s;
  animation-fill-mode: both;
`,Me=r.b.div`
  position: relative;
  display: ${e=>{let{type:t}=e;return"text"===t?"inline-block":"block"}};
`,Ue=r.b.div`
  position: absolute;
  right: -100px;
  width: 100px;
  height: 14px;
  background: rgba(215, 203, 250, 0.25);
  animation: ${Ke} 0.6s ease-out infinite;

  @media (max-width: 1439px) {
    right: -64px;
    width: 64px;
    height: 10px;
  }
  @media (max-width: 767px) {
    right: -38px;
    width: 38px;
    height: 6px;
  }
`;var We=e=>{let{children:t,type:i,...r}=e;const a=Object(n.useRef)(),[o,l]=Object(n.useState)(!1),[d,c]=Object(n.useState)(!1),[p,x]=Object(n.useState)(!1),h=Object(n.useRef)(window.scrollY);return Object(n.useLayoutEffect)((()=>{const e=()=>{if(!p){const e=a.current.getBoundingClientRect(),t=window.scrollY>=h.current;t&&e.top<=window.innerHeight&&e.top>=0||!t&&e.bottom<=window.innerHeight&&e.bottom>=0?(c(!0),x(!0)):c(!1)}h.current=window.scrollY};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[p]),Object(n.useEffect)((()=>{if("text"===i&&d&&p){const e=a.current.innerHTML.split("");a.current.innerHTML="";let t=0;setTimeout((()=>{const i=setInterval((()=>{a.current?(a.current.innerHTML+=" "===e[t]?"&nbsp;":e[t],t++,t>=e.length&&(setTimeout((()=>{l(!0)}),600),clearInterval(i))):clearInterval(i)}),40)}),600)}}),[i,d,p]),Object(s.jsxs)(Me,{type:i,children:[Object(s.jsx)(Ye,{active:d&&p,ref:a,type:i,...r,children:t}),"text"===i&&!o&&Object(s.jsx)(Ue,{})]})};const Fe=r.b.div`
  max-width: 1320px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1439px) {
    margin: unset;
    max-width: unset;
    position: unset;
  }
`},42:function(e,t,i){},48:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),a=i(33),o=i.n(a),s=i(10),l=(i(42),i(11)),d=i(5),c=i(0);const p=Object(n.lazy)((()=>Promise.resolve().then(i.bind(null,22)))),x=Object(n.lazy)((()=>i.e(4).then(i.bind(null,417)))),h=Object(n.lazy)((()=>i.e(2).then(i.bind(null,414)))),b=Object(n.lazy)((()=>i.e(7).then(i.bind(null,415)))),u=Object(n.lazy)((()=>i.e(6).then(i.bind(null,418)))),g=Object(n.lazy)((()=>i.e(5).then(i.bind(null,416))));var m=()=>Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.h,{}),Object(c.jsx)(l.g,{}),Object(c.jsx)(n.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(d.d,{children:Object(c.jsxs)(d.b,{path:"/",element:Object(c.jsx)(p,{}),children:[Object(c.jsx)(d.b,{path:"/",element:Object(c.jsx)(h,{})}),Object(c.jsx)(d.b,{path:"/:elementId",element:Object(c.jsx)(h,{})}),Object(c.jsx)(d.b,{path:"/whitepaper",element:Object(c.jsx)(b,{})}),Object(c.jsx)(d.b,{path:"/terms",element:Object(c.jsx)(u,{})}),Object(c.jsx)(d.b,{path:"/ambassadors",element:Object(c.jsx)(g,{})}),Object(c.jsx)(d.b,{path:"/ui",element:Object(c.jsx)(x,{})}),Object(c.jsx)(d.b,{path:"*",element:Object(c.jsx)(h,{})})]})})})]});o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{children:Object(c.jsx)(m,{})})}),document.getElementById("root"))},9:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return r}));const n={PRIMARY:"primary",SECONDARY:"secondary"},r={LARGE:"large",MEDIUM:"medium",SMALL:"small"}}},[[48,1,3]]]);
//# sourceMappingURL=main.bfb48e1e.chunk.js.map