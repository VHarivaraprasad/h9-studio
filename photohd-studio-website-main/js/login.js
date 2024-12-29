document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Pre-set credentials
    const validEmail = 'user@example.com';
    const validPassword = 'password123';
  
    // Input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const loginError = document.getElementById('loginError');
  
    // Clear previous error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    loginError.style.display = 'none';
  
    let isValid = true;
  
    // Email validation
    if (email !== validEmail) {
      emailError.textContent = 'Incorrect email.';
      emailError.style.display = 'block';
      isValid = false;
    }
  
    // Password validation
    if (password !== validPassword) {
      passwordError.textContent = 'Incorrect password.';
      passwordError.style.display = 'block';
      isValid = false;
    }
  
    // Login validation
    if (isValid) {
      // Redirect to index.html if login is successful
      alert('Login successful!');
      window.location.href = 'index.html';
    } else {
      loginError.textContent = 'Login failed. Please check your credentials.';
      loginError.style.display = 'block';
    }
  });
  