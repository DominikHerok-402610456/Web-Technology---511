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


function handleFormSubmit(event) {

                event.preventDefault(); // Prevent the default form submission behavior

                // Get the form data and assign to a constant variable.
                const fullname = document.getElementById('fname').value;
                const studentNumber = document.getElementById('snum').value;           
                const campus = document.getElementById('campus').value;
                const campusNames = document.getElementById("campusName");              
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                const interests = document.getElementById('interests').value;
                const bio = document.getElementById('bio').value;
                
                let isValid = true; // Flag to track form validity

                //Validate field specific requirements
                // Validate Full Name
                if (fullname === "") {
                    isValid = false;
                    // Find the HTML element with the ID "fnameError"
                    // Change the text inside that element (span) to display the error message
                    document.getElementById("fnameError").innerText = "Please enter a name and surname.";
                //Validate at least first and last name with a space in between  
                } else if (!validFullName(fullname)) {
                    document.getElementById("fnameError").innerText = "Please enter your full name with a space.";
                } else {
                    document.getElementById("fnameError").innerText = ""; // Clear error message if valid
               }
               // Validate Student Number
               //Check if empty
                if (studentNumber === "") {
                    isValid = false;
                    document.getElementById("snumError").innerText = "Please enter your student number.";
                }
                //Check if length is not 9 digits
                else if (studentNumber.length !== 9) {
                    isValid = false;
                    document.getElementById("snumError").innerText = "Please enter a valid student number (9 digits e.g 123456789).";
                } else if (!validStudentNum(studentNumber)) { // Check if student number contains only digits
                    isValid = false;
                    document.getElementById("snumError").innerText = "Please enter a valid student number (only digits e.g 123456789).";
                } else {
                    document.getElementById("snumError").innerText = ""; // Clear error message if valid
               }

                // Validate Campus - Drop down with options for campus or DL?
                //Drop down menu with options for campus or distance learning. If no option is selected, display an error message.
                if (campus === "") {
                    isValid = false;
                    document.getElementById("campusError").innerText = "Please select your campus or distance learning option.";
                } else {
                    document.getElementById("campusError").innerText = ""; // Clear error message if valid
                }

                //Validate Email Address
                if (email === "") {
                    isValid = false;
                    document.getElementById("emailError").innerText = "Please enter your email address.";
                //Check for standard email format using regex
                } else if (!validEmail(email)) {
                    isValid = false;
                    document.getElementById("emailError").innerText = "Please enter a valid email address.";
                } else {
                    document.getElementById("emailError").innerText = ""; // Clear error message if valid
                }

                // Validate Password
                if (password === "") {
                    isValid = false;
                    document.getElementById("passwordError").innerText = "Please enter a password.";
                //Check for minimum length of 8 characters
                } else if (password.length < 8) {
                    isValid = false;
                    document.getElementById("passwordError").innerText = "Password must be at least 8 characters long.";
                } else {
                    document.getElementById("passwordError").innerText = ""; // Clear error message if valid
                }

                // Validate Confirm Password
                if (confirmPassword === "") {
                    isValid = false;
                    document.getElementById("confirmPasswordError").innerText = "Please confirm your password.";
                //Check if password and confirm password match
                } else if (password !== confirmPassword) {
                    isValid = false;
                    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
                } else {
                    document.getElementById("confirmPasswordError").innerText = ""; // Clear error message if valid
                }

                // Validate Interests
                //Added .trim() to check for whitespace only input
                if (interests.trim() === "") {
                    isValid = false;
                    document.getElementById("interestsError").innerText = "Please enter your interests.";
                } else if (isOnlyNumbers(interests)) {
                    isValid = false;
                    document.getElementById("interestsError").innerText = "Please enter valid interests that do not consist of only numbers.";
                } else {
                    document.getElementById("interestsError").innerText = ""; // Clear error message if valid
                }

                // Validate Bio
                if (bio.trim() === "") {
                    isValid = false;
                    document.getElementById("bioError").innerText = "Please enter a bio.";
                } else if (isOnlyNumbers(bio)) {
                    isValid = false;
                    document.getElementById("bioError").innerText = "Please enter a valid bio that does not consist of only numbers.";
                } else {
                    document.getElementById("bioError").innerText = ""; // Clear error message if valid
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
            function validFullName(fullname) {
                const correctpattern = /^[A-Za-z]+ [A-Za-z]+(-[A-Za-z]+)?( [A-Za-z]+)?$/;
                return correctpattern.test(fullname);
            }

            // Function to validate email format using regex
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
    // Change innerText of the HTML elements with the user's profile information
    document.getElementById("studentNumber").innerText = `Student Number: ${storedUser.studentNumber}`;
    document.getElementById("campus").innerText = `Campus or Distance Learning: ${storedUser.campus}`;
    document.getElementById("campusName").innerText = `Campus Name: ${storedUser.campusName}`;
    document.getElementById("email").innerText = `Email: ${storedUser.email}`;
    document.getElementById("interests").innerText = `Interests: ${storedUser.interests}`;
    document.getElementById("bio").innerText = `Bio: ${storedUser.bio}`;
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



//Listening for click event and executing function after.
//function in addEventListener
postButton.addEventListener("click", function () {
    //function in addEventListener
    
    //New date to capture date
    const clickTime = new Date();
    
    //capture date and time at the click of post
    const formattedTime = clickTime.toLocaleTimeString();
    const formattedDate = clickTime.toLocaleDateString();
    
    //post content object for storage and output
    const post = {
        username: storedUser.fullname,
        date: formattedDate,
        timeStamp: formattedTime,
        postContents: postContent.value
    };

    const content = postContent.value;
    if (content.trim() === ""){
        document.getElementById("postContentError").innerText = "You cannot submit a blank post.";
    } else {
        postsContainer.innerHTML += `
            <div>
                <strong>${post.username}</strong>
                <p>${post.postContents}</p>
                <small>${post.date} ${post.timeStamp}</small>
            </div>
        `;

        postContent.value = "";

        document.getElementById("postContentError").innerText = ""
    }
    

    //Take JSON string of posts, if storedposts doesnt exist yet, create an array. If it does, grab that item and convert to 
    const storedPosts = localStorage.getItem("posts");
    let posts;
    if (storedPosts === null) {
    posts = [];
    } else {
    posts = JSON.parse(storedPosts);
    }
    posts.push(post)
    localStorage.setItem("posts",JSON.stringify(posts) )

    

    

  
});




