const FOOTER_ANIM_CONTAINER = document.querySelector("#footer .anim-container");
const FOOTER_ANIM_CONTAINER_TEETH = document.querySelector("#footer .anim-container .teeth");
const FOOTER_ANIM_CONTAINER_NO_TEETH = document.querySelector("#footer .anim-container .no_teeth");

function initFooterFunction(pos){
    console.log("footer: "+pos);

    const animContainerRect = FOOTER_ANIM_CONTAINER.getBoundingClientRect();

    if(animContainerRect.bottom < window.innerHeight){
        FOOTER_ANIM_CONTAINER_TEETH.classList.add('show');
        FOOTER_ANIM_CONTAINER_NO_TEETH.classList.add('hide');
    }
    if(animContainerRect.top > window.innerHeight){
        FOOTER_ANIM_CONTAINER_TEETH.classList.remove('show');
        FOOTER_ANIM_CONTAINER_NO_TEETH.classList.remove('hide');
    }
    
}