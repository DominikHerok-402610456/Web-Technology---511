//Assign form ID to a variable
const signupForm = document.getElementById("signupForm");
//Listen for form submission event and call the handleFormSubmit function
signupForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {

                event.preventDefault(); // Prevent the default form submission behavior

                // Get the form data
                const fullname = document.getElementById('fname').value;
                const studentNumber = document.getElementById('snum').value;           
                const campus = document.getElementById('campus').value;              
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
                    console.log("Full Name is required.");
                
                }

            }