const CLOUD_CONTAINER = document.querySelector("#sunset-section .cloud-container");
const CLOUD_1 = document.querySelector("#sunset-section .cloud-content-1");
const CLOUD_2 = document.querySelector("#sunset-section .cloud-content-2");
const CLOUD_3 = document.querySelector("#sunset-section .cloud-content-3");
const CLOUD_4 = document.querySelector("#sunset-section .cloud-content-4");
const CLOUD_1_TEXT = document.querySelector("#sunset-section .cloud-content-1 p");
const CLOUD_2_TEXT = document.querySelector("#sunset-section .cloud-content-2 p");
const CLOUD_3_TEXT = document.querySelector("#sunset-section .cloud-content-3 p");
const CLOUD_4_TEXT = document.querySelector("#sunset-section .cloud-content-4 p");
const CLOUD_TEXT_CONTAINER = document.querySelector("#sunset-section .text-container");
const CLOUD_CONTAINER_OPACITY = {
    day: 1,
    night: .5,
    gone: 0
}

function initCloudFunction(pos) {
    console.log("cloud: " + pos);

    if (pos < window.innerHeight) {
        CLOUD_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.gone;
        CLOUD_TEXT_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.gone;
    } else if (pos < 4500) {
        CLOUD_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.day;
        CLOUD_TEXT_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.day;
        if (CLOUD_1_TEXT.classList.contains("moon-text-shadow")) {
            CLOUD_1_TEXT.classList.remove("moon-text-shadow");
            CLOUD_2_TEXT.classList.remove("moon-text-shadow");
            CLOUD_3_TEXT.classList.remove("moon-text-shadow");
            CLOUD_4_TEXT.classList.remove("moon-text-shadow");
            CLOUD_1_TEXT.classList.add("sun-text-shadow");
            CLOUD_2_TEXT.classList.add("sun-text-shadow");
            CLOUD_3_TEXT.classList.add("sun-text-shadow");
            CLOUD_4_TEXT.classList.add("sun-text-shadow");
        }
    } else {
        CLOUD_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.night;
        CLOUD_TEXT_CONTAINER.style.opacity = CLOUD_CONTAINER_OPACITY.day;
        if (CLOUD_1_TEXT.classList.contains("sun-text-shadow")) {
            CLOUD_1_TEXT.classList.remove("sun-text-shadow");
            CLOUD_2_TEXT.classList.remove("sun-text-shadow");
            CLOUD_3_TEXT.classList.remove("sun-text-shadow");
            CLOUD_4_TEXT.classList.remove("sun-text-shadow");
            CLOUD_1_TEXT.classList.add("moon-text-shadow");
            CLOUD_2_TEXT.classList.add("moon-text-shadow");
            CLOUD_3_TEXT.classList.add("moon-text-shadow");
            CLOUD_4_TEXT.classList.add("moon-text-shadow");
        }
    }

}