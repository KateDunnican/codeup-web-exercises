// Exercise #1

    const wait = (x) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {resolve()}, x);
            //OR
            setTimeout(resolve, x);
        });
    };


    // wait(1000).then(() => console.log("You'll see this after 1 second"));
    // wait(3000).then(() => console.log("You'll see this after 3 seconds"));

// Exercise #2

// let ex2func = (gitUserName) => {
//     return new Promise( (resolve) => {
//         // /users/:username/events/public
//         fetch(url, {headers: {'Authorization': gitHubToken}});
//     });
// };

const getGithubUsernames = (username) => {
    return fetch(`https://api.github.com/users/${username}/events/public` , {headers: {'Authorization': `token ${gitHubToken}`}})
        .then(response => response.json())
        .then (data => {
            for (var i = 0; i < data.length; ++i) {
                if (data[i].type === "PushEvent") {
                    console.log(data[i].created_at);
                    break
                }
            }
        })
};

getGithubUsernames("KateMcKinney");