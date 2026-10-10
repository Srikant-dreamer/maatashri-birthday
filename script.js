```javascript
document.addEventListener("DOMContentLoaded", function () {
    // ========================================
    // 1. GET WEBSITE ELEMENTS
    // ========================================

    const surpriseButton = document.getElementById("surpriseButton");
    const continueButton = document.getElementById("continueButton");
    const wishButton = document.getElementById("wishButton");
    const wishMessage = document.getElementById("wishMessage");
    const backToTop = document.getElementById("backToTop");
    const particlesContainer = document.getElementById("particles");


    // ========================================
    // 2. SMOOTH SCROLLING
    // ========================================

    function goToSection(sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }


    // ========================================
    // 3. HERO SURPRISE BUTTON
    // ========================================

    if (surpriseButton) {
        surpriseButton.addEventListener("click", function () {
            goToSection("message");
        });
    }


    // ========================================
    // 4. CONTINUE TO MEMORIES BUTTON
    // ========================================

    if (continueButton) {
        continueButton.addEventListener("click", function () {
            goToSection("memories");
        });
    }


    // ========================================
    // 5. BIRTHDAY WISH BUTTON
    // ========================================

    if (wishButton && wishMessage) {
        wishButton.addEventListener("click", function () {

            // Show the special birthday message
            wishMessage.classList.add("visible");

            // Update the button text
            wishButton.textContent = "Your Wish Is Special ♥";

            // Prevent repeated clicks
            wishButton.disabled = true;

            // Create floating hearts
            createCelebrationHearts();

            // Scroll to the revealed message
            setTimeout(function () {
                wishMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }, 300);
        });
    }


    // ========================================
    // 6. BACK TO TOP BUTTON
    // ========================================

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    // ========================================
    // 7. GOLDEN FLOATING PARTICLES
    // ========================================

    function createParticles() {
        if (!particlesContainer) {
            return;
        }

        // Avoid creating duplicate particles
        particlesContainer.innerHTML = "";

        const particleCount = window.innerWidth < 600 ? 16 : 28;

        for (let i = 0; i < particleCount; i++) {

            const particle = document.createElement("span");

            particle.classList.add("particle");

            // Random horizontal position
            particle.style.left = Math.random() * 100 + "%";

            // Random animation speed
            particle.style.animationDuration =
                (Math.random() * 10 + 8) + "s";

            // Random animation delay
            particle.style.animationDelay =
                (Math.random() * 12) + "s";

            // Random particle size
            const size = Math.random() * 3 + 1;

            particle.style.width = size + "px";
            particle.style.height = size + "px";

            particlesContainer.appendChild(particle);
        }
    }

    createParticles();


    // ========================================
    // 8. FLOATING CELEBRATION HEARTS
    // ========================================

    function createCelebrationHearts() {

        const colors = [
            "#d8b878",
            "#f4dfac",
            "#ffffff",
            "#e8c878"
        ];

        for (let i = 0; i < 30; i++) {

            const heart = document.createElement("span");

            // Alternate between outlined and filled hearts
            heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

            heart.style.position = "fixed";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.bottom = "-30px";

            heart.style.fontSize =
                (Math.random() * 18 + 12) + "px";

            heart.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            heart.style.pointerEvents = "none";
            heart.style.zIndex = "9999";

            document.body.appendChild(heart);

            const distance = window.innerHeight + 100;
            const rotation = Math.random() * 90 - 45;
            const duration = Math.random() * 2500 + 2500;

            // Animate each heart upwards
            const animation = heart.animate(
                [
                    {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        offset: 0.15
                    },
                    {
                        transform:
                            "translateY(-" + distance + "px) rotate(" +
                            rotation + "deg)",
                        opacity: 0
                    }
                ],
                {
                    duration: duration,
                    easing: "ease-out"
                }
            );

            // Remove the heart after the animation finishes
            animation.onfinish = function () {
                heart.remove();
            };
        }
    }


    // ========================================
    // 9. REVEAL ANIMATIONS ON SCROLL
    // ========================================

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window && revealElements.length > 0) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {
        // Ensure content remains visible on unsupported browsers
        revealElements.forEach(function (element) {
            element.classList.add("active");
        });
    }


    // ========================================
    // 10. WEBSITE READY
    // ========================================

    console.log("♥ Maatashri Birthday Website is ready! ♥");

});
```
