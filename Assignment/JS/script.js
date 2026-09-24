// ================================
// SIGN-UP PAGE
// ================================


//Assign form ID to a variable
const signupForm = document.getElementById("signupForm");
//Listen for form submission event and call the handleFormSubmit function
//Signup form made conditional to prevent errors on the profile page where the form does not exist
if (signupForm) {
    signupForm.addEventListener("submit", handleFormSubmit);
}

//--------------------------------------------------------------------------------------------------------------------
//moved validation to external functions
// Full name validation to also include when the user is typing
function validateFullName() {
    const fullname = document.getElementById("fname").value;

    // Find HTML element of fnameError and change innertext to error message
    if (fullname === "") {
        document.getElementById("fnameError").innerText = "Please enter a name and surname.";
        document.getElementById("fname").classList.add("invalid");
        return false;
    //validate at least first name and last name with space
    } else if (!validFullName(fullname)) {
        document.getElementById("fnameError").innerText = "Please enter your full name with a space.";
        document.getElementById("fname").classList.add("invalid");

        return false;

    } else {
        //remove invalid class from input list when true
        document.getElementById("fnameError").innerText = "";
        document.getElementById("fname").classList.remove("invalid");

        return true;
    }
}
const fnameInput = document.getElementById("fname");

if (fnameInput) {
    fnameInput.addEventListener("input", validateFullName);
}
//--------------------------------------------------------------------------------------------------------------------
function validateStudentNumber() {

    //moved validation to external functions
    const studentNumber = document.getElementById("snum").value;

    // Validate Student Number
   //Check if empty
    if (studentNumber === "") {
        document.getElementById("snumError").innerText = "Please enter your student number.";
        document.getElementById("snum").classList.add("invalid");
        return false;
    }

    //Check if length is not 9 digits
    else if (studentNumber.length !== 9) {
        document.getElementById("snumError").innerText = "Please enter a valid student number (9 digits e.g 123456789).";
        document.getElementById("snum").classList.add("invalid");
        return false;
    // check for valid input using regex
    } else if (!validStudentNum(studentNumber)) {
        document.getElementById("snumError").innerText = "Please enter a valid student number (only digits e.g 123456789).";
        document.getElementById("snum").classList.add("invalid");
        return false;

    } else {
        // Clear error message if valid
        document.getElementById("snumError").innerText = "";
        document.getElementById("snum").classList.remove("invalid");
        return true;
   }
}
const studentNumberInput = document.getElementById("snum");

if (studentNumberInput) {
    studentNumberInput.addEventListener("input", validateStudentNumber);
}
//--------------------------------------------------------------------------------------------------------------------
function validateCampus (){

    const campus = document.getElementById("campus").value;
    const campusName = document.getElementById("campusName").value;

    // Validate Campus - Drop down with options for campus or DL?
    //Drop down menu with options for campus or distance learning. If no option is selected, display an error message.

    if (campus === "") {
        document.getElementById("campusError").innerText = "Please select your campus or distance learning option.";
        document.getElementById("campus").classList.add("invalid");
        return false;

    } else if (campus === "Campus" && campusName === "") {
        document.getElementById("campusNameError").innerText =  "Please select your campus name.";
        document.getElementById("campusName").classList.add("invalid");
        return false;

    } else {
        // Clear error message if valid
        document.getElementById("campusError").innerText = "";
        document.getElementById("campus").classList.remove("invalid");
        document.getElementById("campusNameError").innerText = "";
        document.getElementById("campusName").classList.remove("invalid");
        return true;
    }
}
const campusInput = document.getElementById("campus");

if (campusInput) {
    campusInput.addEventListener("change", validateCampus);
}

const campusNameInput = document.getElementById("campusName");

if (campusNameInput) {
    campusNameInput.addEventListener("change", validateCampus);
}

//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
function validateEmail() {

    const email = document.getElementById("email").value;

    //Validate Email Address
    if (email === "") {
        document.getElementById("emailError").innerText = "Please enter your email address.";
        document.getElementById("email").classList.add("invalid");
        return false;
    //Check for standard email format using regex
    } else if (!validEmail(email)) {
        document.getElementById("emailError").innerText = "Please enter a valid email address.";
        document.getElementById("email").classList.add("invalid");
        return false;
    } else {
        document.getElementById("emailError").innerText = ""; // Clear error message if valid
        document.getElementById("email").classList.remove("invalid");
        return true;
    }
}
const emailInput = document.getElementById("email");

if (emailInput) {
    emailInput.addEventListener("input", validateEmail);
}
//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
function validatePassword(){

    const password = document.getElementById("password").value;

    // Validate Password
    if (password === "") {
        document.getElementById("passwordError").innerText = "Please enter a password.";
        document.getElementById("password").classList.add("invalid");
        return false;
    //Check for minimum length of 8 characters
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
        document.getElementById("password").classList.add("invalid");
        return false;
    } else {
        document.getElementById("passwordError").innerText = ""; // Clear error message if valid
        document.getElementById("password").classList.remove("invalid");
        return true;
    }
}
const passwordInput = document.getElementById("password");

if (passwordInput) {
    passwordInput.addEventListener("input", validatePassword);
}
//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
function validateConfirmPassword(){
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    // Validate Confirm Password
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").innerText = "Please confirm your password.";
        document.getElementById("confirmPassword").classList.add("invalid");
        return false;
    //Check if password and confirm password match
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        document.getElementById("confirmPassword").classList.add("invalid");
        return false;
    } else {
        document.getElementById("confirmPasswordError").innerText = ""; // Clear error message if valid
        document.getElementById("confirmPassword").classList.remove("invalid");
        return true;
    }
}
const confirmPasswordInput = document.getElementById("confirmPassword");

if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", validateConfirmPassword);
}
//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
function validateInterests() {
    // Validate Interests
    const interests = document.getElementById("interests").value;



    //Added .trim() to check for whitespace only input
    if (interests.trim() === "") {
        document.getElementById("interestsError").innerText = "Please enter your interests.";
        document.getElementById("interests").classList.add("invalid");
        return false;
    } else if (isOnlyNumbers(interests)) {
        document.getElementById("interestsError").innerText = "Please enter valid interests that do not consist of only numbers.";
        document.getElementById("interests").classList.add("invalid");
        return false;
    } else {
        document.getElementById("interestsError").innerText = ""; // Clear error message if valid
        document.getElementById("interests").classList.remove("invalid");
        return true;
    }
}
const interestsInput = document.getElementById("interests");

if (interestsInput) {
    interestsInput.addEventListener("input", validateInterests);
}
//--------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------
function validateBio(){

    // Validate Bio
    const bio = document.getElementById("bio").value;

    if (bio.trim() === "") {
        document.getElementById("bioError").innerText = "Please enter a bio.";
        document.getElementById("bio").classList.add("invalid");
        return false;
    } else if (isOnlyNumbers(bio)) {
        document.getElementById("bioError").innerText = "Please enter a valid bio that does not consist of only numbers.";
        document.getElementById("bio").classList.add("invalid");
        return false;
    } else {
        document.getElementById("bioError").innerText = ""; // Clear error message if valid
        document.getElementById("bio").classList.remove("invalid");
        return true;
    }

}
const bioInput = document.getElementById("bio");

if (bioInput) {
    bioInput.addEventListener("input", validateBio);
}

//--------------------------------------------------------------------------------------------------------------------


function handleFormSubmit(event) {

                event.preventDefault(); // Prevent the default form submission behavior

                // Get the form data and assign to a constant variable.
                const fullname = document.getElementById('fname').value;
                const studentNumber = document.getElementById('snum').value;           
                const campus = document.getElementById('campus').value;
                const campusNames = document.getElementById("campusName");              
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirmPassword').value;
                const interests = document.getElementById('interests').value;
                const bio = document.getElementById('bio').value;
                
                let isValid = true; // Flag to track form validity

                //Validate field specific requirements

                // Validate Full Name
               if (!validateFullName()) {
                    isValid = false;
                }

               // Validate Student Number
               if(!validateStudentNumber()){
                   isValid = false;
               }

               // Validate Campus
               if (!validateCampus()) {
                    isValid = false;
               }

               //Validate Email
               if (!validateEmail()) {
                    isValid = false;
               }

               //Validate Password
               if (!validatePassword()) {
                    isValid = false;
               }

               //Validate Confirm Password
               if (!validateConfirmPassword()) {
                    isValid = false;
               }

               //Validate Interests
               if (!validateInterests()) {
                    isValid = false;
               }

               //Validate Bio
               if (!validateBio()) {
                    isValid = false;
               }


                // If all fields are valid (if is valid is true)
                if (isValid) {
                    // Create a user object with the form data
                    const user = {
                        fullname: fullname,
                        studentNumber: studentNumber,
                        campus: campus,
                        campusName: campusNames.value,
                        email: email,
                        password: password,
                        interests: interests,
                        bio: bio
                    };
                    // Store the user object in local storage for profile page retrieval
                    //Combine with JSON.stringify to convert the object into a string for storage in local storage
                    
                    localStorage.setItem('user', JSON.stringify(user));

                    // Redirect to the profile page after successful sign-up
                    window.location.href = "Profile Page.html";

                }
            }

            // Function to validate full name format using regex
            // I want to allow full names with hyphens and multiple words
            function validFullName(fullname) {
                const correctpattern = /^[A-Za-z]+ [A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?$/;
                return correctpattern.test(fullname);
            }

            // Function to validate email format using regex
            // Additional functionality for validating email format even though it exists in html
            function validEmail(email) {
                const correctpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return correctpattern.test(email);
            }

            //Function to validate student number format using regex
            function validStudentNum(studentNumber) {
                const correctpattern = /^\d{9}$/;
                return correctpattern.test(studentNumber);
            }

            //Function to validate interests and bio format to make sure not consisting of only numbers
            function isOnlyNumbers(input) {
                const correctpattern = /^\d+$/;
                return correctpattern.test(input);
            }

            //Function to unhide campus options when the user selects "Campus" from the dropdown menu
            function showCampusOptions() {

                const campusSelect = document.getElementById("campus");
                const campusNames = document.getElementById("campusName");
                //Conditional statement for if campus selected, then show campus options else hide
                if (campusSelect) {
                    campusSelect.addEventListener("change", function () {

                        if (campusSelect.value === "Campus") {
                            campusNames.removeAttribute("hidden");
                        } else {
                            campusNames.setAttribute("hidden", "hidden");
                        }

                    });
                }
}
showCampusOptions();


// ================================
// PROFILE PAGE
// ================================


// Heading to display the user's name on the profile page
function displayUserName() {
    // Retrieve the user object from local storage
    //convert it back to a js object when retrieving it from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    //Put the user on the profile page
    document.getElementById("profileName").innerText = `Welcome, ${storedUser.fullname}!`;
}


// Function to display the user's profile information on the profile page as per assignment requirements
function displayUserProfile() {
    // Retrieve the user object from local storage
    //convert it back to an js object when retrieving it from local storage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    // Change innerHTML of the HTML elements with the user's profile information - added functionality for seperate heading styling
    document.getElementById("studentNumber").innerHTML = `<strong>Student Number:</strong> ${storedUser.studentNumber}`;
    document.getElementById("campus").innerHTML = `<strong>Campus or Distance Learning:</strong> ${storedUser.campus}`;
    document.getElementById("campusName").innerHTML = `<strong>Campus Name:</strong> ${storedUser.campusName}`;
    document.getElementById("email").innerHTML = `<strong>Email:</strong> ${storedUser.email}`;
    document.getElementById("interests").innerHTML = `<strong>Interests:</strong> ${storedUser.interests}`;
    document.getElementById("bio").innerHTML = `<strong>Bio:</strong> ${storedUser.bio}`;
}

// Check if on profile page to not get null error
// Call the function to display the user's profile information on the profile page
// Call the function to display the user's name on the profile page
if (document.getElementById("profileName")) {
    displayUserName();
    displayUserProfile();
}

// ================================
// FEED PAGE
// ================================

//Assign the elements from HTML to variables
const storedUser = JSON.parse(localStorage.getItem('user')); //feed required to pull contents from the user ie name
const postContent = document.getElementById("postContent");
const postButton = document.getElementById("postButton");
const postsContainer = document.getElementById("postsContainer");

//moved to on top of event listener to load before
//Take a JSON string of posts, if storedposts doesn't exist yet, create an array. If it does, grab that item and convert to
const storedPosts = localStorage.getItem("posts");
let posts;
if (storedPosts === null) {
posts = [];
} else {
posts = JSON.parse(storedPosts);
}

//Postbutton made conditional to prevent errors on the page where the button does not exist
if (postButton) {
    //Listening for click event and executing function after.
    //function in addEventListener
    postButton.addEventListener("click", function () {
        //function in addEventListener

        //New date to capture date
        const clickTime = new Date();

        //capture date and time at the click of post
        const formattedTime = clickTime.toLocaleTimeString();
        const formattedDate = clickTime.toLocaleDateString();

        //post content objects for storage and output
        const post = {
            username: storedUser.fullname,
            date: formattedDate,
            timeStamp: formattedTime,
            postContents: postContent.value,
            likes: 0

        };
        const content = postContent.value;
        if (content.trim() === "") {
            document.getElementById("postContentError").innerText = "You cannot submit a blank post.";
        } else {
            // NEW Post Creation using inner HTML
            // Will add button as a class as no longer 1 element
            const newPostIndex = posts.length;
            postsContainer.innerHTML += `
                <!-- for implementation of jQuery, assigning index to the length of posts array -->
                <div class="post-card" data-post-index="${newPostIndex}">
                    <strong>${post.username}</strong>
                    <p>${post.postContents}</p>
                    <small>${post.date} ${post.timeStamp}</small>
                    <!-- added template literal -->
                    <span class="likeCount">${post.likes}</span> 
                    <button class="likeButton">Likes</button>
                    <button class="DeleteButton">Delete</button>
                    
                </div>
            `;

            postContent.value = "";
            document.getElementById("postContentError").innerText = ""
            //Then Push post and store
            posts.push(post)
            localStorage.setItem("posts", JSON.stringify(posts))
            // Fade in the new post
            $(`[data-post-index="${newPostIndex}"]`).hide().fadeIn();//4.5 FADE IN requirement
        }
    });
}

//Loading saved posts functionality
// Will add button as a class as no longer 1 element
if (postsContainer) {
    for (let i = 0; i < posts.length; i++) {
        postsContainer.innerHTML += `
        <!-- for implementation of jQuery, data-post-index counts what post it is for persistent like counters -->
        <div class="post-card" data-post-index="${i}">
            <strong>${posts[i].username}</strong>
            <p>${posts[i].postContents}</p>
            <small>${posts[i].date} ${posts[i].timeStamp}</small>
            <span class="likeCount">${posts[i].likes}</span>
            <button class="likeButton">Likes</button>            
            <button class="DeleteButton">Delete</button>           
            
        </div>
    `;

    }
}

// ================================
// JQUERY FOR FEED PAGE
// ================================
//on like button click event, run this function
$(postsContainer).on("click", ".likeButton", function () {
    // %this is the element triggering, parent goes to top html level, then find that ID and change to int
    let likeCount = parseInt($(this).parent().find(".likeCount").text());
        //Add 1 to every event
        likeCount += 1;
        //change inner text to new like count
        $(this).parent().find(".likeCount").text(likeCount);
        // Toggle visual styling
        $(this).toggleClass("liked");
        //Counter for likes index
        let postIndex = $(this).parent().data("post-index");
         // Update the actual post data
        posts[postIndex].likes += 1;
        //save to localstorage
        localStorage.setItem("posts", JSON.stringify(posts));


});

//on delete button click event, run this function
$(postsContainer).on("click", ".DeleteButton", function () {
    //at post idex
    let postIndex = $(this).parent().data("post-index");
    if (postIndex !== undefined && confirm("Are you sure you want to delete this post?")) {
        //spice post and only 1
        posts.splice(postIndex,1)
        //add to storage
        localStorage.setItem("posts", JSON.stringify(posts));
        // delete the post
        $(this).parent().remove();

        //Update HTML attribute for array/page disagreement
        $(postsContainer).children().each(function (index) {

            //updates the actual HTML attribute:
            $(this).attr("data-post-index", index);
            //updates the value jQuery has cached for .data()
            $(this).data("post-index", index);

});

    }
});
// JQUERY for profile toggle button
$("#profileDetailsButton").on("click", function () {
    $("#profileDetails").slideToggle();
});
// JQUERY for profile toggle button
$("nav a").hover(function () {
    $(this).addClass("nav-hover");
}, function () {
    $(this).removeClass("nav-hover");
});
// JQUERY for LIVE PROFILE PREVIEW (4.2)
$("#fname").on("input", function () {
    $("#previewName").text($(this).val())
});
$("#bio").on("input", function () {
    $("#previewBio").text($(this).val())
});
$("#interests").on("input", function () {
    $("#previewInterests").empty();
    const interests = $(this).val().split(",");
    for (let i = 0; i < interests.length; i++) {
        //create a list and make sure to account for empty spaces and ,
        $("#previewInterests").append(`<li class="interestTag">${interests[i].trim()}</li>`);
    }
});




