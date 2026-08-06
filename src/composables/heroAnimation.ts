import gsap from "gsap";

export function heroAnimation() {

    const play = () => {

        const timeline = gsap.timeline();

        timeline.from("[data-hero-image]", {
            x: 80,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
            onComplete() {
                gsap.to("[data-hero-image]", {
                y: -16,
                duration: 2.5,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true,
            });
            },
        })

        .from("[data-hero-greeting]", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power4.out"
        }, "-=0.8")

        .from("[data-hero-name]", {
            y: 20,
            opacity: 0
        }, "-=0.5")

        .from("[data-hero-stack]", {
            y: 20,
            opacity: 0
        }, "-=0.45")

        .from("[data-hero-description]", {
            y: 20,
            opacity: 0
        }, "-=0.45")

        .from("[data-hero-buttons] > *", {
            y: 15,
            opacity: 0,
            stagger: 0.1
        }, "-=0.35")

        .from("[data-hero-socials] > *", {
            y: 15,
            opacity: 0,
            stagger: 0.08
        }, "-=0.35");

    }

    return { play };
}