import React from 'react';

import Kiosk from './Zone.Kiosk';

const KIOSK_SIZE = [0.1, 1.8, 1];

export default () => {
    function getSmsUrl() {
        const ua = navigator.userAgent.toLowerCase();
        let url;

        if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1)
            url =
                'sms:458-221-8603;body=' +
                encodeURIComponent('Bonjour ! How can I help you?');
        else
            url =
                'sms:?body=' +
                encodeURIComponent('Bonjour ! How can I help you?');

        return url;
    }

    return (
        <group>
            <Kiosk
                to="/gallery"
                position={[-1.5, 0.3, 1.25]}
                dimension={KIOSK_SIZE}
                rotation={[0, Math.PI / 8, 0]}
            />
            <Kiosk
                href={getSmsUrl()}
                position={[-1.5, 0.3, -1.25]}
                dimension={KIOSK_SIZE}
                rotation={[0, -Math.PI / 8, 0]}
            />
        </group>
    );
};
