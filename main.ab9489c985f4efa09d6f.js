(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=n(5),l=n(33),m=n(3),s=n(8),u=n.n(s),h=n(9),d=n(1),p=n(23),g=n.n(p),E=n(24);function b(){var e=g()(["\nbody {\n    font-family: sans-serif;\n    margin: 0;\n    background: rgb(140, 140, 255);\n}\n\nhtml,\nbody,\n#root {\n    width: 100%;\n    height: 100%;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    font-weight: bold;\n\n    :hover {\n        color: black;\n    }\n}\n"]);return b=function(){return e},e}var y=Object(E.a)(b()),f=n(11),w=n.n(f),v=n(28);Object(h.b)({OrbitControls:v.a});var M=function(e){var t=e.autoRotate,n=void 0!==t&&t,o=e.delayRotation,i=w()(e,["autoRotate","delayRotation"]),c=Object(a.useRef)(),l=Object(h.d)(),m=l.camera,s=l.gl;return Object(h.c)((function(){o||c.current.update()})),r.a.createElement("orbitControls",u()({enabled:!0,enableDamping:!0,enablePan:!0,keyPanSpeed:80,ref:c,args:[m,s.domElement],rotateSpeed:.5,dampingFactor:1,autoRotate:n,target:[3,0,0],keys:{LEFT:37,RIGHT:39}},i))},P=function(){return r.a.createElement(M,{enableZoom:!1,minAzimuthAngle:0,maxAzimuthAngle:Math.PI,minPolarAngle:Math.PI/2.2,maxPolarAngle:Math.PI/2.2})},j=n(18),O=function(){var e=Object(a.useMemo)((function(){var e=new d.Mesh(new d.CylinderGeometry(6,6,20,60,4)),t=new d.Mesh(new d.CylinderGeometry(5,5,20,60,4)),n=new j.a(t),a=new j.a(e).subtract(n).toMesh();a.material=new d.MeshPhongMaterial({specular:1710618,shininess:30,flatShading:d.FlatShading});var r=(new d.TextureLoader).load("https://raw.githubusercontent.com/yvesgurcan/3d-dome/master/public/metal.jpg");return a.material.map=r,a.position.y=9.48,a}));return r.a.createElement("primitive",{object:e})},I=function(){return r.a.createElement("mesh",{position:[0,-.25,0]},r.a.createElement("cylinderGeometry",{attach:"geometry",args:[.5,.5,.5,100]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(40, 40, 40)",roughness:.5,opacity:1,transparent:!1}))},R=function(e){e.color;var t=e.position,n=void 0===t?[0,0,0]:t,a=e.dimension,o=void 0===a?[0,0,0]:a,i=w()(e,["color","position","dimension"]);return r.a.createElement("mesh",u()({position:n},i),r.a.createElement("boxBufferGeometry",{attach:"geometry",args:o}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(35, 35, 35)",roughness:.5,opacity:1,transparent:!1}))},L=function(){return r.a.createElement("mesh",{position:[0,-.5001,0],rotation:[Math.PI/2,0,0]},r.a.createElement("circleGeometry",{attach:"geometry",args:[6,32]}),r.a.createElement("meshPhongMaterial",{attach:"material",color:"rgb(46, 46, 46)",metalness:1,specular:1710618,shininess:100,side:d.DoubleSide}))};function k(e){var t=Object(a.useRef)(),n=Object(h.d)().setDefaultCamera;return Object(a.useEffect)((function(){return n(t.current)}),[]),Object(h.c)((function(){return t.current.updateMatrixWorld()})),r.a.createElement("perspectiveCamera",u()({ref:t},e))}var x=function(){return r.a.createElement("span",null,r.a.createElement(y,null),r.a.createElement(h.a,{shadowMap:!0},r.a.createElement(k,{position:[4,0,0]}),"localhost"===location.hostname?r.a.createElement(M,null):r.a.createElement(P,null),r.a.createElement("ambientLight",{intensity:.85}),r.a.createElement("spotLight",{color:"white",intensity:.5,position:[-20,20,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[-2,9,0]}),r.a.createElement("directionalLight",{color:"white",intensity:.2,position:[7,-3,-5]}),r.a.createElement("directionalLight",{color:"white",intensity:.1,position:[10,6,5]}),r.a.createElement(I,null),r.a.createElement(R,{position:[1.75,0,2],dimension:[.1,1,.6],rotation:[0,Math.PI/4,0]}),r.a.createElement(R,{position:[1.75,0,-2],dimension:[.1,1,.6],rotation:[0,-Math.PI/4,0]}),r.a.createElement(R,{position:[-2,0,-1.5],dimension:[.1,1,.6],rotation:[0,-Math.PI/8,0]}),r.a.createElement(R,{position:[-2,0,1.5],dimension:[.1,1,.6],rotation:[0,Math.PI/8,0]}),r.a.createElement(L,null),r.a.createElement(O,null)))},A=document.getElementById("root"),C=Object(c.a)();i.a.render(r.a.createElement(l.a,{history:C},r.a.createElement(m.a,{component:function(e){var t=e.history;return window.appHistory=t,r.a.createElement(x,null)}})),A)}},[[48,1,2]]]);