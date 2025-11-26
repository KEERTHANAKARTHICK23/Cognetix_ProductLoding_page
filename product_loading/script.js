document.addEventListener("DOMContentLoaded", () => {

    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const signupForm = document.getElementById("signupForm");

    // Open Modal
    openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Form Submit
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Thank you for signing up!");

        modal.classList.add("hidden");
        signupForm.reset();
    });
});
