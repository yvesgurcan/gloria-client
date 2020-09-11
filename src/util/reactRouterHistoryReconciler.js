export default ViewComponent => ({ history }) => {
    // Reconcile React Router history by making it available globally in 3D canvases
    window.appHistory = history;
    return ViewComponent;
};
