import eruda from 'eruda';

export default () => {
    const consoleElement = document.createElement('div');
    document.body.appendChild(consoleElement);

    eruda.init({
        container: consoleElement,
        tool: ['console', 'elements']
    });
};
