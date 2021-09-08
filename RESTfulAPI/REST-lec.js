// ~~ ** REST requests / responses ** ~~
// good reference material: https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28

//~ * ~ Our first POST request example ~ * ~

//TODO Together: Lets set up an example of what we would be sending up in a POST request - we need two main things: what we're sending (the actual data) and then a set of options in which we're telling Javascript what we're up to (what method? what type of data are we sending over? what does the body of my request need to be?).

// const blogPost = {title: 'Fetch Requests', body: 'Are a fun way to use JS!'}; //The 'what' of our request - a "post"
// const url = '/posts';
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(blogPost),
// };

// console.log(blogPost);
// console.log(options);


//TODO Together: Now that we've seen an example of how our request looks in the console, let's try it on something that's a live API ready to interact with:

// https://watery-hammerhead-bay.glitch.me/ :: our base URL for our API
// /dreams = our route

//TODO Together: As you can see, we've set up a little area for a user to send us a dream of some kind. A dream is an object that is comprised of one main 'dream' property and then an id (which is being dealt with automatically at this point behind the scenes): {"dream":"dreamValue", "id": numValue}


//TODO Together: First, how can we fetch all of the dreams?

const dreamApiURL = "https://watery-hammerhead-bay.glitch.me/dreams";
// const route = "/dreams";

fetch(dreamApiURL).then(function (response) {
   response.json().then(function(dreams){
    console.log(dreams);

})
    })

//TODO Together: Now that we've gotten a list of what is over in our DREAMSApi, our next thing to attempt is to send some fresh data (a dream) up into it! I'll build a dream object to send over - I'll need to remember to program both a 'what' to send and then a 'how' (with the method, content-type, and body options) to have a complete looking POST request to send over.

// let dreamObj = {
//     "dream": "My dream is to lay around and do nada"
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
//
//
// console.log(dreamObj)
// console.log(options);
//
// fetch(dreamApiURL, options).then(function (response){
//     console.log(response);
// })

//TODO: Set up your own dreamObj with your own variable name (e.g., let myDreamObj = {"dream": "I'm going to learn a new programming language this week!"). If you skipped creating your options when observing the lecture, go ahead and do so now with an options variable containing our usual suspects (a method, the content-type in the 'headers' area, and then a body property that will hold the 'guts' of our request as a value.)

//TODO: Now, put together a fetch request that will send up your dream into our growing dream database! If you missed it our dreamApiURL is "https://watery-hammerhead-bay.glitch.me/dreams". Note: Please do not send up inappropriate dreams - leave those for your own dreaming after hours! :)

// ~ * ~ PUT/PATCH requests ~ * ~

//TODO Together: Let's target a specific ID by url (e.g. "/dreams/2" for the dream with an ID of '2') and update that resource found at that url with an entirely new resource (an {entire: object}) - PUT will let us replace the entire {dream: object} that was found at that url!

// const dreamObj = {
//     "dream": "My dream is to lay around and do nada with my family"
// };
//
// const options = {
//     method: 'PUT',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dreamObj),
// };
//
// fetch(dreamApiURL + "/2", options).then(function (response){
//     console.log(response);
// })


//TODO Together: Target a specific url and update a specific property within. Instead of sending an entire object over, we send over the piece we want to PATCH! ({targetProperty: patchContents})

// let dreamString = "My dream is to have a big plate of mexican food with a tall glass of iced tea";
//
// const patchOptions = {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({dream: dreamString})
// };

// fetch(dreamApiURL + "/2", patchOptions).then(function (response){
//     console.log(response);
// })

//TODO Interactive: Let me edit one of your dreams - after I fetch a list of the current dreams, I'll ask one of you to give me an ID to work with that was your POSTed dream object. Then we'll set up a patch together to patch up that object into a slightly different form!

// fetch(dreamApiURL).then(response => response.json()).then(response => console.log(response))

//TODO Together: Last, let's look at how we can delete something. We need an /id as usual for this use. Note: This is a permanent deletion without any confirmation message, so make sure you DELETE carefully in the future!

// const deleteMethod = {
//     method: 'DELETE'
//     }
//
// fetch(dreamApiURL + "/2", deleteMethod).then(function (response){
//     console.log(response);
// })