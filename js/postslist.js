//Removed post list
var removedPostList = [];

// Initial data
var postList = [{
		id: 1,
		'author': 'Srishti Gupta',
		'title': '\'let\' me be a \'const\'(ant), not a \'var\'(iable)!',
		'desc': `Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.`
	},
	{
		id: 2,
		'author': 'Colby Fayock',
		'title': 'What is linting and how can it save you time?',
		'desc': `One of the biggest challenges in software development is time. It’s something we can’t easily get more of, but linting can help us make the most out of the time we have.`
	},
	{
		id: 3,
		'author': 'Yazeed Bzadough',
		'title': 'How to Get More Views on Your Tech Blog',
		'desc': `If you're a developer with a Twitter account, you've already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.`
	},
	{
		id: 4,
		'author': 'Cedd Burge',
		'title': 'How to write easily describable code',
		'desc': `When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which
    leads to confusion when discussing the code.`
	},
	{
		id: 5,
		'author': 'Srishti Gupta',
		'title': 'Everything you should know about \'module\' & \'require\' in Node.js',
		'desc': `Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module
    named xyz.`
	}


]

//Navigate to post
function navigateToPost() {
	location.href = "post.html";
}

//Render posts data dynamically
function renderPostList(id) {

	var listDivele = document.getElementById('postList');
    listDivele.innerHTML = '';
    
    var x = 0;
    
	for (var i = 0; i < postList.length; i++) {

        //skip removed items render
		if (removedPostList.indexOf(postList[i].id) > -1) {
			continue;
        }
        
        //Dynamic post 
		var post = '<div class="post" id="post' + i + '">' +
			'<div class="post-left"><p class="post-username">' + postList[i].author + '</p></div><div class="post-content">' +
			'<div class="post-trash"><i class="fa fa-trash" onclick="trashClicked(' + postList[i].id + ')" style="font-size:24px"></i></div><p class="post-title">' + postList[i].title +
			'</p><br/><p class="post-desc">' + postList[i].desc + '</p><div class="post-more" onclick="navigateToPost()"><i class="fa fa-ellipsis-h"></i>' +
			'</div><div class="trash-modal"><div class="trash-modal-content"><p>Are you sure you want to delete this post?</p>' +
			'<div class="trash-buttons-container"><button class="trash-modal-button-yes"  onclick="removePost(' + postList[i].id + ')">Yes</button>' +
			'<button class="trash-modal-button-no">No</button></div></div></div></div></div>'

		listDivele.innerHTML += post;
		x++;
	}
	trashFunctions(x);
}

//remove post
function removePost() {
	renderPostList();
}
//Trash clicked
function trashClicked(id) {
	removedPostList.push(id);
}

/* Code for Trash Modal */
var trashFunctions = function (numberOfPosts) {

	for (var i = 0; i < numberOfPosts; i++) {
		// Get the trash modal
		var modal = document.getElementsByClassName('trash-modal')[i];

		// Get the div that opens the modal
		var div = document.getElementsByClassName("post-trash")[i];

		// Get the <span> element that closes the modal
		var close = document.getElementsByClassName("trash-modal-button-no")[i];

		// When the user clicks on the trash icon, open the modal 
		div.onclick = function () {
			modal.style.display = "block";
		}

		// When the user clicks on `No` button, close the modal
		close.onclick = function () {
			modal.style.display = "none";
		}
	}
}