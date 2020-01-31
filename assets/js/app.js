(document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // const model = {
        // };
        const box = document.getElementsByClassName('box')[0];
        console.log(box.style.borderRadius);
        const view = {
            init: () => {
            },
            render: () => {
            },
        };
        const controller = {
            init: () => {
                view.init();
                view.render();
            },
        };
        controller.init();
    }
})();
