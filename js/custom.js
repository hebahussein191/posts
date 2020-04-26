let postsContainer;

// Local Storage

if (localStorage.getItem("postsData") == null) {
    postsContainer = [];


}
else {
    postsContainer = JSON.parse(localStorage.getItem("postsData"));
    displayPosts();
}

let posts,
    req = new XMLHttpRequest(),
    url = 'https://jsonplaceholder.typicode.com/posts';


req.open('GET', url) 

req.onreadystatechange =function(){

    if(req.status == 200 && req.readyState == 4)
    {
        //console.log(req.response); //for test
        posts = JSON.parse(req.response);
        //console.log(posts); //for test

        displayPosts();
    }
    
}

req.send();



function displayPosts(){
    let temp = '';
    for(let i = 0; i < posts.length; i++) {

        temp += `
            <div class="col-12">
                <div class="posts">
                    <h3 class='text-muted'>`+ posts[i].id +`</h3>
                    <h4>`+ posts[i].title +`</h4>
                    <p>`+ posts[i].body +`</p>
                </div>
            </div>
        `

    }

    document.getElementById('postsRow').innerHTML = temp;

}