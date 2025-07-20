
document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Demo feature only! Full version coming soon.");
    });
});
