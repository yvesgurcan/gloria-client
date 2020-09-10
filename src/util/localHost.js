export default () => {
    if (location.hostname === 'localhost') {
        console.info('This is localhost.');
        return true;
    }

    console.info('This is not localhost.');
    return false;
};
