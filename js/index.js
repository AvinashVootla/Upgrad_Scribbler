//Show post modal
function showCreatePost(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "flex";
  }
  
  //hide Post hideCreatePostModal
  function hideCreatePostModal(){
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }
  
  //redirect to postlist.html
  function navigateToBlogList(){
    location.href = "html/postslist.html"
  }
  