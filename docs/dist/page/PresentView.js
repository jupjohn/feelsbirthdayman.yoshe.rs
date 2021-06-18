import{Box as s,Button as m,Flex as n,Heading as i,Image as o,LinkBox as p,LinkOverlay as c,ScaleFade as d,Text as r,VStack as h}from"../../_snowpack/pkg/@chakra-ui/react.js";import e from"../../_snowpack/pkg/react.js";import{Present as t}from"../component/index.js";import u from"../../assets/PagChomp.3x.png.proxy.js";import g from"../../assets/matArt.png.proxy.js";import f from"../../assets/present_01.png.proxy.js";import w from"../../assets/present_02.png.proxy.js";import v from"../../assets/present_03.png.proxy.js";import y from"../../assets/present_04.png.proxy.js";import b from"../../assets/present_05.jpg.proxy.js";export const PresentView=({onAllOpened:l})=>e.createElement(d,{in:!0},e.createElement(h,{shouldWrapChildren:!0},e.createElement(s,{mt:32,textAlign:"center"},e.createElement(i,{fontSize:"2xl"},e.createElement(o,{display:"inline-block",src:u,w:10,mr:5,alt:"PagChomp BetterTTV emote"}),"Presents time"),e.createElement(r,{fontSize:"lg",mt:4},"Shitty images for shitty presents, pick one!")),e.createElement(n,{w:"65vh",mt:32,ml:"auto",flexDir:"row",flexWrap:"wrap",justifyContent:"space-around"},e.createElement(t,{src:f,audioClip:"/assets/oot_reveal.mp3",revealDelay:7900,volume:.5,title:"A cameo from Carolina Ravassa",width:"20vh"},e.createElement("video",{src:"/assets/cameo.mp4",style:{maxHeight:"60vh"},onLoadStart:a=>a.currentTarget.volume=.5,controls:!0})),e.createElement(t,{src:w,audioClip:"/assets/drumroll.mp3",revealDelay:4350,volume:.2,title:"cbtDank does the wiggle",width:"20vh",footer:e.createElement(r,{fontSize:"md"},"Clipped by twitch.tv/Abillaze")},e.createElement("video",{src:"/assets/bill_twitchclip.mp4",height:"70vh",onLoadStart:a=>a.currentTarget.volume=.5,controls:!0})),e.createElement(t,{src:v,audioClip:"/assets/win95_shutdown.mp3",revealDelay:700,volume:.3,title:"Kudoboard from the Offliners",width:"20vh"},e.createElement(p,null,e.createElement(c,{href:"https://www.kudoboard.com/boards/PbUvpgXX",isExternal:!0},e.createElement(o,{src:"/assets/kudoboard-logo.webp",p:5,borderRadius:10,bg:"rgba(0, 0, 0, .3)",alt:"Kudboard logo"})))),e.createElement(t,{src:y,audioClip:"/assets/cheese.mp3",revealDelay:300,volume:.3,title:"Some weirdos saying/doing stuff",footer:e.createElement(r,{fontSize:"md"},"by whaleship, cam top left"),width:"20vh"},e.createElement(s,{w:"100%",h:"40vh"},e.createElement("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/HZYV7dKA5DQ",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}))),e.createElement(t,{src:b,audioClip:"/assets/dadSmash.mp3",revealDelay:3e3,volume:.3,title:"Fred reborn",footer:e.createElement(r,{fontSize:"md"},"Art by Mat4ba"),width:"20vh"},e.createElement(o,{src:g,w:"40vw",alt:"Dragon art by Mat4ba"}))),e.createElement(m,{colorScheme:"green",mt:20,onClick:l},"I'm finished :)")));
