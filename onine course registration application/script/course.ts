let EnrollId = 100;

let UserId = 1022;

let UserName: string;
let UserAge:number;
let UserPhoneNumber:number;

let CourseName : string;
let RequiredDays : number;

class User
{
    UserId: string;
    UserName :string;
    UserAge : number;
    UserPhoneNumber : number;

    constructor( userName:string, userAge :number, userPhonenum : number)
    {
        
        this.UserId = "UI" + UserId.toString();
        this.UserName = userName;
        this.UserAge = userAge;
        this.UserPhoneNumber = userPhonenum;

    }

}

class CourseInfo
{
    EnrollId : string;
    CourseName: string;
    RequiredDays : number;
    UserId : string;

    constructor( courseName: string, requiredDays : number)
    {
        
        this.EnrollId = "CI" + EnrollId.toString();
        this.CourseName = courseName;
        this.RequiredDays = requiredDays;
        
    }

}

let userList:Array<User> = new Array<User>();

let courseList:Array<CourseInfo> = new Array<CourseInfo>();


function addNewUser()
{
    let userName = (document.getElementById("newUserName") as HTMLInputElement).value;
    let userAge = (document.getElementById("newUserAge") as HTMLInputElement).value;
    let number = (document.getElementById("newUserPhoneNum") as HTMLInputElement).value;

    userList.push(new User(userName , +userAge , +number));
    let index :number = userList.length - 1;
    let assign: string = userList[index].UserId;
   

    
    if(userName == "" && userAge == "" && number == "" )
    {  
        alert('Fill out the details');
        newUserPage();

    }
    else
    {
        alert('User Id is '+assign);
        UserId++;
        
        homePage();
    }
    
    (document.getElementById("newUserName") as HTMLInputElement).value=" ";
    (document.getElementById("newUserAge") as HTMLInputElement).value=" ";
    (document.getElementById("newUserPhoneNum") as HTMLInputElement).value=" ";

}


function signin()
{
    let userId = (document.getElementById("userId") as HTMLInputElement).value;
    
    for(var i =0; i < userList.length ; i++)
    {
        if(userList[i].UserId == userId)
        {
            alert('valid user');
            coursePage();
        }
        else{
            alert('Invalid user');
            existingUserPage();
        }
    }
    (document.getElementById("userId") as HTMLInputElement).value=" ";
}


function homePage()
{
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let newUserPage = document.getElementById("newUserPage") as HTMLDivElement;

    homePage.style.display="block";
    newUserPage.style.display="none";

}

function newUserPage()
{
    let newUserPage = document.getElementById("newUserPage") as HTMLDivElement;
    let homePage = document.getElementById("homePage") as HTMLDivElement;

    homePage.style.display="none";
    newUserPage.style.display="block";
}

function existingUserPage()
{
    let homePage = document.getElementById("homePage") as HTMLDivElement;
    let existingUserPage = document.getElementById("existingUserPage") as HTMLDivElement;

    homePage.style.display="none";
    existingUserPage.style.display="block";
}

function coursePage()
{
    let coursePage = document.getElementById("coursePage") as HTMLDivElement;
    let existingUserPage = document.getElementById("existingUserPage") as HTMLDivElement;

    existingUserPage.style.display="none";
    coursePage.style.display="block";

}

function availableCourse()
{
    let availableCourse = document.getElementById("availableCourse") as HTMLDivElement;
    let coursePage = document.getElementById("coursePage") as HTMLDivElement;

    coursePage.style.display="none";
    availableCourse.style.display="block";

}

function enrolledCourse()
{
    let availableCourse = document.getElementById("availableCourse") as HTMLDivElement;
    let coursePage = document.getElementById("coursePage") as HTMLDivElement;
    let enrolledCourse = document.getElementById("enrolledCourse") as HTMLDivElement;

    coursePage.style.display="none";
    enrolledCourse.style.display="block";
    availableCourse.style.display="none";
}

function enroll()
{
    let course;
    let days = parseInt((document.getElementById("requireddays") as HTMLInputElement).value);
    if((document.getElementById("courses") as HTMLInputElement).value == "c#")
    {
        course = (document.getElementById("csharp") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "java")
    {
        course = (document.getElementById("java") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "html")
    {
        course = (document.getElementById("html") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "css")
    {
        course = (document.getElementById("css") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "javascript")
    {
        course = (document.getElementById("javascript") as HTMLInputElement).value;
    }
    else if((document.getElementById("courses") as HTMLInputElement).value == "typescript")
    {
        course = (document.getElementById("typescript") as HTMLInputElement).value;
    }
    courseList.push(new CourseInfo(course,days));
    coursePage();
}

function goback()
{
    let totalreqdays = 0 ;
    enrolledCourse();
    for(let i = 0 ; i < courseList.length ; i++)
    {
        if((document.getElementById("userId") as HTMLInputElement).value == courseList[i].EnrollId)
        {
            (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML += "USER ID : " + courseList[i].UserId +"<br>"+ " COURSE NAME : "+ courseList[i].CourseName +"<br>"+ "COURSE ID : " + courseList[i].EnrollId +"<br>" +"REQUIRED DAYS : " + courseList[i].RequiredDays +"<br><hr>";
            totalreqdays = totalreqdays + courseList[i].RequiredDays;
        }
    }
    (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML += "TOTAL REQUIRED DAYS : " + totalreqdays;
    (document.getElementById("enrolledcourseinfo") as HTMLInputElement).innerHTML = null;
}
