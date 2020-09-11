import React from 'react';

import VideoScreen from './Zone.VideoScreen';

const WIDTH = 2.4;
const HEIGHT = 1.1;
const RATIO = 2;

const VIDEO_SIZE = [WIDTH * RATIO, HEIGHT * RATIO, 1, 1];

const X = -2;
const Y = 1.09;
const Z = 3.8;
const ROTATION = Math.PI / 7;

export default () => (
    <group>
        <VideoScreen
            partialPath="bts/videos/WonderWoman1984_AmazonGames_DCFandome_1080_wide.mp4"
            position={[X, Y, Z]}
            dimension={VIDEO_SIZE}
            videoDimension={{ width: WIDTH * 100, height: HEIGHT * 100 }}
            rotation={[Math.PI, ROTATION, Math.PI]}
        />
        <VideoScreen
            partialPath="bts/videos/WonderWoman1984_ANewWorldOfWonder-Swarovski_1080_wide.mp4"
            position={[X, Y, -Z]}
            dimension={VIDEO_SIZE}
            videoDimension={{ width: WIDTH * 100, height: HEIGHT * 100 }}
            rotation={[0, ROTATION, 0]}
        />
    </group>
);
