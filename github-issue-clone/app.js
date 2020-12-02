issueInputForm = document.getElementById('issueInputForm').addEventListener('submit', saveIssue);


// Submit form event listner
// saving a single issue to local storage
function saveIssue(e) {
    e.preventDefault();

    issueTitleInput = document.getElementById('issueTitleInput').value;
    issueDescInput = document.getElementById('issueDescInput').value;
    issuePriorityInput = document.getElementById('issuePriorityInput').value;
    issueAssignedToInput = document.getElementById('issueAssignedToInput').value;
    // chance JS lib to get random issue id
    var issueId = chance.guid();
    var issueStatus = 'Open';


    if (issueTitleInput.trim() == "" || issueDescInput.trim() == "") {
        alert("Please Add Issue !");
        return false;
    }

    console.log(issueTitleInput, issueDescInput, issuePriorityInput, issueAssignedToInput, issueId, issueStatus);

    var issue = {
        id: issueId,
        title: issueTitleInput,
        description: issueDescInput,
        priority: issuePriorityInput,
        assignedTo: issueAssignedToInput,
        status: issueStatus
    }

    if (localStorage.getItem('issues') == null) {
        // start new arr called issues
        var issues = [];
        // add current at start of array
        issues.unshift(issue);
        // finally add to local storage
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        // fetch from local storage
        var issues = JSON.parse(localStorage.getItem('issues'));
        // add at start of array
        issues.unshift(issue);
        // finally add to local storage
        localStorage.setItem('issues', JSON.stringify(issues));
    }

    // call fetchissues function

    fetchIssues();

    // reset form fields
    document.getElementById('issueInputForm').reset();

}


// close staus
function setStatusClosed(id) {

    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues[i].status = 'closed';

            console.log(issues[i])

            // change closed to danger
            var suc = document.getElementsByClassName('label-success')
            console.log(suc[0].classList);

            suc[0].classList.add('label-danger');



        }
    }

    localStorage.setItem('issues', JSON.stringify(issues));
    fetchIssues();
}

// delete status
function deleteIssue(id) {
    var issues = JSON.parse(localStorage.getItem('issues'));

    for (var i = 0; i < issues.length; i++) {
        if (issues[i].id == id) {
            issues.splice(i, 1);
        }
    }

    localStorage.setItem('issues', JSON.stringify(issues));

    fetchIssues();
}

function fetchIssues() {

    // fetch issues from local storage

    var issues = JSON.parse(localStorage.getItem('issues'));



    //  Display issues to DOM 

    // issueList in html
    var issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var title = issues[i].title;
        var desc = issues[i].description;
        var priority = issues[i].priority;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += '<div class="well">' +
            '<h6>Issue ID: ' + id + '</h6>' +
            '<p><span class="label label-success ">' + status + '</span></p>' +
            '<h2>' + title + '</h2>' +
            '<h3>' + desc + '</h3>' +
            '<p><span class=" glyphicon glyphicon-exclamation-sign"></span> ' + priority + '</p>' +
            '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
            '<a href="#" onclick="setStatusClosed(\'' + id + '\')" class="btn btn-warning">Close</a> ' +
            '<a href="#" onclick="deleteIssue(\'' + id + '\')" class="btn btn-danger">Delete</a>' +
            '</div>';
    }


}