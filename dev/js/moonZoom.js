import { gsap } from "gsap";

gsap.set("#moon",{transformOrigin:"center"});

// hide moon elements
// gsap.set(".moon-things",{display:"none"});

export let moonZoomInTL = gsap.timeline();
moonZoomInTL.to(".moon-things",{duration:1, alpha:0})
            .fromTo("#moon",{alpha:0, scale:0.25},{alpha:1, duration:4, scale:14, y:"+=1200", x:"+=300",ease:"none"})

export let moonZoomOutTL = gsap.timeline();
moonZoomOutTL.to("#moon",{duration:3, scale:2, y:"+=-1000"},"sametime")
            .to("#space-ship",{duration:3, scale:.5, y:"+=-450" , x:"+=-240"},"sametime")
            .to(".moon-things",{duration:1, alpha:1});
