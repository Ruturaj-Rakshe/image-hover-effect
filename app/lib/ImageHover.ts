import gsap from "gsap";

type HoverImageProps = {
    element: HTMLElement;
    totalLayers?: number;
}

export function hoverImage({element, totalLayers}: HoverImageProps){
    const bg = element.style.backgroundImage;
    const slicedbgUrlForImage = bg.slice(5, -2); 
    
    element.style.backgroundImage = "none";

    const dataLayers = element.dataset.repetitionElems ? Number(element.dataset.repetitionElems) : null;
    const totalLayersNum = dataLayers !== null ? dataLayers : (totalLayers !== undefined ? totalLayers : 4);
    const layersArray: HTMLElement[] = [];

    
    for(let i = 0; i < totalLayersNum; i++){
        if(i === 0){
            const wrap = document.createElement("div");
            wrap.className = "image__wrap";

            const layer = document.createElement("div");
            layer.className = "image__element";
            layer.style.backgroundImage = `url("${slicedbgUrlForImage}")`;

            wrap.appendChild(layer);
            element.appendChild(wrap);
            layersArray.push(layer);
        } else {
            const layer = document.createElement("div");
            layer.className = "image__element";
            layer.style.backgroundImage = `url("${slicedbgUrlForImage}")`;
            element.appendChild(layer);
            layersArray.push(layer);
        }
    }


    const origin = element.dataset.repetitionOrigin || '50% 50%';
    gsap.set([element, layersArray[0]], { transformOrigin: origin });


    const property = element.dataset.repetitionAnimate || 'scale';
    const duration = Number(element.dataset.repetitionDuration) || 0.8;
    const ease = element.dataset.repetitionEase || 'power2.inOut';
    const stagger = Number(element.dataset.repetitionStagger) || -0.1;
    const initialScale = Number(element.dataset.repetitionInitialScale) || 2;


    const animationProperties: any = {
        duration,
        ease,
        stagger  
    };

 if(property === 'rotation') {
        animationProperties[property] = (i: number) => i === 0 ? 0 : i * 720; // 0°, 360°, 720°, 1080°...
    } else if (property === 'x' || property === 'y') {
        animationProperties[property] = (i: number) => i === 0 ? 0 : i * 80; 
    } else {
        animationProperties[property] = (i: number) => +!i;
    }

    const timeline = gsap.timeline({paused: true})
        .set(layersArray[0], { [property]: initialScale })  
        .to(layersArray, animationProperties, 0);

    element.addEventListener("mouseenter", () => timeline.play());
    element.addEventListener("mouseleave", () => timeline.reverse());

    return {
        element,
        layersArray,
        timeline,
        bg,
        totalLayersNum
    }
}