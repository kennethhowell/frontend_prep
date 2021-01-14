// ~~ ** REST requests / responses ** ~~
//
// const blogPost = {title: 'Ajax Requests', body: 'Are a fun way to use JS!'};
// const url = '/posts';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };
// fetch(url, options)
//     .then(/* post was created successfully */)
//     .catch(/* handle errors */);

// console.log(options);


// https://watery-hammerhead-bay.glitch.me/ :: Hello Express remix link
// /dreams = our route

const dreamApiURL = "https://watery-hammerhead-bay.glitch.me/dreams";


// fetch all of the dreams
fetch(dreamApiURL).then(function (response) {
   response.json().then(function(dreams){
    console.log(dreams);

})
    })

// const dreamObj = {
//     "body": "My dream is to have another kitty"
// };
//
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dreamObj),
// };
//
// fetch(dreamApiURL, options).then(function (response){
//     console.log(response);
// })