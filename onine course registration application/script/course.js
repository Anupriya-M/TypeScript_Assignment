var EnrollId = 100;
var UserId = 1022;
var UserName;
var UserAge;
var UserPhoneNumber;
var CourseName;
var RequiredDays;
var User = /** @class */ (function () {
    function User(userName, userAge, userPhonenum) {
        this.UserId = "UI" + UserId.toString();
        this.UserName = userName;
        this.UserAge = userAge;
        this.UserPhoneNumber = userPhonenum;
    }
    return User;
}());
var CourseInfo = /** @class */ (function () {
    function CourseInfo(courseName, requiredDays) {
        this.EnrollId = "CI" + EnrollId.toString();
        this.CourseName = courseName;
        this.RequiredDays = requiredDays;
    }
    return CourseInfo;
}());
var userList = new Array();
var courseList = new Array();
function addNewUser() {
    var userName = document.getElementById("newUserName").value;
    var userAge = document.getElementById("newUserAge").value;
    var number = document.getElementById("newUserPhoneNum").value;
    userList.push(new User(userName, +userAge, +number));
    var index = userList.length - 1;
    var assign = userList[index].UserId;
    if (userName == "" && userAge == "" && number == "") {
        alert('Fill out the details');
        newUserPage();
    }
    else {
        alert('User Id is ' + assign);
        UserId++;
        homePage();
    }
    document.getElementById("newUserName").value = " ";
    document.getElementById("newUserAge").value = " ";
    document.getElementById("newUserPhoneNum").value = " ";
}
function signin() {
    var userId = document.getElementById("userId").value;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].UserId == userId) {
            alert('valid user');
            coursePage();
        }
        else {
            alert('Invalid user');
            existingUserPage();
        }
    }
    document.getElementById("userId").value = " ";
}
function homePage() {
    var homePage = document.getElementById("homePage");
    var newUserPage = document.getElementById("newUserPage");
    homePage.style.display = "block";
    newUserPage.style.display = "none";
}
function newUserPage() {
    var newUserPage = document.getElementById("newUserPage");
    var homePage = document.getElementById("homePage");
    homePage.style.display = "none";
    newUserPage.style.display = "block";
}
function existingUserPage() {
    var homePage = document.getElementById("homePage");
    var existingUserPage = document.getElementById("existingUserPage");
    homePage.style.display = "none";
    existingUserPage.style.display = "block";
}
function coursePage() {
    var coursePage = document.getElementById("coursePage");
    var existingUserPage = document.getElementById("existingUserPage");
    existingUserPage.style.display = "none";
    coursePage.style.display = "block";
}
function availableCourse() {
    var availableCourse = document.getElementById("availableCourse");
    var coursePage = document.getElementById("coursePage");
    coursePage.style.display = "none";
    availableCourse.style.display = "block";
}
function enrolledCourse() {
    var availableCourse = document.getElementById("availableCourse");
    var coursePage = document.getElementById("coursePage");
    var enrolledCourse = document.getElementById("enrolledCourse");
    coursePage.style.display = "none";
    enrolledCourse.style.display = "block";
    availableCourse.style.display = "none";
}
function enroll() {
    var course;
    var days = parseInt(document.getElementById("requireddays").value);
    if (document.getElementById("courses").value == "c#") {
        course = document.getElementById("csharp").value;
    }
    else if (document.getElementById("courses").value == "java") {
        course = document.getElementById("java").value;
    }
    else if (document.getElementById("courses").value == "html") {
        course = document.getElementById("html").value;
    }
    else if (document.getElementById("courses").value == "css") {
        course = document.getElementById("css").value;
    }
    else if (document.getElementById("courses").value == "javascript") {
        course = document.getElementById("javascript").value;
    }
    else if (document.getElementById("courses").value == "typescript") {
        course = document.getElementById("typescript").value;
    }
    courseList.push(new CourseInfo(course, days));
    coursePage();
}
function goback() {
    var totalreqdays = 0;
    enrolledCourse();
    for (var i = 0; i < courseList.length; i++) {
        if (document.getElementById("userId").value == courseList[i].EnrollId) {
            document.getElementById("enrolledcourseinfo").innerHTML += "USER ID : " + courseList[i].UserId + "<br>" + " COURSE NAME : " + courseList[i].CourseName + "<br>" + "COURSE ID : " + courseList[i].EnrollId + "<br>" + "REQUIRED DAYS : " + courseList[i].RequiredDays + "<br><hr>";
            totalreqdays = totalreqdays + courseList[i].RequiredDays;
        }
    }
    document.getElementById("enrolledcourseinfo").innerHTML += "TOTAL REQUIRED DAYS : " + totalreqdays;
    document.getElementById("enrolledcourseinfo").innerHTML = null;
    coursePage();
}
