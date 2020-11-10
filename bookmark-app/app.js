let myform = document.getElementById('myForm').addEventListener('submit', addBookmark);





// adding bookmark - first to local storage

function addBookmark(e) {
    e.preventDefault();

    var sitename = document.getElementById('siteName').value;
    var siteurl = document.getElementById('siteUrl').value;


    var bookmark = {
        name: sitename,
        url: siteurl
    };

    if (!sitename || !siteurl) {

        document.querySelector('.empty-fill').style.display = "block";
        setTimeout(function () { document.querySelector('.empty-fill').style.display = 'none' }, 1000)
        // setTimeout(function () { document.querySelector('.empty-fill').style.display = 'block' }, 5000)
        return false;
    }





    // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    if (localStorage.getItem('bookmarks') == null) {

        // init array
        let bookmarks = [];

        // push bookmark to arr
        bookmarks.push(bookmark);
        // set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    } else {

        // get bookmarks from local storage
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // add bookmarks to array
        bookmarks.push(bookmark);
        // set to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));


    }
    document.querySelector('.success-fill').style.display = "block";
    setTimeout(function () { document.querySelector('.success-fill').style.display = 'none' }, 1000)
    showBookmark();

    // clear inputs field after submit
    $('#myForm')[0].reset();
    $('#myForm')[1].reset();

}


// Display added bookmarks to UI

function showBookmark() {
    // fetch name and url from local storage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    console.log(bookmarks);

    // output 
    let bookmarksResults = document.getElementById('bookmarksResults');
    bookmarksResults.innerHTML = "";

    for (var i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="card w-50 mx-auto mt-3">' +
            '<div class="card-body">' +
            '<h5 class="card-title mx-auto">' + name + '</h5>' +
            '<a target="_blank" href="' + url + '" class="btn btn-primary" >Visit</a> &nbsp;&nbsp;&nbsp;&nbsp;' +
            '<a onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger ">Remove</a>' +
            '</div>' +
            '</div>'



    }


}

// delete bookmark from db and update page

function deleteBookmark(url) {

    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    // Loop through the bookmarks
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            // Remove from array
            bookmarks.splice(i, 1);
        }
    }

    // Re-set back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    //   reload page
    showBookmark();
}


// validate form function

/*
function validateForm(siteName, siteUrl) {
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }

    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }

    return true;
}
*/
