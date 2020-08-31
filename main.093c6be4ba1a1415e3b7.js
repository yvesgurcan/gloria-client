(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"name":"3d-dome","description":"🐟 It\'s 3D and it\'s beautiful.","version":"0.0.61","license":"MIT","author":"Yves Gurcan","repository":{"type":"git","url":"https://github.com/yvesgurcan/3d-dome"},"main":"index.js","scripts":{"start":"npm run network-info; webpack-dev-server","build":"webpack --mode production","postversion":"npm run build && git add . && git commit -m \'New build\' && git push","network-info":"echo \\"ℹ ｢wds｣ Running on local network at http:/\\" | tr \\"\\n\\" \\"/\\"; ifconfig | grep \\"inet \\" | grep -Fv 127.0.0.1 | awk \'{print $2}\'"},"devDependencies":{"@babel/core":"^7.11.1","@babel/plugin-proposal-class-properties":"^7.10.4","@babel/plugin-transform-runtime":"^7.11.0","@babel/preset-env":"^7.11.0","@babel/preset-react":"^7.10.4","@types/react":"^16.9.43","@types/react-dom":"^16.9.8","@types/react-router-dom":"^5.1.5","@types/styled-components":"^5.1.2","babel-loader":"^8.1.0","babel-plugin-styled-components":"^1.11.1","clean-webpack-plugin":"^3.0.0","html-webpack-plugin":"^4.3.0","react":"^16.13.1","react-dom":"^16.13.1","react-router":"^5.2.0","react-router-dom":"^5.2.0","styled-components":"^5.1.1","ts-loader":"^8.0.1","typescript":"^3.9.7","webpack":"^4.44.1","webpack-cli":"^3.3.12","webpack-dev-server":"^3.11.0","workbox-webpack-plugin":"^5.1.3"},"dependencies":{"eruda":"^2.3.3","react-three-fiber":"^4.2.20","three":"^0.119.1","three-js-csg-es6":"^73.0.0"}}')},61:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(27),i=n.n(a),c=n(16),s=n(3),l=n(19),u=n(28),m=n.n(u),d=n(20),p=n.n(d),b=n(29),h=n.n(b),g=n(21),f=n.n(g),v=n(10),w=n.n(v),y=n(5),E=n(30),k=n.n(E),O=n(9);function j(){var e=k()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return j=function(){return e},e}var P=Object(O.a)(j()),x=n(12),M=n.n(x),I=n(34);Object(y.b)({OrbitControls:I.a});var C=function(e){var t=e.autoRotate,n=void 0!==t&&t,a=e.delayRotation,i=e.target,c=void 0===i?[1,.08,0]:i,s=M()(e,["autoRotate","delayRotation","target"]),l=Object(r.useRef)(),u=Object(y.e)(),m=u.camera,d=u.gl;return Object(y.c)((function(){a||l.current.update()})),o.a.createElement("orbitControls",w()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:40,ref:l,args:[m,d.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:c},s))},S=function(){return o.a.createElement(C,{enableZoom:!1,keys:{LEFT:37,RIGHT:39},minAzimuthAngle:Math.PI,maxAzimuthAngle:0,minPolarAngle:Math.PI/2.3,maxPolarAngle:Math.PI/1.5})},R=n(39);Object(y.b)({DeviceOrientationControls:R.a});var z=function(){var e=Object(r.useRef)(),t=Object(y.e)().camera;return Object(r.useEffect)((function(){return e.current.connect(),function(){e.current.disconnect()}}),[]),Object(y.c)((function(n){var r=n.gl,o=n.scene;e.current.update(),r.render(o,t)})),o.a.createElement("deviceOrientationControls",{ref:e,args:[t]})},D=n(1),L=n(23),q=function(){var e=Object(r.useMemo)((function(){var e=new D.Mesh(new D.CylinderGeometry(6,6,20,60,4)),t=new D.Mesh(new D.CylinderGeometry(5,5,20,60,4)),n=new L.a(t),r=new L.a(e).subtract(n).toMesh();r.material=new D.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:D.FlatShading});var o=(new D.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return r.material.map=o,r.position.y=9.48,r}));return o.a.createElement("primitive",{object:e})},G=function(){return o.a.createElement("mesh",{position:[.5,-.35,0]},o.a.createElement("cylinderGeometry",{attach:"geometry",args:[.3,.3,.25,100]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},A=n(40);function N(e){var t=e.to,n=void 0===t?"/triforce":t,a=Object(r.useRef)(0),i=Object(y.d)(A.a,"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce/scene.gltf");return i.scene.scale.set(.007,.007,.007),Object(y.c)((function(){i.scene.rotation.y+=.02,0===a.current?a.current=200:(a.current>100?i.scene.position.y=i.scene.position.y-200/3e5:i.scene.position.y=i.scene.position.y+200/3e5,a.current=a.current-1)})),o.a.createElement("mesh",{rotation:[0,Math.PI/2,0],onClick:function(){return window.appHistory.push(n)},onPointerUp:function(){return window.appHistory.push(n)}},o.a.createElement("primitive",{object:i.scene,position:[0,0,.5]}))}var T=function(){return o.a.createElement(r.Suspense,{fallback:null},o.a.createElement(N,null))},F=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,r=e.dimension,a=void 0===r?[0,0,0]:r,i=M()(e,["color","position","dimension"]);return o.a.createElement("mesh",w()({position:n},i),o.a.createElement("boxBufferGeometry",{attach:"geometry",args:a}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},H=function(){return o.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},o.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),o.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:D.DoubleSide}))},B=O.b.div.withConfig({displayName:"PermissionScreen",componentId:"sc-1svkdm1-0"})(["width:100vw;height:100vh;background:black;display:flex;justify-content:center;align-items:center;color:white;"]);function J(e){var t=Object(r.useRef)(),n=Object(y.e)().setDefaultCamera;return Object(r.useEffect)((function(){n(t.current)}),[]),Object(y.c)((function(){t.current.updateMatrixWorld()})),o.a.createElement("perspectiveCamera",w()({ref:t},e))}var _,U=function(){var e=Object(r.useState)(!0),t=f()(e,2),n=t[0],a=t[1],i=Object(r.useState)(),c=f()(i,2),s=c[0],l=c[1];function u(){return(u=h()(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.info("requestOrientationPermission"),e.prev=1,void 0!==z){e.next=11;break}return console.warn("DeviceOrientation is not defined."),"denied",console.info({permission:"denied"}),l("denied"),localStorage.setItem("3d-dome-orientationPermission","denied"),e.abrupt("return");case 11:if("function"==typeof z.requestPermission){e.next=18;break}return console.warn("DeviceOrientation.requestPermission is not a function."),"denied",console.info({permission:"denied"}),l("denied"),localStorage.setItem("3d-dome-orientationPermission","denied"),e.abrupt("return");case 18:return e.next=20,DeviceOrientationEvent.requestPermission();case 20:t=e.sent,console.info({permission:t}),l(t),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(1),console.error({error:e.t0}),l("denied");case 29:case"end":return e.stop()}}),e,null,[[1,25]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=localStorage.getItem("3d-dome-orientationPermission");e&&l(e),a(!1)})),n?o.a.createElement(B,null,o.a.createElement(P,null),"Loading..."):s?o.a.createElement("span",null,o.a.createElement(P,null),o.a.createElement(y.a,{style:{background:"rgb(140, 140, 255)"}},o.a.createElement(J,{position:[0,0,0]}),"denied"!==s?null:"localhost"===location.hostname?o.a.createElement(C,null):o.a.createElement(S,null),"granted"===s&&o.a.createElement(z,null),o.a.createElement("group",{position:[4,0,0],rotation:[0,-Math.PI,0]},o.a.createElement("ambientLight",{intensity:.85}),o.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),o.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),o.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),o.a.createElement(G,null),o.a.createElement(T,null),o.a.createElement(F,{position:[1.25,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),o.a.createElement(F,{position:[1.25,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),o.a.createElement(F,{position:[-1.5,0,-1.25],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),o.a.createElement(F,{position:[-1.5,0,1.25],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),o.a.createElement(H,null),o.a.createElement(q,null)))):o.a.createElement(B,null,o.a.createElement(P,null),o.a.createElement("button",{onClick:function(){return u.apply(this,arguments)}},"Enable access device orientation"))},V=O.b.div.withConfig({displayName:"MenuOverlay",componentId:"ril51u-0"})(["position:absolute;top:0;left:0;padding:3rem;width:100vw;height:100vh;box-sizing:border-box;color:white;z-index:",";"],(function(e){return e.zIndex})),W=O.b.div.withConfig({displayName:"MenuContent",componentId:"t058qg-0"})(["background:",";padding:3rem;width:100%;height:100%;box-sizing:border-box;border-radius:50px;"],(function(e){return e.backgroundColor})),Y=function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz","ar-modes":"webxr scene-viewer quick-look",ar:!0,"auto-rotate":!0,"camera-controls":!0})},Z=O.b.div.withConfig({displayName:"TriforceModal__CenteredViewer",componentId:"k0zb01-0"})(["display:flex;justify-content:center;align-items:center;height:100%;"]),$=document.getElementById("root");_=document.createElement("div"),document.body.appendChild(_),m.a.init({container:_,tool:["console","elements"]}),console.info(l.name,l.version),i.a.render(o.a.createElement(c.a,null,o.a.createElement(s.a,{component:function(e){var t=e.history;return window.appHistory=t,"/ar"===t.location.pathname?null:o.a.createElement(U,null)}}),o.a.createElement(s.a,{path:"/triforce",component:function(){return o.a.createElement(V,null,o.a.createElement(W,{backgroundColor:"rgb(0, 168, 224, 0.75)"},o.a.createElement(c.b,{to:"/"},"Back"),o.a.createElement(Z,null,o.a.createElement(Y,null))))}}),o.a.createElement(s.a,{path:"/ar",component:function(){return o.a.createElement("model-viewer",{src:"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce2/scene.gltf","auto-rotate":!0,"camera-controls":!0,ar:!0,"ar-modes":"webxr scene-viewer quick-look","ar-scale":"auto","ios-src":"https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/triforce.usdz"})}})),$)}},[[61,1,2]]]);