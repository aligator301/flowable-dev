const generateDefer = () => {
    let outsideResolve = undefined;
    let outsideReject = undefined;
    let holdSSrViewOpen = new Promise(function (resolve, reject) {
        outsideResolve = resolve;
        outsideReject = reject;
    });

    return {
        resolve : outsideResolve,
        reject : outsideReject,
        deferPromise : holdSSrViewOpen
    };
}

export {
    generateDefer
}