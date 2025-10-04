document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
            email: document.getElementById("email").value
        };
        // BUG: trying to access undefined property
        console.log("User logged:", data.user.name);
        dashboard.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });
});
