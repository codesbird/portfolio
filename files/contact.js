let spinner = document.getElementById("spinner");

function validateContactForm(formData) {
    const errors = {};

    // Name validation
    if (!formData.name || formData.name.trim() === '') {
        errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    } else if (formData.name.trim().length > 50) {
        errors.name = 'Name must not exceed 50 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name.trim())) {
        errors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Email validation
    if (!formData.email || formData.email.trim() === '') {
        errors.email = 'Email is required';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            errors.email = 'Please enter a valid email address';
        } else if (formData.email.trim().length > 100) {
            errors.email = 'Email must not exceed 100 characters';
        }
    }

    // Phone validation
    if (!formData.phone || formData.phone.trim() === '') {
        errors.phone = 'Phone number is required';
    } else {
        // Remove all non-digit characters for validation
        const phoneDigits = formData.phone.replace(/\D/g, '');
        if (phoneDigits.length < 10) {
            errors.phone = 'Phone number must be at least 10 digits';
        } else if (phoneDigits.length > 15) {
            errors.phone = 'Phone number must not exceed 15 digits';
        } else if (!/^[\d\s\-\(\)\+\.]+$/.test(formData.phone.trim())) {
            errors.phone = 'Phone number contains invalid characters';
        }
    }

    // Subject validation
    if (!formData.subject || formData.subject.trim() === '') {
        errors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
        errors.subject = 'Subject must be at least 3 characters long';
    } else if (formData.subject.trim().length > 100) {
        errors.subject = 'Subject must not exceed 100 characters';
    }

    // Message validation
    if (!formData.message || formData.message.trim() === '') {
        errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 1000) {
        errors.message = 'Message must not exceed 1000 characters';
    }

    // Return validation result
    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
}

// Example usage function
function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        subject: document.getElementById("subject").value,
        message: form.message.value
    };

    console.log("form data ", formData)

    // Validate form
    const validation = validateContactForm(formData);

    if (validation.isValid) {
        console.log('Form is valid! Submitting...');
        // Proceed with form submission
        submitForm(formData);
    } else {
        console.log('Form has errors:', validation.errors);
        // Display errors to user
        displayFormErrors(validation.errors);
    }
}

// Helper function to display errors
function displayFormErrors(errors) {
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.remove());

    // Display new errors
    Object.keys(errors).forEach(field => {
        const fieldElement = document.querySelector(`[name="${field}"]`);
        if (fieldElement) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = 'red';
            errorDiv.style.fontSize = '14px';
            errorDiv.style.marginTop = '5px';
            errorDiv.textContent = errors[field];
            fieldElement.parentNode.appendChild(errorDiv);
        }
    });
}

// Helper function for form submission
function submitForm(formData) {
    // Replace this with your actual form submission logic
    console.log('Submitting form with data:', formData);
    formData.timestemp = getDateTime()
    submition = emailjs.send("service_os5o2w6", "template_sakisir", formData);
    submition.then((data) => {
        console.log("Form Submted Successfully !")
        spinner.classList.add('d-none')
        spinner.previousElementSibling.previousElementSibling.classList.remove('d-none')

        setTimeout(() => {
            spinner.previousElementSibling.previousElementSibling.classList.add('d-none')
            spinner.previousElementSibling.classList.remove('d-none')
            contact_form.reset()
        }, 3000);
    })
}

let contact_form = document.getElementById('contact_form');

contact_form.onsubmit = (event) => {
    // emailjs.send(serviceID, templateID, templateParams, options);
    event.preventDefault()
    spinner.classList.remove('d-none')
    spinner.previousElementSibling.classList.add('d-none')
    handleFormSubmit(event)
}

function getDateTime() {

    var currentdate = new Date();
    var datetime = "" + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime
}