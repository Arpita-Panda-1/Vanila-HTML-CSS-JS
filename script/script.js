/* =========================================================
   RESPONSIVE STICKY NAVBAR
========================================================= */

const navToggle = document.getElementById("navToggle");

const navMenu = document.getElementById("navMenu");

/* TOGGLE MENU */

navToggle.addEventListener("click", () => {

    navToggle.classList.toggle("active");

    navMenu.classList.toggle("active");

});

/* CLOSE MENU ON LINK CLICK */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navToggle.classList.remove("active");

        navMenu.classList.remove("active");

    });

});

/* RESET ON DESKTOP */

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navToggle.classList.remove("active");

        navMenu.classList.remove("active");

    }

});

/* =========================================================
   HDPE SLIDER
========================================================= */

const hdpeTrack = document.querySelector(".hdpe-gallery-track");

const hdpeSlides = document.querySelectorAll(".hdpe-slide");

const hdpeThumbs = document.querySelectorAll(".hdpe-thumb");

const hdpePrevBtn = document.querySelector(".hdpe-arrow-prev");

const hdpeNextBtn = document.querySelector(".hdpe-arrow-next");

let hdpeCurrentIndex = 0;

let hdpeAutoSlide;

/* =========================================================
   UPDATE SLIDER
========================================================= */

function hdpeUpdateSlider(index) {

    hdpeTrack.style.transform =
        `translateX(-${index * 100}%)`;

    hdpeThumbs.forEach((thumb) => {

        thumb.classList.remove("hdpe-thumb-active");

    });

    hdpeThumbs[index].classList.add("hdpe-thumb-active");

    hdpeCurrentIndex = index;

}

/* =========================================================
   NEXT SLIDE
========================================================= */

function hdpeNextSlide() {

    hdpeCurrentIndex++;

    if (hdpeCurrentIndex >= hdpeSlides.length) {

        hdpeCurrentIndex = 0;

    }

    hdpeUpdateSlider(hdpeCurrentIndex);

}

/* =========================================================
   PREVIOUS SLIDE
========================================================= */

function hdpePrevSlide() {

    hdpeCurrentIndex--;

    if (hdpeCurrentIndex < 0) {

        hdpeCurrentIndex = hdpeSlides.length - 1;

    }

    hdpeUpdateSlider(hdpeCurrentIndex);

}

/* =========================================================
   BUTTON EVENTS
========================================================= */

hdpeNextBtn.addEventListener("click", () => {

    hdpeNextSlide();

    hdpeResetAutoSlide();

});

hdpePrevBtn.addEventListener("click", () => {

    hdpePrevSlide();

    hdpeResetAutoSlide();

});

/* =========================================================
   THUMB CLICK
========================================================= */

hdpeThumbs.forEach((thumb, index) => {

    thumb.addEventListener("click", () => {

        hdpeUpdateSlider(index);

        hdpeResetAutoSlide();

    });

});

/* =========================================================
   AUTO SLIDE
========================================================= */

function hdpeStartAutoSlide() {

    hdpeAutoSlide = setInterval(() => {

        hdpeNextSlide();

    }, 5000);

}

function hdpeResetAutoSlide() {

    clearInterval(hdpeAutoSlide);

    hdpeStartAutoSlide();

}

hdpeStartAutoSlide();

/* =========================================================
   ADVANCED IMAGE ZOOM
========================================================= */

const hdpeZoomSlides = document.querySelectorAll(".hdpe-slide");

hdpeZoomSlides.forEach((slide) => {

    const hdpeImage = slide.querySelector("img");

    const hdpeZoom = slide.querySelector(".hdpe-zoom-view");

    slide.addEventListener("mouseenter", () => {

        if (window.innerWidth <= 768) return;

        hdpeZoom.style.display = "block";

    });

    slide.addEventListener("mouseleave", () => {

        hdpeZoom.style.display = "none";

        hdpeImage.style.transform = "scale(1)";

    });

    slide.addEventListener("mousemove", (e) => {

        if (window.innerWidth <= 768) return;

        const rect = slide.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const xPercent = (x / rect.width) * 100;

        const yPercent = (y / rect.height) * 100;

        /* MAIN IMAGE */

        hdpeImage.style.transformOrigin =
            `${xPercent}% ${yPercent}%`;

        hdpeImage.style.transform =
            "scale(1.08)";

        /* ZOOM WINDOW */

        hdpeZoom.style.backgroundImage =
            `url(${hdpeImage.src})`;

        hdpeZoom.style.backgroundSize =
            "350%";

        hdpeZoom.style.backgroundPosition =
            `${xPercent}% ${yPercent}%`;

    });

});

/* =========================================================
   FAQ
========================================================= */

const faqItems = document.querySelectorAll(".faq-accordion-item");

faqItems.forEach((item) => {

    const header = item.querySelector(".faq-accordion-header");

    const icon = item.querySelector(".faq-icon");

    header.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach((faq) => {

            faq.classList.remove("active");

            const faqIcon = faq.querySelector(".faq-icon");

            faqIcon.innerHTML = "▼";

        });

        if (!isActive) {

            item.classList.add("active");

            icon.innerHTML = "▲";

        }

    });

});

/* ==========================================
   INDUSTRIES CONTINUOUS SLIDER
========================================== */

const industriesTrack = document.querySelector(
    ".industries-slider-track"
);

const industriesPrevBtn = document.querySelector(
    ".industries-slider-prev"
);

const industriesNextBtn = document.querySelector(
    ".industries-slider-next"
);

const industriesWrapper = document.querySelector(
    ".industries-slider-wrapper"
);

/* DUPLICATE FOR INFINITE LOOP */

industriesTrack.innerHTML += industriesTrack.innerHTML;

let industriesPosition = 0;

let industriesSpeed = 0.7;

let isPaused = false;

/* AUTO SLIDE */

function industriesAnimate() {

    if (!isPaused) {

        industriesPosition += industriesSpeed;

        const resetPoint =
            industriesTrack.scrollWidth / 2;

        if (industriesPosition >= resetPoint) {

            industriesPosition = 0;

        }

        industriesTrack.style.transform =
            `translateX(-${industriesPosition}px)`;

    }

    requestAnimationFrame(industriesAnimate);

}

industriesAnimate();

/* BUTTON MOVE */

function industriesMoveNext() {

    industriesPosition += 340;

}

function industriesMovePrev() {

    industriesPosition -= 340;

    if (industriesPosition < 0) {

        industriesPosition =
            industriesTrack.scrollWidth / 2;

    }

}

/* BUTTON EVENTS */

industriesNextBtn.addEventListener("click", () => {

    industriesMoveNext();

});

industriesPrevBtn.addEventListener("click", () => {

    industriesMovePrev();

});

/* HOVER PAUSE */

industriesWrapper.addEventListener("mouseenter", () => {

    isPaused = true;

});

industriesWrapper.addEventListener("mouseleave", () => {

    isPaused = false;

});

/* =========================================================
   MANUFACTURING PROCESS
========================================================= */

const manufacturingData = [

    {
        step: "Raw Material",
        title: "High-Grade Raw Material Selection",
        text: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
        features: [
            "PE100 grade material",
            "Optimal molecular weight distribution"
        ]
    },

    {
        step: "Extrusion",
        title: "Precision Extrusion Technology",
        text: "Advanced extrusion machines maintain constant pressure and temperature for uniform pipe dimensions.",
        features: [
            "Computer-controlled extrusion",
            "Consistent wall thickness"
        ]
    },

    {
        step: "Cooling",
        title: "Controlled Cooling System",
        text: "Pipes pass through calibrated cooling tanks ensuring dimensional stability and strength.",
        features: [
            "Multi-stage cooling",
            "Temperature stability"
        ]
    },

    {
        step: "Sizing",
        title: "Accurate Pipe Sizing",
        text: "Vacuum calibration systems maintain perfect diameter accuracy throughout production.",
        features: [
            "Vacuum calibration",
            "Precision tolerance control"
        ]
    },

    {
        step: "Quality Control",
        title: "Strict Quality Inspection",
        text: "Every pipe undergoes pressure, dimensional, and surface quality testing.",
        features: [
            "Pressure tested",
            "Surface defect inspection"
        ]
    },

    {
        step: "Marking",
        title: "Automated Product Marking",
        text: "Automated systems print branding and specifications clearly on every pipe.",
        features: [
            "Permanent ink marking",
            "Batch traceability"
        ]
    },

    {
        step: "Cutting",
        title: "Precision Pipe Cutting",
        text: "High-speed cutters ensure clean and accurate pipe lengths.",
        features: [
            "Automatic length control",
            "Smooth cutting finish"
        ]
    },

    {
        step: "Packaging",
        title: "Secure Final Packaging",
        text: "Finished products are bundled and packed securely for transportation.",
        features: [
            "Damage protection",
            "Export-ready packaging"
        ]
    }

];

/* ELEMENTS */

const manufacturingTabs = document.querySelectorAll(".manufacturing-tab");

const manufacturingMobileStep = document.querySelector(
    ".manufacturing-mobile-step"
);

const manufacturingTitle = document.querySelector(
    ".manufacturing-content-title"
);

const manufacturingText = document.querySelector(
    ".manufacturing-content-text"
);

const manufacturingFeatureList = document.querySelector(
    ".manufacturing-feature-list"
);

const manufacturingPrev = document.querySelector(
    ".manufacturing-mobile-prev"
);

const manufacturingNext = document.querySelector(
    ".manufacturing-mobile-next"
);

let manufacturingCurrentStep = 0;

/* UPDATE CONTENT */

function manufacturingUpdateContent(index){

    const item = manufacturingData[index];

    manufacturingTitle.innerHTML = item.title;

    manufacturingText.innerHTML = item.text;

    manufacturingFeatureList.innerHTML = `
        <li>
            <span></span>
            ${item.features[0]}
        </li>

        <li>
            <span></span>
            ${item.features[1]}
        </li>
    `;

    manufacturingMobileStep.innerHTML =
        `Step ${index + 1}/8: ${item.step}`;

    manufacturingTabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    manufacturingTabs[index].classList.add("active");

    manufacturingCurrentStep = index;

}

/* TAB CLICK */

manufacturingTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        manufacturingUpdateContent(index);

    });

});

/* MOBILE NEXT */

manufacturingNext.addEventListener("click", () => {

    manufacturingCurrentStep++;

    if(manufacturingCurrentStep >= manufacturingData.length){

        manufacturingCurrentStep = 0;

    }

    manufacturingUpdateContent(manufacturingCurrentStep);

});

/* MOBILE PREV */

manufacturingPrev.addEventListener("click", () => {

    manufacturingCurrentStep--;

    if(manufacturingCurrentStep < 0){

        manufacturingCurrentStep =
            manufacturingData.length - 1;

    }

    manufacturingUpdateContent(manufacturingCurrentStep);

});

/* =========================================================
   IMAGE CAROUSEL
========================================================= */

const manufacturingTrack = document.querySelector(
    ".manufacturing-image-track"
);

const manufacturingSlides = document.querySelectorAll(
    ".manufacturing-image-slide"
);

const manufacturingImagePrev = document.querySelector(
    ".manufacturing-image-prev"
);

const manufacturingImageNext = document.querySelector(
    ".manufacturing-image-next"
);

let manufacturingImageIndex = 0;

let manufacturingAutoSlide;

/* UPDATE */

function manufacturingUpdateSlider(){

    manufacturingTrack.style.transform =
        `translateX(-${manufacturingImageIndex * 100}%)`;

}

/* NEXT */

function manufacturingNextSlide(){

    manufacturingImageIndex++;

    if(manufacturingImageIndex >= manufacturingSlides.length){

        manufacturingImageIndex = 0;

    }

    manufacturingUpdateSlider();

}

/* PREV */

function manufacturingPrevSlide(){

    manufacturingImageIndex--;

    if(manufacturingImageIndex < 0){

        manufacturingImageIndex =
            manufacturingSlides.length - 1;

    }

    manufacturingUpdateSlider();

}

/* BUTTONS */

manufacturingImageNext.addEventListener("click", () => {

    manufacturingNextSlide();

    resetManufacturingAuto();

});

manufacturingImagePrev.addEventListener("click", () => {

    manufacturingPrevSlide();

    resetManufacturingAuto();

});

/* AUTO */

function startManufacturingAuto(){

    manufacturingAutoSlide = setInterval(() => {

        manufacturingNextSlide();

    }, 4000);

}

function resetManufacturingAuto(){

    clearInterval(manufacturingAutoSlide);

    startManufacturingAuto();

}

startManufacturingAuto();

/* =========================================================
   TESTIMONIAL CONTINUOUS SLIDER
========================================================= */

const testimonialTrack = document.querySelector(
    ".testimonial-slider-track"
);

const testimonialWrapper = document.querySelector(
    ".testimonial-slider-wrapper"
);

/* DUPLICATE FOR INFINITE LOOP */

testimonialTrack.innerHTML += testimonialTrack.innerHTML;

/* VARIABLES */

let testimonialPosition = 0;

let testimonialSpeed = 0.7;

let testimonialPaused = false;

let testimonialIsDragging = false;

let testimonialStartX = 0;

let testimonialScrollStart = 0;

/* =========================================================
   AUTO ANIMATION
========================================================= */

function testimonialAnimate() {

    if (!testimonialPaused && !testimonialIsDragging) {

        testimonialPosition += testimonialSpeed;

        const resetPoint =
            testimonialTrack.scrollWidth / 2;

        if (testimonialPosition >= resetPoint) {

            testimonialPosition = 0;

        }

        testimonialTrack.style.transform =
            `translateX(-${testimonialPosition}px)`;

    }

    requestAnimationFrame(testimonialAnimate);

}

testimonialAnimate();

/* =========================================================
   DRAG FUNCTIONALITY
========================================================= */

function testimonialDragStart(e) {

    testimonialIsDragging = true;

    testimonialPaused = true;

    testimonialStartX =
        e.pageX || e.touches[0].pageX;

    testimonialScrollStart = testimonialPosition;

}

function testimonialDragging(e) {

    if (!testimonialIsDragging) return;

    const currentX =
        e.pageX || e.touches[0].pageX;

    const walk =
        testimonialStartX - currentX;

    testimonialPosition =
        testimonialScrollStart + walk;

    testimonialTrack.style.transform =
        `translateX(-${testimonialPosition}px)`;

}

function testimonialDragEnd() {

    testimonialIsDragging = false;

    testimonialPaused = false;

}

/* MOUSE EVENTS */

testimonialWrapper.addEventListener(
    "mousedown",
    testimonialDragStart
);

testimonialWrapper.addEventListener(
    "mousemove",
    testimonialDragging
);

testimonialWrapper.addEventListener(
    "mouseup",
    testimonialDragEnd
);

testimonialWrapper.addEventListener(
    "mouseleave",
    testimonialDragEnd
);

/* TOUCH EVENTS */

testimonialWrapper.addEventListener(
    "touchstart",
    testimonialDragStart,
    { passive: true }
);

testimonialWrapper.addEventListener(
    "touchmove",
    testimonialDragging,
    { passive: true }
);

testimonialWrapper.addEventListener(
    "touchend",
    testimonialDragEnd
);

/* HOVER PAUSE */

testimonialWrapper.addEventListener(
    "mouseenter",
    () => {

        testimonialPaused = true;

    }
);

testimonialWrapper.addEventListener(
    "mouseleave",
    () => {

        testimonialPaused = false;

    }
);


/* ==========================================
   PORTFOLIO CARD BUTTON EFFECT
========================================== */

const portfolioButtons = document.querySelectorAll(
    ".portfolio-btn"
);

portfolioButtons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.innerHTML = "Explore More →";

    });

    button.addEventListener("mouseleave", () => {

        button.innerHTML = "Learn More";

    });

});

/* ==========================================
   CTA BUTTON EFFECT
========================================== */

const ctaButton = document.querySelector(
    ".portfolio-cta-btn"
);

ctaButton.addEventListener("mouseenter", () => {

    ctaButton.style.transform =
        "translateY(-2px) scale(1.02)";

});

ctaButton.addEventListener("mouseleave", () => {

    ctaButton.style.transform =
        "translateY(0px) scale(1)";

});

/* =========================================================
   RESOURCES CTA FORM
========================================================= */

const resourcesForm = document.querySelector(
    ".resources-form"
);

if(resourcesForm){

    resourcesForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const submitBtn = document.querySelector(
            ".resources-submit-btn"
        );

        submitBtn.innerHTML = "Request Sent ✓";

        submitBtn.style.background = "#2d3ea8";

        setTimeout(() => {

            submitBtn.innerHTML =
                "Request Custom Quote";

            submitBtn.style.background =
                "#1f2937";

        }, 2500);

        resourcesForm.reset();

    });

}

/* =========================================================
   FOOTER SOCIAL HOVER EFFECT
========================================================= */

const mangalamFooterSocials = document.querySelectorAll(
    ".mangalam-footer-socials a"
);

mangalamFooterSocials.forEach((social) => {

    social.addEventListener("mouseenter", () => {

        social.style.transform =
            "translateY(-2px)";

    });

    social.addEventListener("mouseleave", () => {

        social.style.transform =
            "translateY(0px)";

    });

});