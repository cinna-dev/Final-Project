
var articleIndex = 1;
showArticle(articleIndex);

function plusSlides(n) {
    showArticle(articleIndex +=n);
}

function currentArticle(n) {
    showArticle(articleIndex = n);
}

function showArticle(n) {
    var i;
    var article = document.getElementsByClassName("reader");
    if(n > article.length) {
        articleIndex = 1
    }
    if(n < 1){
        articleIndex = article.length
    }

    for(i=0; i<article.length; i++) {
        article[i].style.display ="none";
    }

    article[articleIndex].style.display="block";
   
}
  
