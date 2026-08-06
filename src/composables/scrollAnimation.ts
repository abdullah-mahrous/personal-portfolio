import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollAnimationOptions = {
    opacity: number;
    duration: number;
    ease: string;
    x?: number;
    y?: number;
    scrollTrigger: {
        trigger: HTMLElement;
        start: string;
        once: boolean;
    };
};

export function scrollReveal() {

    gsap.utils.toArray<HTMLElement>("[data-reveal]")

        .forEach(section => {

            const animation = section.dataset.animation;

            const options: ScrollAnimationOptions = {

                opacity: 0,
                duration: 1.5,
                ease: "power4.out",

                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    once: true
                }

            };

            switch(animation){

                case "left":
                    options["x"] = -40;
                    break;

                case "right":
                    options["x"] = 40;
                    break;

                default:
                    options["y"] = 30;

            }

            gsap.from(section, options);

        });

        // Stagger groups
        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach(group => {
            gsap.from(group.children, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: group,
                    start: "top 80%",
                    once: true,
                },
            });
        });
}