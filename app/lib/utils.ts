export async function preloadAllImages(srcList: string[]){
    try{
        const promises = srcList.map(everySrc => {
            return new Promise<void>((resolve,reject) => {
                const image = new Image();
                image.src = everySrc; //The image.src means start loading the image in everySrc

                image.onload = () => {resolve();}
                image.onerror = () => {reject();}
            })
        })
        await Promise.all(promises);
        console.log("All images preloaded");
    } catch (error) {
        console.error("Error preloading images: ", error);
    }
}