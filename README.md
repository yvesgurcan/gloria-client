# Gloria Client

## Main dependencies

-   React: A JavaScript framework.
-   React Router.
-   Styled Components: A library to turn CSS stylesheets into React components.
-   Three.js: A JavaScript 3D renderer for the browser.
-   React Three Fiber: A wrapper around Three.js for React.
-   `three-js-csg-es6`: A ES6-compatible wrapper around Chandler Prall's Three.js Constructive Solid Geometry (CSG) port to build complex 3D geometry (such as carving shapes in objects thanks to other objects).
-   [model-viewer](https://github.com/google/model-viewer): A web component created by Google that supports augmented reality. See demo: https://modelviewer.dev/.
-   Socket.io Client: Aclient for WebSocket connections.
-   Eruda: Debug tool intended to access the JavaScript console in mobile.
-   Webpack
-   Babel
-   AWS CLI
-   Node.js
-   `npm` or `yarn`

## Setup

    npm i

## Development

    npm start

Runs a development server at `localhost:8080`. The server is also accessible to other devices who are connected to the same network.

The address of the server on your local network depends on the IP of your machine but the port is the same as the `localhost` one. To get the address of the development server on your local network:

    npm run network-info

Entry point of the application is located at `./src/index.js`. This file must use the JavaScript extension `.js`. However, other files imported in `index.js` can be either TypeScript files or JavaScript files with extension `.js`.

## Build/Deployment

Bump the version of your application.

    npm version patch

This command will increment the version of the application, create a production build, and push it to S3.

You must have the AWS CLI installed on your machine in order to deploy to S3 automatically.

## Structure

    src
    ├── components
    ├── views
    ├── index.js
    ├── index.html

## Technical notes

Note that views are layered. As the user browses the application, 3D scenes are merely obfuscated and still running in the background.

# Inspiration and useful links

-   https://www.youtube.com/watch?v=2LwLI9N0N7o
-   https://codesandbox.io/s/house-react-three-fiber-86tzx?file=/src/styles.css:0-224
-   https://codesandbox.io/s/r3f-sparks-sbf2i?from-embed
-   https://stackoverflow.com/questions/11826798/how-do-i-construct-a-hollow-cylinder-in-three-js
-   https://codesandbox.io/s/xvvn4vxqnz
-   https://codesandbox.io/examples/package/react-three-fiber
-   https://github.com/takahirox/takahirox.github.io/blob/master/three.js.mmdeditor/examples/misc_controls_deviceorientation.html
-   https://modelviewer.dev/examples/augmented-reality.html
-   https://medium.com/@cwervo/everything-i-know-about-launching-ios-ar-quick-look-from-the-web-e7957f165c51
-   https://github.com/KhronosGroup/glTF-Sample-Models/tree/master/2.0
-   https://inspiring-wiles-b4ffe0.netlify.app/
