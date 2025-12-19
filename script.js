if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onload = () => {
  window.scrollTo(0, 0);
};

const sections = document.querySelectorAll("section, footer");

// Initial hidden state
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
});

// Intersection Observer for reveal
const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

// Observe each section
sections.forEach(section => {
    revealOnScroll.observe(section);
});


/* ================= BUTTON FEEDBACK ================= */

// Subtle click feedback for links/buttons
const buttons = document.querySelectorAll("a");

buttons.forEach(button => {
    button.addEventListener("mousedown", () => {
        button.style.transform = "scale(0.96)";
    });

    button.addEventListener("mouseup", () => {
        button.style.transform = "scale(1)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});


/* ================= PAGE LOAD SMOOTHNESS ================= */

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


/* ================= SCROLL TO TOP ON REFRESH ================= */

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};


/* ================= VISION CONVERGENCE ANIMATION ================= */

document.addEventListener("DOMContentLoaded", () => {
    const visionSection = document.querySelector("#vision");
    const segments = document.querySelectorAll(".vision-segment");

    if (!visionSection || segments.length === 0) return;

    let hasAnimated = false;

    const visionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;

                    segments.forEach((segment, index) => {
                        setTimeout(() => {
                            segment.classList.add("segment-in");
                        }, index * 200);
                    });
                }
            });
        },
        {
            threshold: 0.5
        }
    );

    visionObserver.observe(visionSection);
});
console.log("Vision segments:", segments.length);
