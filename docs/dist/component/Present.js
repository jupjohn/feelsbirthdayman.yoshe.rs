import{Box as M,Center as k,Divider as O,Image as w,Modal as C,ModalBody as y,ModalCloseButton as g,ModalContent as v,ModalFooter as x,ModalHeader as B,ModalOverlay as S}from"../../_snowpack/pkg/@chakra-ui/react.js";import e,{useEffect as h,useState as c}from"../../_snowpack/pkg/react.js";export const Present=({title:s,src:u,width:i,children:m,footer:p,audioClip:n,revealDelay:d,volume:r})=>{let[t,l]=c(!1),[a,f]=c(!1);h(()=>{t&&f(!0)},[t]);function E(){if(!n||a){l(!0);return}const o=new Audio(n);r&&(o.volume=r),o.play(),setTimeout(()=>{l(!0)},d)}return e.createElement(M,null,e.createElement(w,{src:u,opacity:a?.4:1,cursor:"pointer",w:i,p:6,alt:"Present clipart",onClick:()=>E()}),e.createElement(C,{isOpen:t,onClose:()=>l(!1),isCentered:!0},e.createElement(S,null),e.createElement(v,{p:"10",minW:"40vw"},e.createElement(B,{fontSize:"2xl"},s,e.createElement(O,null)),e.createElement(g,null),e.createElement(y,null,e.createElement(k,null,m)),e.createElement(x,null,p))))};
