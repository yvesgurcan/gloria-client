(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t){},116:function(e,t,n){"use strict";n.r(t);var o=n(54),r=n.n(o),a=n(11),i=n.n(a),c=n(0),l=n.n(c),s=n(55),u=n.n(s),m=n(21),d=n(3),p=n(56),b=n.n(p)()("https://54.191.191.113/"),h=n(57),f=n.n(h),g=n(6);function E(){var e=f()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return E=function(){return e},e}var v=Object(g.a)(E()),w=n(22),y=n(61),k=n.n(y),j=function(){return Object(c.useEffect)((function(){var e;e=document.createElement("div"),document.body.appendChild(e),k.a.init({container:e,tool:["console","elements"]}),console.info(w.name,w.version),window.io=b}),[]),l.a.createElement(O,null,w.version," ",l.a.createElement("button",{onClick:function(){localStorage.removeItem("3d-dome-orientationPermission"),window.location.reload()}},"Reset permissions"))},O=g.b.div.withConfig({displayName:"DeveloperTools",componentId:"lysyo6-0"})(["position:absolute;bottom:1rem;left:1rem;color:white;z-index:9999;"]),I=n(32),P=n.n(I),x=n(62),C=n.n(x),M=n(5),S=g.b.div.withConfig({displayName:"ScreenMask",componentId:"if13kp-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]),R=n(13),L=n.n(R),D=function(e){var t=Object(c.useRef)(),n=Object(M.e)().setDefaultCamera;return Object(c.useEffect)((function(){n(t.current)}),[]),Object(M.c)((function(){t.current.updateMatrixWorld()})),l.a.createElement("perspectiveCamera",L()({ref:t},e))},z=n(10),A=n.n(z),H=n(67);Object(M.b)({OrbitControls:H.a});var G=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,r=e.target,a=void 0===r?[1,.08,0]:r,i=A()(e,["autoRotate","delayRotation","target"]),s=Object(c.useRef)(),u=Object(M.e)(),m=u.camera,d=u.gl;return Object(M.c)((function(){o||s.current.update()})),l.a.createElement("orbitControls",L()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:s,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:a},i))},N=function(){return l.a.createElement(G,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},T=n(68);Object(M.b)({DeviceOrientationControls:T.a});var q=function(){var e=Object(c.useRef)(),t=Object(M.e)().camera;return Object(c.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(M.c)((function(n){var o=n.gl,r=n.scene;e.current.update(),o.render(r,t)})),l.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},F=function(e){var t=e.orientationPermission,n=e.localHost;return l.a.createElement(l.a.Fragment,null,"denied"!==t?null:n?l.a.createElement(G,null):l.a.createElement(N,null),"granted"===t&&l.a.createElement(q,null))},B=n(1),J=n(34),U=function(){var e=Object(c.useMemo)((function(){var e=new B.Mesh(new B.CylinderGeometry(6,6,20,60,4)),t=new B.Mesh(new B.CylinderGeometry(5,5,20,60,4)),n=new J.a(t),o=new J.a(e).subtract(n).toMesh();o.material=new B.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:B.FlatShading});var r=(new B.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return o.material.map=r,o.position.y=9.48,o}));return l.a.createElement("primitive",{object:e})},_=function(){return l.a.createElement("mesh",{position:[.5,-.35,0]},l.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},V=n(69);function Y(e){var t=e.to,n=void 0===t?"/pedestal":t,o=Object(c.useRef)(0),r=Object(M.d)(V.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return r.scene.scale.set(.007,.007,.007),Object(M.c)((function(){r.scene.rotation.y+=.02,0===o.current?o.current=200:(o.current>100?r.scene.position.y=r.scene.position.y-200/3e5:r.scene.position.y=r.scene.position.y+200/3e5,o.current=o.current-1)})),l.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},l.a.createElement("primitive",{object:r.scene,position:[0,0,.5]}))}var W=function(){return l.a.createElement(c.Suspense,{fallback:null},l.a.createElement(Y,null))},Z=function(e){var t=e.to,n=void 0===t?"":t,o=(e.color,e.position),r=void 0===o?[0,0,0]:o,a=e.dimension,i=void 0===a?[0,0,0]:a,c=A()(e,["to","color","position","dimension"]);return l.a.createElement("mesh",L()({position:r},c,{onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}}),l.a.createElement("boxBufferGeometry",{attach:"geometry",args:i}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},$=function(){return l.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},l.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),l.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:B.DoubleSide}))},K=function(e){var t=e.io,n=Object(c.useState)(!1),o=i()(n,2),r=o[0],a=o[1],s=Object(c.useState)(!0),u=i()(s,2),m=u[0],d=u[1],p=Object(c.useState)(),b=i()(p,2),h=b[0],f=b[1];function g(){return(g=C()(P.a.mark((function e(){var t;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r&&console.error("Device orientation permissions can not be set on localhost (not secure). Sorry!"),"function"==typeof DeviceOrientation.requestPermission){e.next=8;break}if(!navigator.userAgent.toLowerCase().includes("android")){e.next=8;break}return console.info("Android device detected. Permission granted by default."),f("granted"),e.abrupt("return");case 8:return e.next=10,DeviceOrientationEvent.requestPermission();case 10:t=e.sent,console.info({permission:t}),f(t),localStorage.setItem("3d-dome-orientationPermission",t),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(0),console.error("An error occurred while setting device orientation permission. Permission denied."),console.error({error:e.t0}),f("denied"),localStorage.setItem("3d-dome-orientationPermission","denied");case 22:case"end":return e.stop()}}),e,null,[[0,16]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e;a("localhost"===location.hostname?(console.info("This is localhost."),!0):(console.info("This is not localhost."),!1)),(e=localStorage.getItem("3d-dome-orientationPermission"))&&f(e),d(!1)}),[]),m?l.a.createElement(S,null,"Loading..."):h?l.a.createElement(M.a,{style:{background:"rgb(140, 140, 255)"}},l.a.createElement(D,{position:[0,0,0]}),l.a.createElement(F,{orientationPermission:h,localHost:r}),l.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},l.a.createElement("ambientLight",{intensity:.85}),l.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),l.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),l.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),l.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),l.a.createElement(_,null),l.a.createElement(W,null),l.a.createElement(Z,{to:"/kiosk1/".concat(t.id),position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),l.a.createElement(Z,{to:"/kiosk2/".concat(t.id),position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),l.a.createElement(Z,{to:"/kiosk3/".concat(t.id),position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),l.a.createElement(Z,{to:"/kiosk4/".concat(t.id),position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),l.a.createElement($,null),l.a.createElement(U,null))):l.a.createElement(S,null,l.a.createElement("button",{onClick:function(){return g.apply(this,arguments)}},"Enable access device orientation"))},Q=g.b.div.withConfig({displayName:"ViewContent",componentId:"sc-1m2f6qh-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),X=function(e){var t=e.back,n=e.children,o=A()(e,["back","children"]);return l.a.createElement(ee,o,l.a.createElement(Q,null,void 0!==t?t:l.a.createElement(m.b,{to:"/"},"Back"),n))},ee=g.b.div.withConfig({displayName:"ViewLayer",componentId:"sc-1ju6635-0"})(["background:",";position:absolute;top:0;left:0;width:100vw;height:100vh;box-sizing:border-box;z-index:",";color:white;"],(function(e){return e.backgroundColor}),(function(e){return e.zIndex})),te=function(e){var t=e.color,n=e.io,o=e.roomLog,r=Object(c.useState)("something"),a=i()(r,2),s=a[0],u=a[1],m=Object(d.g)(),p=m.userId,b=(A()(m,["userId"]),Object(d.f)()),h=b.search,f=b.pathname,g=(A()(b,["search","pathname"]),Object(d.e)()),E=Object(c.useMemo)((function(){return"".concat(window.location.href.replace("?join",""),"?join")}));return Object(c.useEffect)((function(){if(n&&n.id)if("?join"===h&&n.id!==p)console.log("Request to join ".concat(p,".")),n.emit("joinRoom",p);else{var e=f.split("/"),t="/".concat(e[1],"/").concat(n.id);g.push(t)}}),[n]),l.a.createElement(X,{zIndex:800,backgroundColor:t},l.a.createElement("div",null,l.a.createElement("br",null),"Send this link to play with your friends:"," ",l.a.createElement("a",{target:"_blank",href:E},E),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"Your ID: ",n&&n.id),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,"Room activity:",l.a.createElement("div",null,o.map((function(e){return l.a.createElement("div",{key:Math.random()},e)})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n.emit("message",{input:"User ".concat(n.id," said: ").concat(s),roomId:p}),u("")}},l.a.createElement("label",null,"Say something:"," ",l.a.createElement("input",{value:s,onChange:function(e){return u(e.target.value)}}),l.a.createElement("button",null,"Send")))))},ne=function(e){return l.a.createElement("model-viewer",L()({"ar-modes":"quick-look webxr scene-viewer",ar:!0,"auto-rotate":!0,"camera-controls":!0},e))},oe=function(){return l.a.createElement(ne,{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","ios-src":"https://gloria-3d-assets.s3-us-west-2.amazonaws.com/triforce.usdz"})},re=function(e){var t=e.color;return l.a.createElement(X,{backgroundColor:t},l.a.createElement(ae,null,l.a.createElement(oe,null)))},ae=g.b.div.withConfig({displayName:"Pedestal__Content",componentId:"sc-1lq04xy-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),ie=document.getElementById("root"),ce=function(){var e=Object(c.useState)([]),t=i()(e,2),n=t[0],o=t[1],a=Object(c.useRef)([]),s=Object(c.useState)(),u=i()(s,2),p=u[0],h=u[1];return Object(c.useEffect)((function(){b.on("connect",h(b)),b.on("message",(function(e){console.log(a.current,e),a.current=[].concat(r()(a.current),[e]),o(a.current)}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(j,null),l.a.createElement(m.a,null,l.a.createElement(d.a,{component:function(e){var t=e.history;return window.appHistory=t,l.a.createElement(K,{io:p})}}),l.a.createElement(d.a,{path:"/pedestal/:userId",component:function(){return l.a.createElement(re,{color:"rgb(0, 168, 224, 0.75)"})}}),l.a.createElement(d.a,{path:"/kiosk1/:userId",component:function(){return l.a.createElement(te,{color:"orange",io:p,roomLog:n})}}),l.a.createElement(d.a,{path:"/kiosk2/:userId",component:function(){return l.a.createElement(te,{color:"blue",io:p,roomLog:n})}}),l.a.createElement(d.a,{path:"/kiosk3/:userId",component:function(){return l.a.createElement(te,{color:"green",io:p,roomLog:n})}}),l.a.createElement(d.a,{path:"/kiosk4/:userId",component:function(){return l.a.createElement(te,{color:"rgb(180, 180, 0)",io:p,roomLog:n})}})))};u.a.render(l.a.createElement(ce,null),ie)},22:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.73","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","socket.io-client":"^2.3.0","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')}},[[116,1,2]]]);