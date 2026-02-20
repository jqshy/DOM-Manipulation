function showFilter() {
    var filterForm = document.getElementById("filterContent");
    var addForm = document.getElementById("newContent");

    filterForm.style.display = "block";
    addForm.style.display = "none";
}
function showAddNew() {
    var filterForm = document.getElementById("filterContent");
    var addForm = document.getElementById("newContent");

    addForm.style.display = "flex"; 
    filterForm.style.display = "none";
}
function filterArticles() {
    var showOpinion = document.getElementById("opinionCheckbox").checked;
    var showRecipe = document.getElementById("recipeCheckbox").checked;
    var showUpdate = document.getElementById("updateCheckbox").checked;
    var articles = document.getElementsByTagName("article");

    for (var i = 0; i < articles.length; i++) {
        if (articles[i].classList.contains("opinion")) {
            if (showOpinion) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        } 
        else if (articles[i].classList.contains("recipe")) {
            if (showRecipe) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        } 
        else if (articles[i].classList.contains("update")) {
            if (showUpdate) {
                articles[i].style.display = "block";
            } else {
                articles[i].style.display = "none";
            }
        }
    }
}
function addNewArticle() {
    var titleInput = document.getElementById("inputHeader").value;
    var textInput = document.getElementById("inputArticle").value;
    var articleList = document.getElementById("articleList");
    var selectedType = "";
    var displayLabel = "";

    if (document.getElementById("opinionRadio").checked) {
        selectedType = "opinion";
        displayLabel = "Opinion";
    } else if (document.getElementById("recipeRadio").checked) {
        selectedType = "recipe";
        displayLabel = "Recipe";
    } else if (document.getElementById("lifeRadio").checked) {
        selectedType = "update"; 
        displayLabel = "Update";
    }
    if (titleInput !== "" && textInput !== "" && selectedType !== "") {
        
        var newArticle = document.createElement("article");
        newArticle.className = selectedType;

        newArticle.innerHTML = 
            '<span class="marker">' + displayLabel + '</span>' +
            '<h2>' + titleInput + '</h2>' +
            '<p>' + textInput + '</p>' +
            '<p><a href="moreDetails.html">Read more...</a></p>';

        articleList.appendChild(newArticle);
        document.getElementById("inputHeader").value = "";
        document.getElementById("inputArticle").value = "";
    } else {
        alert("Please fill out all fields and select a type!");
    }
}