const wait = (x) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, x);
    });
};


wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));

