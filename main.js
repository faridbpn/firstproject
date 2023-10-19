// Toggle & Responsive Navigation

const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListener("click", () => {
      // Toggle nav list and burger class
      navList.classList.toggle("nav-active");
      burger.classList.toggle("toggle-burger");
    });
};

navSlide();

// hapus form setelah go back

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};