const banner = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="200 0 350 150" style="border: 8px solid #763626;border-radius: 5px;box-shadow: 0 2px 8px black;" >
<rect width="850" height="150" class"banner-content"></rect>
<defs>
    <style>
        .bgcls-1 {
            fill: url(#linear-gradient);
        }

        .bgcls-2 {
            fill: url(#linear-gradient-2);
        }

        .bgcls-3 {
            fill: #bfbfbf;
        }

        .bgcls-4 {
            fill: #dbdbdb;
        }

        .bgcls-5 {
            fill: #959596;
        }
    </style>
    <linearGradient id="linear-gradient" x1="425" y1="71" x2="425" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0071bc" stop-opacity="0.6"></stop>
        <stop offset="0.46" stop-color="#00365a" stop-opacity="0.81"></stop>
        <stop offset="0.81" stop-color="#000f19" stop-opacity="0.95"></stop>
        <stop offset="1"></stop>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="425" y1="150" x2="425" y2="71" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0071bc" stop-opacity="0.9"></stop>
        <stop offset="0" stop-color="#0070bb" stop-opacity="0.85"></stop>
        <stop offset="0" stop-color="#0070ba" stop-opacity="0.8"></stop>
        <stop offset="0.25" stop-color="#005790" stop-opacity="0.84"></stop>
        <stop offset="0.8" stop-color="#001827" stop-opacity="0.96"></stop>
        <stop offset="1"></stop>
    </linearGradient>
</defs>
<g id="ships_banner_background" data-name="ships_banner_background 2">
    <g id="ships_banner_background_1-2" data-name="ships_banner_background 1">

        <rect class="bgcls-1" width="850" height="71"></rect>
        <rect class="bgcls-2" y="71" width="850" height="79"></rect>
        <circle class="bgcls-3" cx="302.02" cy="32.6" r="20.98"></circle>
        <ellipse class="bgcls-4" cx="289.17" cy="24.96" rx="5.1" ry="3.55" transform="translate(143.32 275.89) rotate(-64.77)"></ellipse>
        <ellipse class="bgcls-5" cx="313.93" cy="21.75" rx="2.88" ry="4.62" transform="translate(67.28 217.17) rotate(-42.35)"></ellipse>
        <ellipse class="bgcls-5" cx="312.14" cy="29.29" rx="1.37" ry="2.19" transform="translate(6.59 99.49) rotate(-18.3)"></ellipse>
        <ellipse class="bgcls-5" cx="300.25" cy="36.21" rx="1.37" ry="2.19" transform="translate(150.6 299.02) rotate(-67.22)"></ellipse>
        <ellipse class="bgcls-5" cx="297.83" cy="39.89" rx="1.02" ry="0.65" transform="translate(7 115.48) rotate(-22.2)"></ellipse>
        <ellipse class="bgcls-5" cx="304.51" cy="36.36" rx="0.65" ry="1.02" transform="translate(88.77 254.31) rotate(-52.1)"></ellipse>
        <ellipse class="bgcls-5" cx="301.92" cy="24.61" rx="0.32" ry="0.52" transform="translate(97.03 247.73) rotate(-52.1)"></ellipse>
        <ellipse class="bgcls-5" cx="292.64" cy="47.06" rx="0.32" ry="0.52" transform="translate(75.71 249.04) rotate(-52.09)"></ellipse>
        <ellipse class="bgcls-5" cx="297.54" cy="48.79" rx="0.52" ry="0.32" transform="translate(21.79 170.73) rotate(-33.17)"></ellipse>
        <ellipse class="bgcls-5" cx="284.36" cy="34.76" rx="0.92" ry="1.49" transform="translate(3.47 91.08) rotate(-18.31)"></ellipse>
        <ellipse class="bgcls-5" cx="287.39" cy="36.21" rx="0.62" ry="0.99" transform="translate(3.16 92.04) rotate(-18.29)"></ellipse>
        <ellipse class="bgcls-5" cx="293.42" cy="17.21" rx="0.99" ry="0.62" transform="translate(95.41 234.44) rotate(-51.01)"></ellipse>
        <ellipse class="bgcls-5" cx="297.19" cy="16.83" rx="0.45" ry="0.27" transform="translate(97.09 237.21) rotate(-51)"></ellipse>
        <ellipse class="bgcls-5" cx="310.67" cy="48.79" rx="1.07" ry="0.67" transform="translate(77.25 259.53) rotate(-51)"></ellipse>
        <ellipse class="bgcls-5" cx="305.26" cy="50.82" rx="0.75" ry="0.47" transform="translate(-4.04 40.83) rotate(-7.6)"></ellipse>
        <ellipse class="bgcls-5" cx="306.48" cy="47.85" rx="0.89" ry="1.44" transform="translate(15.63 155.68) rotate(-29.22)"></ellipse>
        <ellipse class="bgcls-5" cx="310.17" cy="44.49" rx="1.44" ry="0.89" transform="translate(45.91 212.88) rotate(-40.67)"></ellipse>
        <ellipse class="bgcls-5" cx="285.52" cy="39.91" rx="1.14" ry="1.84" transform="translate(78.13 240.16) rotate(-51.95)"></ellipse>
        <ellipse class="bgcls-5" cx="317.69" cy="30.57" rx="2.19" ry="1.37" transform="translate(146.46 299.91) rotate(-63.05)"></ellipse>
    </g>
</g>
<!-- STARS -->
<defs>
    <style>
        .night_scene_stars {
            fill: #fcee21;
        }
    </style>
</defs>
<g id="night_scene_stars" data-name="ships_banner_stars 2">
    <g id="ships_banner_stars_1-2" data-name="ships_banner_stars 1">

        <path class="night_scene_stars" d="M77.71,49.91l-7,2.25c-.89.29-1.77.6-2.67.85a1,1,0,0,0-.76.73c-.92,2.91-1.86,5.82-2.79,8.73-.09.27-.19.54-.33,1-.87-2.69-1.68-5.21-2.49-7.73a5,5,0,0,1-.31-1c-.14-1.25-.92-1.74-2.06-2.08-2.69-.77-5.34-1.68-8-2.54l-.6-.24,4.12-1.34c1.88-.6,3.76-1.19,5.63-1.83a1.07,1.07,0,0,0,.57-.64c1-2.94,1.91-5.88,2.86-8.83.08-.24.16-.47.29-.89.3.9.54,1.64.78,2.38.78,2.44,1.57,4.88,2.34,7.33a1,1,0,0,0,.77.73c3,.94,6,1.92,9,2.88Z"></path>
        <path class="night_scene_stars" d="M164.64,24.5l-7,2.25c-.89.28-1.77.6-2.67.84a1,1,0,0,0-.76.74l-2.79,8.73c-.09.27-.19.54-.33,1-.87-2.69-1.68-5.21-2.49-7.73a5,5,0,0,1-.31-1c-.14-1.26-.92-1.75-2.06-2.08-2.69-.77-5.34-1.68-8-2.54l-.6-.24,4.12-1.34c1.88-.61,3.76-1.19,5.63-1.83a1.13,1.13,0,0,0,.57-.64c1-2.94,1.91-5.89,2.86-8.83.08-.24.16-.48.29-.89.29.9.54,1.64.78,2.37.78,2.45,1.57,4.89,2.34,7.34a1,1,0,0,0,.77.73c3,.94,6,1.91,9,2.88Z"></path>
        <path class="night_scene_stars" d="M460.62,31.48l-7,2.25c-.89.29-1.77.6-2.67.85a1,1,0,0,0-.76.73c-.92,2.92-1.86,5.82-2.79,8.73-.09.27-.19.54-.33,1-.87-2.69-1.68-5.21-2.49-7.73a4.34,4.34,0,0,1-.3-1c-.15-1.25-.92-1.74-2.07-2.07-2.69-.78-5.34-1.69-8-2.55-.16-.05-.3-.11-.61-.24l4.12-1.34c1.88-.6,3.76-1.19,5.63-1.83a1.07,1.07,0,0,0,.57-.64c1-2.93,1.91-5.88,2.86-8.83.08-.24.16-.47.29-.89.3.9.54,1.64.78,2.38.78,2.44,1.57,4.88,2.34,7.33a1,1,0,0,0,.77.73c3,.94,6,1.92,9,2.88Z"></path>
        <path class="night_scene_stars" d="M594.62,49.48l-7,2.25c-.89.29-1.77.6-2.67.85a1,1,0,0,0-.76.73c-.92,2.92-1.86,5.82-2.79,8.73-.09.27-.19.54-.33,1-.87-2.69-1.68-5.21-2.49-7.73a4.34,4.34,0,0,1-.3-1c-.15-1.25-.92-1.74-2.07-2.07-2.69-.78-5.34-1.69-8-2.55-.16,0-.3-.11-.61-.24l4.12-1.34c1.88-.6,3.76-1.19,5.63-1.83a1.07,1.07,0,0,0,.57-.64c1-2.93,1.91-5.88,2.86-8.83.08-.24.16-.47.29-.89.3.9.54,1.64.78,2.38.78,2.44,1.57,4.88,2.34,7.33a1,1,0,0,0,.77.73c3,.94,6,1.92,9,2.88Z"></path>
        <path class="night_scene_stars" d="M762.62,21.48l-7,2.25c-.89.29-1.77.6-2.67.85a1,1,0,0,0-.76.73c-.92,2.92-1.86,5.82-2.79,8.73-.09.27-.19.54-.33,1-.87-2.69-1.68-5.21-2.49-7.73a4.34,4.34,0,0,1-.3-1c-.15-1.25-.92-1.74-2.07-2.07-2.69-.78-5.34-1.69-8-2.55-.16-.05-.3-.11-.61-.24l4.12-1.34c1.88-.6,3.76-1.19,5.63-1.83a1.07,1.07,0,0,0,.57-.64c1-2.93,1.91-5.88,2.86-8.83.08-.24.16-.47.29-.89.3.9.54,1.64.78,2.38.78,2.44,1.57,4.88,2.34,7.33a1,1,0,0,0,.77.73c3,.94,6,1.92,9,2.88Z"></path>
        <path class="night_scene_stars" d="M391,55.15l-4.22,1.36c-.54.17-1.07.36-1.62.51a.62.62,0,0,0-.46.45L383,62.76l-.2.59c-.53-1.63-1-3.16-1.51-4.69a3.93,3.93,0,0,1-.19-.58c-.08-.77-.55-1.06-1.25-1.27-1.63-.47-3.24-1-4.85-1.54l-.37-.14,2.5-.82c1.14-.36,2.28-.72,3.41-1.1a.67.67,0,0,0,.35-.39c.59-1.78,1.16-3.57,1.74-5.36,0-.14.09-.29.17-.54.18.55.33,1,.47,1.44.48,1.48,1,3,1.42,4.45a.62.62,0,0,0,.47.44L390.6,55Z"></path>
        <path class="night_scene_stars" d="M44.33,17.9l-4.22,1.36c-.54.18-1.07.37-1.62.52a.61.61,0,0,0-.46.44q-.84,2.66-1.7,5.29c0,.17-.11.33-.19.59-.53-1.63-1-3.16-1.51-4.68a2.7,2.7,0,0,1-.19-.59c-.08-.76-.56-1.06-1.25-1.26-1.63-.47-3.24-1-4.85-1.54-.1,0-.18-.07-.37-.15l2.5-.81c1.14-.37,2.28-.72,3.41-1.11a.65.65,0,0,0,.35-.39c.59-1.78,1.16-3.57,1.73-5.35,0-.15.1-.29.18-.54.18.54.33,1,.47,1.44.47,1.48,1,3,1.42,4.44a.62.62,0,0,0,.46.45c1.82.57,3.63,1.16,5.44,1.74Z"></path>
        <path class="night_scene_stars" d="M219.08,50.91l-4.22,1.36c-.54.18-1.07.37-1.62.52a.58.58,0,0,0-.46.44q-.84,2.66-1.7,5.29c-.05.17-.11.33-.19.59-.53-1.63-1-3.16-1.52-4.68a3.32,3.32,0,0,1-.18-.59c-.08-.76-.56-1.06-1.25-1.26-1.63-.47-3.24-1-4.86-1.54l-.36-.15,2.5-.81c1.13-.37,2.28-.72,3.41-1.11a.71.71,0,0,0,.35-.39c.59-1.78,1.16-3.57,1.73-5.35,0-.15.09-.29.18-.54.17.54.32,1,.47,1.44.47,1.48.95,3,1.42,4.44a.6.6,0,0,0,.46.45c1.82.57,3.63,1.16,5.44,1.74Z"></path>
        <path class="night_scene_stars" d="M542.08,24.91l-4.22,1.36c-.54.18-1.07.37-1.62.52a.58.58,0,0,0-.46.44q-.84,2.65-1.7,5.29c-.05.17-.11.33-.19.59-.53-1.63-1-3.16-1.52-4.68a3.32,3.32,0,0,1-.18-.59c-.08-.76-.56-1.06-1.25-1.26-1.63-.47-3.24-1-4.86-1.54l-.36-.15,2.5-.81c1.13-.37,2.28-.72,3.41-1.11a.71.71,0,0,0,.35-.39c.59-1.78,1.16-3.57,1.73-5.35,0-.15.09-.29.18-.54.17.54.32,1,.47,1.44.47,1.48.95,3,1.42,4.44a.6.6,0,0,0,.46.45c1.82.57,3.63,1.16,5.44,1.74Z"></path>
        <path class="night_scene_stars" d="M674.08,50.91l-4.22,1.36c-.54.18-1.07.37-1.62.52a.58.58,0,0,0-.46.44q-.84,2.66-1.7,5.29c-.05.17-.11.33-.19.59-.53-1.63-1-3.16-1.52-4.68a3.32,3.32,0,0,1-.18-.59c-.08-.76-.56-1.06-1.25-1.26-1.63-.47-3.24-1-4.86-1.54l-.36-.15,2.5-.81c1.13-.37,2.28-.72,3.41-1.11a.71.71,0,0,0,.35-.39c.59-1.78,1.16-3.57,1.73-5.35,0-.15.09-.29.18-.54.17.54.32,1,.47,1.44.47,1.48.95,3,1.42,4.44a.6.6,0,0,0,.46.45c1.82.57,3.63,1.16,5.44,1.74Z"></path>
        <path class="night_scene_stars" d="M811.22,51,807,52.41c-.54.17-1.08.36-1.62.51a.6.6,0,0,0-.47.45c-.56,1.76-1.12,3.53-1.69,5.29-.05.16-.11.33-.2.59-.52-1.63-1-3.16-1.51-4.69a3.09,3.09,0,0,1-.18-.59c-.09-.76-.56-1.06-1.26-1.26-1.63-.47-3.23-1-4.85-1.54l-.36-.14,2.49-.82c1.14-.36,2.28-.72,3.42-1.1a.69.69,0,0,0,.34-.39c.59-1.79,1.16-3.57,1.74-5.36,0-.14.09-.29.17-.54l.48,1.44c.47,1.48,1,3,1.42,4.45a.61.61,0,0,0,.46.44c1.82.57,3.63,1.16,5.44,1.75Z"></path>
    </g>
</g>
<!-- WAVES -->
<defs>
    <style type="text/css">
        .waves_nofill{fill:none;}
        .waves{fill:none;stroke:#000000;stroke-miterlimit:10;}
    </style>
</defs>
<g id="night_scene_waves" data-name="ships_banner_waves 2">
    <g id="ships_banner_waves_1-2" data-name="ships_banner_waves 1">

        <path class="waves" d="M17.8,97.3c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M17.8,117.2c3.2,1.4,9.3,3.6,17.3,3.6c8.2,0,14.4-2.4,17.7-3.9l0.4,0c3.2,1.4,9.3,3.6,17.3,3.6
        c8.2,0,14.4-2.4,17.7-3.9"></path>
    <path class="waves" d="M189.4,97.3c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M359.4,97.3c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M526.2,97.3c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M691,97.3c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M691,132.8c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M526.2,133.8c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M359.4,133.8c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M189.4,133.8c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M17.8,133.8c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M108.3,116c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M275.3,116c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M441.3,115.5c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M602.1,115.5c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.3,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6
        c6.9,0,12.1-2.4,14.8-3.9l0.4,0c2.7,1.4,7.8,3.6,14.5,3.6c6.9,0,12.1-2.4,14.8-3.9"></path>
    <path class="waves" d="M768.7,115.2c3.2,1.4,9.3,3.6,17.3,3.6c8.2,0,14.4-2.4,17.7-3.9l0.4,0c3.2,1.4,9.3,3.6,17.3,3.6
        c8.2,0,14.4-2.4,17.7-3.9"></path>
    </g>
</g>

<!-- RIGHT SHIP -->
<defs>
    <style>
        .rshipcls-1 {
            fill: none;
        }

        .rshipcls-1,
        .rshipcls-48,
        .rshipcls-49,
        .rshipcls-50,
        .rshipcls-51,
        .rshipcls-52,
        .rshipcls-53,
        .rshipcls-54,
        .rshipcls-56,
        .rshipcls-57,
        .rshipcls-58 {
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 0.25px;
        }

        .rshipcls-2 {
            opacity: 0.11;
        }

        .rshipcls-3 {
            fill: #fff;
        }

        .rshipcls-4 {
            fill: url(#rship-linear-gradient);
        }

        .rshipcls-5 {
            fill: url(#rship-linear-gradient-2);
        }

        .rshipcls-6 {
            fill: url(#rship-linear-gradient-3);
        }

        .rshipcls-7 {
            fill: url(#rship-linear-gradient-4);
        }

        .rshipcls-8 {
            fill: url(#rship-linear-gradient-5);
        }

        .rshipcls-9 {
            fill: url(#rship-linear-gradient-6);
        }

        .rshipcls-10 {
            fill: url(#rship-linear-gradient-7);
        }

        .rshipcls-11 {
            fill: url(#rship-linear-gradient-8);
        }

        .rshipcls-12 {
            fill: url(#rship-linear-gradient-9);
        }

        .rshipcls-13 {
            fill: url(#rship-linear-gradient-10);
        }

        .rshipcls-14 {
            fill: url(#rship-linear-gradient-11);
        }

        .rshipcls-15 {
            fill: url(#rship-linear-gradient-12);
        }

        .rshipcls-16 {
            fill: url(#rship-linear-gradient-13);
        }

        .rshipcls-17 {
            fill: url(#rship-linear-gradient-14);
        }

        .rshipcls-18 {
            fill: url(#rship-linear-gradient-15);
        }

        .rshipcls-19 {
            fill: url(#rship-linear-gradient-16);
        }

        .rshipcls-20 {
            fill: url(#rship-linear-gradient-17);
        }

        .rshipcls-21 {
            fill: url(#rship-linear-gradient-18);
        }

        .rshipcls-22 {
            fill: url(#rship-linear-gradient-19);
        }

        .rshipcls-23 {
            fill: url(#rship-linear-gradient-20);
        }

        .rshipcls-24 {
            fill: url(#rship-linear-gradient-21);
        }

        .rshipcls-25 {
            fill: url(#rship-linear-gradient-22);
        }

        .rshipcls-26 {
            fill: url(#rship-linear-gradient-23);
        }

        .rshipcls-27 {
            fill: url(#rship-linear-gradient-24);
        }

        .rshipcls-28 {
            fill: url(#rship-linear-gradient-25);
        }

        .rshipcls-29 {
            fill: url(#rship-linear-gradient-26);
        }

        .rshipcls-30 {
            fill: url(#rship-linear-gradient-27);
        }

        .rshipcls-31 {
            fill: url(#rship-linear-gradient-28);
        }

        .rshipcls-32 {
            fill: url(#rship-linear-gradient-29);
        }

        .rshipcls-33 {
            fill: url(#rship-linear-gradient-30);
        }

        .rshipcls-34 {
            fill: url(#rship-linear-gradient-31);
        }

        .rshipcls-35 {
            fill: url(#rship-linear-gradient-32);
        }

        .rshipcls-36 {
            fill: url(#rship-linear-gradient-33);
        }

        .rshipcls-37 {
            fill: url(#rship-linear-gradient-34);
        }

        .rshipcls-38 {
            fill: url(#rship-linear-gradient-35);
        }

        .rshipcls-39 {
            fill: url(#rship-linear-gradient-36);
        }

        .rshipcls-40 {
            fill: url(#rship-linear-gradient-37);
        }

        .rshipcls-41 {
            fill: url(#rship-linear-gradient-38);
        }

        .rshipcls-42 {
            fill: url(#rship-linear-gradient-39);
        }

        .rshipcls-43 {
            fill: url(#rship-linear-gradient-40);
        }

        .rshipcls-44 {
            fill: url(#rship-linear-gradient-41);
        }

        .rshipcls-45 {
            fill: url(#rship-linear-gradient-42);
        }

        .rshipcls-46 {
            fill: url(#rship-linear-gradient-43);
        }

        .rshipcls-47 {
            clip-path: url(#clip-path-r);
        }

        .rshipcls-48 {
            fill: url(#rship-linear-gradient-44);
        }

        .rshipcls-49 {
            fill: url(#rship-linear-gradient-45);
        }

        .rshipcls-50 {
            fill: url(#rship-linear-gradient-46);
        }

        .rshipcls-51 {
            fill: url(#rship-linear-gradient-47);
        }

        .rshipcls-52 {
            fill: url(#rship-linear-gradient-48);
        }

        .rshipcls-53 {
            fill: url(#rship-linear-gradient-49);
        }

        .rshipcls-54 {
            fill: url(#rship-linear-gradient-50);
        }

        .rshipcls-55 {
            opacity: 0.5;
        }

        .rshipcls-56 {
            fill: url(#rship-linear-gradient-51);
        }

        .rshipcls-57 {
            fill: url(#rship-linear-gradient-52);
        }

        .rshipcls-58 {
            fill: url(#rship-linear-gradient-53);
        }
    </style>
    <linearGradient id="rship-linear-gradient" x1="313.71" y1="22.48" x2="313.71" y2="21.53" gradientTransform="matrix(1, 0, 0, -1, 99.4, 44.01)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#733318"></stop>
        <stop offset="0.22" stop-color="#763518"></stop>
        <stop offset="0.42" stop-color="#813c19"></stop>
        <stop offset="0.6" stop-color="#93471a"></stop>
        <stop offset="0.78" stop-color="#ad561c"></stop>
        <stop offset="0.96" stop-color="#cd6a1e"></stop>
        <stop offset="1" stop-color="#d66f1f"></stop>
    </linearGradient>
    <linearGradient id="rship-linear-gradient-2" x1="313.71" y1="18.79" x2="313.71" y2="17.83" gradientTransform="matrix(1, 0, 0, -1, 99.4, 36.62)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-3" x1="313.71" y1="21.53" x2="313.71" y2="18.79" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-4" x1="308.89" y1="21.53" x2="308.89" y2="18.79" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-5" x1="318.52" y1="21.53" x2="318.52" y2="18.79" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-6" x1="313.71" y1="17.83" x2="313.71" y2="12" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-7" x1="276.96" y1="67.17" x2="276.96" y2="66.18" gradientTransform="matrix(1, 0, 0, -1, 172.9, 133.34)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-8" x1="276.96" y1="63.34" x2="276.96" y2="62.35" gradientTransform="matrix(1, 0, 0, -1, 172.9, 125.68)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-9" x1="276.96" y1="66.18" x2="276.96" y2="63.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-10" x1="269.96" y1="66.18" x2="269.96" y2="63.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-11" x1="283.96" y1="66.18" x2="283.96" y2="63.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-12" x1="276.61" y1="41.23" x2="276.61" y2="40.24" gradientTransform="matrix(1, 0, 0, -1, 173.59, 81.47)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-13" x1="276.61" y1="37.4" x2="276.61" y2="36.41" gradientTransform="matrix(1, 0, 0, -1, 173.59, 73.81)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-14" x1="276.61" y1="40.24" x2="276.61" y2="37.4" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-15" x1="272.24" y1="40.24" x2="272.24" y2="37.4" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-16" x1="280.99" y1="40.24" x2="280.99" y2="37.4" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-17" x1="354.3" y1="71.99" x2="354.3" y2="70.99" gradientTransform="matrix(1, 0, 0, -1, 18.21, 142.98)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-18" x1="354.3" y1="68.16" x2="354.3" y2="67.16" gradientTransform="matrix(1, 0, 0, -1, 18.21, 135.32)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-19" x1="354.3" y1="70.99" x2="354.3" y2="68.16" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-20" x1="348.77" y1="70.99" x2="348.77" y2="68.16" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-21" x1="359.83" y1="70.99" x2="359.83" y2="68.16" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-22" x1="354.86" y1="49.45" x2="354.86" y2="48.74" gradientTransform="matrix(1, 0, 0, -1, 17.09, 98.19)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-23" x1="354.86" y1="46.72" x2="354.86" y2="46.01" gradientTransform="matrix(1, 0, 0, -1, 17.09, 92.73)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-24" x1="354.86" y1="48.74" x2="354.86" y2="46.72" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-25" x1="350.92" y1="48.74" x2="350.92" y2="46.72" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-26" x1="358.8" y1="48.74" x2="358.8" y2="46.72" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-27" x1="315.56" y1="48.42" x2="315.56" y2="47.43" gradientTransform="matrix(1, 0, 0, -1, 95.69, 95.85)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-28" x1="315.56" y1="44.59" x2="315.56" y2="43.6" gradientTransform="matrix(1, 0, 0, -1, 95.69, 88.19)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-29" x1="315.56" y1="47.43" x2="315.56" y2="44.59" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-30" x1="309.51" y1="47.43" x2="309.51" y2="44.59" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-31" x1="321.61" y1="47.43" x2="321.61" y2="44.59" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-32" x1="276.96" y1="18.9" x2="276.96" y2="18.23" gradientTransform="matrix(1, 0, 0, -1, 172.9, 37.13)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-33" x1="276.96" y1="16.34" x2="276.96" y2="15.67" gradientTransform="matrix(1, 0, 0, -1, 172.9, 32.01)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-34" x1="276.96" y1="18.23" x2="276.96" y2="16.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-35" x1="273.63" y1="18.23" x2="273.63" y2="16.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-36" x1="280.29" y1="18.23" x2="280.29" y2="16.34" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-37" x1="276.96" y1="15.67" x2="276.96" y2="13.38" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-38" x1="354.77" y1="31.5" x2="354.77" y2="30.96" gradientTransform="matrix(1, 0, 0, -1, 17.28, 62.46)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-39" x1="354.77" y1="29.41" x2="354.77" y2="28.87" gradientTransform="matrix(1, 0, 0, -1, 17.28, 58.27)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-40" x1="354.77" y1="30.96" x2="354.77" y2="29.41" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-41" x1="352.04" y1="30.96" x2="352.04" y2="29.41" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-42" x1="357.49" y1="30.96" x2="357.49" y2="29.41" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-43" x1="354.77" y1="28.87" x2="354.77" y2="26.99" gradientTransform="matrix(-1, 0, 0, 1, 726.81, 0)" xlink:href="#rship-linear-gradient"></linearGradient>
    <clipPath id="clip-path-r">
        <path class="rshipcls-1" d="M361.1,72c1.54,4,2.88,8.18,4.79,12.08,5.27,10.79,14.74,16.62,27.61,18.53a164.62,164.62,0,0,0,48.05-.16c8.39-1.23,14.28-6.53,18.92-12.73,4.33-5.8,6.4-12.38,7.63-19.18a7.23,7.23,0,0,0-.74-3.37h-4.28c-.24.06-.48.11-.71.18l-.18-.18H433.7c-.06.12-.11.24-.16.35-1.42,3.13-3,6.2-4.43,9.3-3.84,8-1.4,6.81-11.28,6.94-.83,0-1.66,0-2.49,0-4.08,0-4.11,0-4.07-3.64,0-.63,0-1.16,0-1.61h-2.66c0,.69,0,1.58,0,2.71,0,1.76-.59,2.58-2.65,2.55-5.14-.08-10.29,0-15.43-.1-.93,0-2.46-.33-2.66-.84a48.54,48.54,0,0,1-1.95-5.41l-12.71-5.75L372,71.1l-8.41-3.8a1.21,1.21,0,0,0-.48-.06,1.35,1.35,0,0,0-.4.06C360.2,68.38,360.41,70.17,361.1,72Zm90.46,5.51a3.82,3.82,0,0,1,4-3.63,3.72,3.72,0,0,1,3.86,3.44,3.63,3.63,0,0,1-3.65,3.61A3.84,3.84,0,0,1,451.56,77.5Zm-14.46,0a3.68,3.68,0,0,1,3.69-3.58,3.87,3.87,0,0,1,4.13,3.48,3.82,3.82,0,0,1-4,3.58A3.66,3.66,0,0,1,437.1,77.45Zm-66.89,1.88a3.69,3.69,0,0,1,3.69-3.59A3.88,3.88,0,0,1,378,79.23a3.83,3.83,0,0,1-4,3.57A3.66,3.66,0,0,1,370.21,79.33Z"></path>
    </clipPath>
    <linearGradient id="rship-linear-gradient-44" x1="364.88" y1="-410.36" x2="370.8" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -294.62)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-45" x1="358.96" y1="-410.36" x2="364.88" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -282.78)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-46" x1="370.8" y1="-410.36" x2="376.72" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -306.46)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-47" x1="335.28" y1="-410.36" x2="341.2" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -235.41)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-48" x1="341.2" y1="-410.36" x2="347.12" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -247.25)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-49" x1="353.04" y1="-410.36" x2="358.96" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -270.93)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-50" x1="347.12" y1="-410.36" x2="353.04" y2="-410.36" gradientTransform="matrix(0, 1, 1, 0, 824.75, -259.09)" xlink:href="#rship-linear-gradient"></linearGradient>
    <linearGradient id="rship-linear-gradient-51" x1="947.06" y1="238.09" x2="947.06" y2="231.03" gradientTransform="matrix(1, 0, 0, -1, -572.94, 313.83)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" stop-opacity="0.1"></stop>
        <stop offset="0.05" stop-color="#d0dce8" stop-opacity="0.18"></stop>
        <stop offset="0.15" stop-color="#80a0c1" stop-opacity="0.33"></stop>
        <stop offset="0.29" stop-color="#4775a5" stop-opacity="0.43"></stop>
        <stop offset="0.48" stop-color="#275d95" stop-opacity="0.48"></stop>
        <stop offset="1" stop-color="#1e5691" stop-opacity="0.5"></stop>
    </linearGradient>
    <linearGradient id="rship-linear-gradient-52" x1="771.61" y1="232.4" x2="771.61" y2="225.35" gradientTransform="matrix(1, 0, 0, -1, -330.6, 306.27)" xlink:href="#rship-linear-gradient-51"></linearGradient>
    <linearGradient id="rship-linear-gradient-53" x1="733.46" y1="232.4" x2="733.46" y2="225.35" gradientTransform="matrix(1, 0, 0, -1, -277.9, 306.27)" xlink:href="#rship-linear-gradient-51"></linearGradient>
</defs>
<g id="night_scene_rship" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
        <path d="M394.2,78.49c-2.42-2.38-7.24-7.87-7.08-15.32.14-7.05,4.66-12.25,7.08-14.63h33c-2.43,2.38-6.94,7.58-7.09,14.63-.15,7.45,4.66,12.94,7.09,15.32Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M407.21,63.85a13.61,13.61,0,0,1,3.43-5.68l.32-.33a18.77,18.77,0,0,1,6.57-4.07,23.76,23.76,0,0,1,6.5-1.5,24.56,24.56,0,0,0-1.51,2.39,24.28,24.28,0,0,0-1.18,2.54,19.85,19.85,0,0,0-.81,2.71,17.67,17.67,0,0,0-.32,2.18,18.45,18.45,0,0,0,.72,6.53A20.42,20.42,0,0,0,424,74.69a25.25,25.25,0,0,0,3.26,3.8c-9.09-.42-16.53-3.68-18.95-8.52A9.07,9.07,0,0,1,407.21,63.85Z"></path>
        </g>
        <path d="M364.37,67c-1.42-1.4-4.23-4.61-4.14-9,.08-4.12,2.72-7.16,4.14-8.55h19.31c-1.41,1.39-4.06,4.43-4.14,8.55-.09,4.35,2.72,7.56,4.14,9Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M372,58.4a7.92,7.92,0,0,1,2-3.32l.19-.2A10.82,10.82,0,0,1,378,52.51a13.71,13.71,0,0,1,3.8-.88,12.74,12.74,0,0,0-.88,1.4,11.33,11.33,0,0,0-.69,1.48,10.19,10.19,0,0,0-.67,2.86,10.78,10.78,0,0,0,.42,3.82,12,12,0,0,0,1.79,3.54,14.69,14.69,0,0,0,1.9,2.23c-5.31-.25-9.66-2.15-11.07-5A5.25,5.25,0,0,1,372,58.4Z"></path>
        </g>
        <path d="M439.39,62.35c-1.71-1.69-5.1-5.56-5-10.81.1-5,3.29-8.63,5-10.31h23.29c-1.71,1.68-4.89,5.34-5,10.31-.11,5.25,3.28,9.12,5,10.81Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M448.57,52A9.51,9.51,0,0,1,451,48l.23-.24a13.12,13.12,0,0,1,4.63-2.86,16.38,16.38,0,0,1,4.58-1.06,14.31,14.31,0,0,0-1.06,1.69,13.32,13.32,0,0,0-.83,1.79,11.53,11.53,0,0,0-.57,1.91,10.77,10.77,0,0,0-.23,1.53,12.81,12.81,0,0,0,.5,4.6,14.59,14.59,0,0,0,2.15,4.28,18,18,0,0,0,2.3,2.69c-6.41-.3-11.65-2.6-13.35-6A6.34,6.34,0,0,1,448.57,52Z"></path>
        </g>
        <path d="M401.5,43.6c-1.71-1.68-5.1-5.55-5-10.8.11-5,3.29-8.64,5-10.32h23.28c-1.7,1.68-4.89,5.35-5,10.32-.11,5.25,3.28,9.12,5,10.8Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M410.67,33.28a9.57,9.57,0,0,1,2.41-4l.23-.24a13.18,13.18,0,0,1,4.63-2.87,16.76,16.76,0,0,1,4.58-1.05,18.55,18.55,0,0,0-1.06,1.68,16.49,16.49,0,0,0-.83,1.79,12.58,12.58,0,0,0-.8,3.44,13.11,13.11,0,0,0,.51,4.61,14.48,14.48,0,0,0,2.15,4.28,18.43,18.43,0,0,0,2.29,2.68c-6.4-.3-11.64-2.59-13.35-6A6.37,6.37,0,0,1,410.67,33.28Z"></path>
        </g>
        <path d="M441.05,36.41c-1.42-1.4-4.23-4.61-4.14-9,.09-4.12,2.73-7.16,4.14-8.55h19.31c-1.41,1.39-4.05,4.43-4.14,8.55-.09,4.35,2.73,7.56,4.14,9Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M448.66,27.84a7.93,7.93,0,0,1,2-3.31l.19-.2A10.82,10.82,0,0,1,454.69,22a13.79,13.79,0,0,1,3.8-.88,11.85,11.85,0,0,0-.88,1.4,11.5,11.5,0,0,0-.69,1.48,10.7,10.7,0,0,0-.47,1.58,9.83,9.83,0,0,0-.19,1.27,10.74,10.74,0,0,0,.42,3.82,11.69,11.69,0,0,0,1.78,3.55,15.21,15.21,0,0,0,1.9,2.23c-5.31-.25-9.66-2.16-11.07-5A5.22,5.22,0,0,1,448.66,27.84Z"></path>
        </g>
        <path d="M365.46,45.85c-1.14-1.12-3.4-3.7-3.32-7.2a10.28,10.28,0,0,1,3.32-6.87H381a10.28,10.28,0,0,0-3.33,6.87c-.07,3.5,2.19,6.08,3.33,7.2Z"></path>
        <g class="rshipcls-2">
            <path class="rshipcls-3" d="M371.58,39a6.29,6.29,0,0,1,1.6-2.66s.09-.1.16-.16a8.7,8.7,0,0,1,3.08-1.91,11,11,0,0,1,3.05-.7,9.59,9.59,0,0,0-.7,1.12,11,11,0,0,0-.56,1.19,9.29,9.29,0,0,0-.38,1.27,8.14,8.14,0,0,0,.19,4.1,9.72,9.72,0,0,0,1.43,2.85A12,12,0,0,0,381,45.85c-4.27-.2-7.76-1.73-8.9-4A4.24,4.24,0,0,1,371.58,39Z"></path>
        </g>
        <rect class="rshipcls-4" x="403" y="21.53" width="20.22" height="0.96" transform="translate(826.22 44.01) rotate(-180)"></rect>
        <rect class="rshipcls-5" x="406.23" y="17.83" width="13.76" height="0.96" transform="translate(826.22 36.62) rotate(-180)"></rect>
        <polyline class="rshipcls-6" points="412.63 18.79 412.63 21.53 413.58 21.53 413.59 18.79"></polyline>
        <path class="rshipcls-7" d="M413.59,18.79l9.63,2.74h-2.6l-8-2.74Z"></path>
        <path class="rshipcls-8" d="M412.62,18.79,403,21.53h2.6l8-2.74Z"></path>
        <path class="rshipcls-9" d="M412.62,13v4.81h1V13c0-.6-.25-1-.51-1S412.64,12.46,412.62,13Z"></path>
        <rect class="rshipcls-10" x="435.15" y="66.18" width="29.41" height="0.99" transform="translate(899.71 133.34) rotate(-180)"></rect>
        <rect class="rshipcls-11" x="439.85" y="62.35" width="20.01" height="0.99" transform="translate(899.71 125.68) rotate(-180)"></rect>
        <polyline class="rshipcls-12" points="449.15 63.34 449.15 66.18 450.54 66.18 450.56 63.34"></polyline>
        <path class="rshipcls-13" d="M450.56,63.34l14,2.84h-3.79l-11.62-2.84Z"></path>
        <path class="rshipcls-14" d="M449.15,63.34l-14,2.84h3.79l11.62-2.84Z"></path>
        <rect class="rshipcls-15" x="441.01" y="40.24" width="18.38" height="0.99" transform="translate(900.4 81.47) rotate(-180)"></rect>
        <rect class="rshipcls-16" x="443.95" y="36.41" width="12.5" height="0.99" transform="translate(900.4 73.81) rotate(-180)"></rect>
        <polyline class="rshipcls-17" points="449.76 37.4 449.76 40.24 450.63 40.24 450.64 37.4"></polyline>
        <path class="rshipcls-18" d="M450.64,37.4l8.75,2.84H457l-7.26-2.84Z"></path>
        <path class="rshipcls-19" d="M449.76,37.4,441,40.24h2.37l7.26-2.84Z"></path>
        <rect class="rshipcls-20" x="360.9" y="70.99" width="23.23" height="0.99" transform="translate(745.02 142.98) rotate(-180)"></rect>
        <rect class="rshipcls-21" x="364.61" y="67.16" width="15.8" height="0.99" transform="translate(745.02 135.32) rotate(-180)"></rect>
        <polyline class="rshipcls-22" points="371.95 68.16 371.95 71 373.05 71 373.07 68.16"></polyline>
        <path class="rshipcls-23" d="M373.07,68.16,384.13,71h-3L372,68.16Z"></path>
        <path class="rshipcls-24" d="M372,68.16,360.9,71h3l9.18-2.83Z"></path>
        <rect class="rshipcls-25" x="363.67" y="48.74" width="16.56" height="0.71" transform="translate(743.91 98.19) rotate(-180)"></rect>
        <rect class="rshipcls-26" x="366.32" y="46.01" width="11.27" height="0.71" transform="translate(743.91 92.73) rotate(-180)"></rect>
        <polyline class="rshipcls-27" points="371.56 46.72 371.56 48.74 372.34 48.74 372.35 46.72"></polyline>
        <path class="rshipcls-28" d="M372.35,46.72l7.88,2H378.1l-6.54-2Z"></path>
        <path class="rshipcls-29" d="M371.56,46.72l-7.89,2h2.14l6.54-2Z"></path>
        <rect class="rshipcls-30" x="398.54" y="47.43" width="25.42" height="0.99" transform="translate(822.5 95.85) rotate(-180)"></rect>
        <rect class="rshipcls-31" x="402.61" y="43.6" width="17.29" height="0.99" transform="translate(822.5 88.19) rotate(-180)"></rect>
        <polyline class="rshipcls-32" points="410.64 44.59 410.64 47.43 411.84 47.43 411.86 44.59"></polyline>
        <path class="rshipcls-33" d="M411.86,44.59,424,47.43h-3.27l-10.05-2.84Z"></path>
        <path class="rshipcls-34" d="M410.64,44.59l-12.1,2.84h3.28l10-2.84Z"></path>
        <rect class="rshipcls-35" x="442.86" y="18.23" width="14" height="0.66" transform="translate(899.71 37.13) rotate(-180)"></rect>
        <rect class="rshipcls-36" x="445.1" y="15.67" width="9.52" height="0.66" transform="translate(899.71 32.01) rotate(-180)"></rect>
        <polyline class="rshipcls-37" points="449.52 16.34 449.52 18.23 450.18 18.23 450.19 16.34"></polyline>
        <path class="rshipcls-38" d="M450.19,16.34l6.67,1.89h-1.81l-5.53-1.89Z"></path>
        <path class="rshipcls-39" d="M449.52,16.34l-6.66,1.89h1.8l5.53-1.89Z"></path>
        <path class="rshipcls-40" d="M449.52,13.78v1.89h.66V13.78a.37.37,0,0,0-.35-.4A.39.39,0,0,0,449.52,13.78Z"></path>
        <rect class="rshipcls-41" x="366.32" y="30.96" width="11.46" height="0.54" transform="translate(744.1 62.46) rotate(-180)"></rect>
        <rect class="rshipcls-42" x="368.15" y="28.87" width="7.79" height="0.54" transform="translate(744.1 58.27) rotate(-180)"></rect>
        <polyline class="rshipcls-43" points="371.77 29.41 371.77 30.96 372.31 30.96 372.32 29.41"></polyline>
        <path class="rshipcls-44" d="M372.32,29.41,377.78,31H376.3l-4.53-1.55Z"></path>
        <path class="rshipcls-45" d="M371.77,29.41,366.32,31h1.48l4.52-1.55Z"></path>
        <path class="rshipcls-46" d="M371.77,27.31v1.56h.54V27.31A.3.3,0,0,0,372,27,.34.34,0,0,0,371.77,27.31Z"></path>
        <g class="rshipcls-47">
            <rect class="rshipcls-48" x="357.02" y="70.26" width="114.74" height="5.92" transform="translate(828.78 146.45) rotate(-180)"></rect>
            <rect class="rshipcls-49" x="357.02" y="76.18" width="114.74" height="5.92" transform="translate(828.78 158.29) rotate(-180)"></rect>
            <rect class="rshipcls-50" x="357.02" y="64.34" width="114.74" height="5.92" transform="translate(828.78 134.6) rotate(-180)"></rect>
            <rect class="rshipcls-51" x="357.02" y="99.87" width="114.74" height="5.92" transform="translate(828.78 205.66) rotate(-180)"></rect>
            <rect class="rshipcls-52" x="357.02" y="93.94" width="114.74" height="5.92" transform="translate(828.78 193.81) rotate(-180)"></rect>
            <rect class="rshipcls-53" x="357.02" y="82.1" width="114.74" height="5.92" transform="translate(828.78 170.13) rotate(-180)"></rect>
            <rect class="rshipcls-54" x="357.02" y="88.03" width="114.74" height="5.92" transform="translate(828.78 181.97) rotate(-180)"></rect>
        </g>
        <path class="rshipcls-1" d="M361.1,72c1.54,4,2.88,8.18,4.79,12.08,5.27,10.79,14.74,16.62,27.61,18.53a164.62,164.62,0,0,0,48.05-.16c8.39-1.23,14.28-6.53,18.92-12.73,4.33-5.8,6.4-12.38,7.63-19.18a7.23,7.23,0,0,0-.74-3.37h-4.28c-.24.06-.48.11-.71.18l-.18-.18H433.7c-.06.12-.11.24-.16.35-1.42,3.13-3,6.2-4.43,9.3-3.84,8-1.4,6.81-11.28,6.94-.83,0-1.66,0-2.49,0-4.08,0-4.11,0-4.07-3.64,0-.63,0-1.16,0-1.61h-2.66c0,.69,0,1.58,0,2.71,0,1.76-.59,2.58-2.65,2.55-5.14-.08-10.29,0-15.43-.1-.93,0-2.46-.33-2.66-.84a48.54,48.54,0,0,1-1.95-5.41l-12.71-5.75L372,71.1l-8.41-3.8a1.21,1.21,0,0,0-.48-.06,1.35,1.35,0,0,0-.4.06C360.2,68.38,360.41,70.17,361.1,72Zm90.46,5.51a3.82,3.82,0,0,1,4-3.63,3.72,3.72,0,0,1,3.86,3.44,3.63,3.63,0,0,1-3.65,3.61A3.84,3.84,0,0,1,451.56,77.5Zm-14.46,0a3.68,3.68,0,0,1,3.69-3.58,3.87,3.87,0,0,1,4.13,3.48,3.82,3.82,0,0,1-4,3.58A3.66,3.66,0,0,1,437.1,77.45Zm-66.89,1.88a3.69,3.69,0,0,1,3.69-3.59A3.88,3.88,0,0,1,378,79.23a3.83,3.83,0,0,1-4,3.57A3.66,3.66,0,0,1,370.21,79.33Z"></path>
        <path class="flag" d="M413.47,12.94h-2.93c.48-.25.68-.74.65-1.53-.08-2.81,0-5.63,0-8.44,0-2,0-2,2.21-1.54a4.93,4.93,0,0,0,.76-.05,25,25,0,0,1,4.53.3,17.15,17.15,0,0,0,7.93.37c2-.42,2.51,0,2.6,1.93.11,2.4.18,4.81.23,7.22.05,1.82-1.19,2.73-2.95,1.82-4.39-2.29-8.76-.35-13.18-.1Z"></path>
        <g class="rshipcls-55 flag">
            <path class="rshipcls-3" d="M421.59,3.8a1.89,1.89,0,0,1,.1.41,1,1,0,0,0,.12.39.93.93,0,0,1,.09.4c0,.12,0,.24,0,.35a.29.29,0,0,0,.15.31c.06,0,.09.08,0,.13a1.27,1.27,0,0,1-.18.27.15.15,0,0,1-.18,0l-.2,0c-.19-.06-.27,0-.32.16a.62.62,0,0,1-.2.39c0,.06.07.12.09.17s0,.07,0,.07a.3.3,0,0,1-.13,0s0,0,0-.06a.56.56,0,0,1,0-.18l-.12,0c0,.09.11.18,0,.25a.15.15,0,0,1-.19,0c-.09-.07,0-.15,0-.23h-.12a1.1,1.1,0,0,1,0,.16c0,.08,0,.1-.14.09s-.12,0-.1-.11a1.13,1.13,0,0,1,0-.15h-.14a1,1,0,0,1,0,.17c0,.08,0,.1-.12.09s-.13,0-.12-.11a1.13,1.13,0,0,1,0-.15h-.18a.66.66,0,0,1,0,.14.2.2,0,0,1,0,.09l-.18,0a.09.09,0,0,1,0-.09.74.74,0,0,1,0-.14.12.12,0,0,0,0-.08.91.91,0,0,1-.28-.39c0-.11-.14-.15-.27-.12l-.17,0a.24.24,0,0,1-.25-.09.56.56,0,0,1-.09-.17c-.05-.14,0-.2.12-.26a.22.22,0,0,0,.16-.22c0-.14,0-.29.05-.43s0-.08-.07-.1a.5.5,0,0,0,0,.12c0,.15,0,.3,0,.45s0,.08-.06.08a.16.16,0,0,1-.1,0l-.06-.09a.91.91,0,0,1-.1-.4,2.51,2.51,0,0,1,0-.39,2.62,2.62,0,0,1,.2-.53,1.58,1.58,0,0,1,1.14-.9,3.58,3.58,0,0,1,.57,0,2.18,2.18,0,0,1,.95.19,1.06,1.06,0,0,1,.58.45,4.55,4.55,0,0,1,.27.73,2.42,2.42,0,0,1,0,.89.27.27,0,0,1-.07.14.15.15,0,0,1-.08,0,.09.09,0,0,1-.05-.07c0-.08,0-.16,0-.24a2.45,2.45,0,0,0,0-.39c-.07-.28-.15-.55-.24-.82a1.67,1.67,0,0,0-.08-.2Zm-.37,1-.34,0a.22.22,0,0,0-.19.22.36.36,0,0,0,.14.33l.3.21a.23.23,0,0,0,.26,0,.5.5,0,0,0,.19-.38.33.33,0,0,0,0-.1C421.59,4.85,421.5,4.77,421.22,4.8Zm-2,.59c0,.16.13.21.31.19a.68.68,0,0,0,.2-.07,1.8,1.8,0,0,0,.29-.26c.15-.16.08-.34-.13-.4a.76.76,0,0,0-.42,0,.31.31,0,0,0-.28.35S419.21,5.3,419.22,5.39Zm1.17-.06a1.22,1.22,0,0,0-.32.6.24.24,0,0,0,.08.22.07.07,0,0,0,.11,0l.09-.13.09-.09a.65.65,0,0,0,.11.12l.06,0s0,0,0-.07a1.55,1.55,0,0,0,0-.21l-.12-.38a.33.33,0,0,0-.06-.1Z"></path>
            <path class="rshipcls-3" d="M425.85,4.15l-.07.07a11.33,11.33,0,0,1-2.09,2.12,13.15,13.15,0,0,1-3.87,2c-.55.19-1.11.35-1.66.52L418,9l0,0a.51.51,0,0,0,.35.17.34.34,0,0,0,.14,0,18,18,0,0,0,2.42-.8A11.24,11.24,0,0,0,423.18,7l.05,0h0l-.24.23a6.83,6.83,0,0,1-1.24.78A14,14,0,0,1,419.11,9c-.22.06-.43.13-.64.21a.31.31,0,0,0-.2.42l.36-.1a18.29,18.29,0,0,0,3-1.09,10.78,10.78,0,0,0,3.2-2.26,5.31,5.31,0,0,0,1-1.38,1.21,1.21,0,0,0,.1-.56.69.69,0,0,0,0-.13Z"></path>
            <path class="rshipcls-3" d="M420.18,8.19l-.2.09a.42.42,0,0,1-.43,0A12.71,12.71,0,0,1,417.41,7l-.05,0a4.06,4.06,0,0,0,1.08.79c.4.22.81.42,1.23.63l-.4.13a.33.33,0,0,1-.24,0,10.87,10.87,0,0,1-3.3-2.3,5,5,0,0,1-1-1.38,1.34,1.34,0,0,1-.09-.63s0,0,0-.08a12,12,0,0,0,5.48,4Zm-5.06-3.06a5.27,5.27,0,0,0,1.43,1.59A9.31,9.31,0,0,1,415.12,5.13Z"></path>
            <path class="rshipcls-3" d="M421,7.2V7.14c0-.12-.09-.18-.21-.13s0,0,0,.08a1.1,1.1,0,0,0,0,.16l-.14,0a1.13,1.13,0,0,0,0-.15s0-.09-.06-.09a.59.59,0,0,0-.19,0s0,.11,0,.16a.14.14,0,0,0,0,.06h-.13c0-.07.07-.16,0-.21a.23.23,0,0,0-.18,0c-.09,0,0,.13,0,.2H420c0-.08.06-.17,0-.21a.33.33,0,0,0-.17,0c-.09,0,0,.11,0,.16a.3.3,0,0,1-.25-.22c0-.11-.05-.23-.07-.34a.84.84,0,0,0-.21-.42.19.19,0,0,0-.22,0c0,.11,0,.22.05.33l.15.65a.44.44,0,0,0,.1.16c.13.13.28.24.41.36a.39.39,0,0,0,.29.11h.75a.36.36,0,0,0,.25-.08c.18-.16.37-.31.56-.46a.16.16,0,0,0,.07-.14,3,3,0,0,1,0-.42,1.8,1.8,0,0,1,.06-.22.3.3,0,0,1,0-.1.11.11,0,0,0-.06-.14.14.14,0,0,0-.17,0,.49.49,0,0,0-.1.15,4.91,4.91,0,0,0-.15.51c0,.13-.07.25-.22.29Z"></path>
            <path class="rshipcls-3" d="M422.32,9.22a.68.68,0,0,1,.08.77c0,.07-.1.13-.15.2-.07-.13-.13-.17-.23-.17a.21.21,0,0,0-.21.18c0,.13-.05.26.1.34a.29.29,0,0,0,.13.05.57.57,0,0,0,.71-.37c.09-.25.15-.51.25-.76s.18-.32.27-.49l.07-.07s.08-.05.11,0a.21.21,0,0,0,.23.12.3.3,0,0,0,.27-.18.33.33,0,0,0-.05-.38.49.49,0,0,0-.45-.1.75.75,0,0,0-.47.27,2.71,2.71,0,0,0-.24.35.41.41,0,0,1-.37.21Z"></path>
            <path class="rshipcls-3" d="M418.37,10.17a.56.56,0,0,1-.23-.45.48.48,0,0,1,.13-.47l-.13-.07a.64.64,0,0,1-.29-.25,2.11,2.11,0,0,0-.3-.37.65.65,0,0,0-.61-.19.32.32,0,0,0-.28.43A.29.29,0,0,0,417,9a.24.24,0,0,0,.21-.1c0-.08.08-.09.14,0a2.32,2.32,0,0,1,.38.73c.07.2.12.41.2.61a.57.57,0,0,0,.71.33c.1,0,.19-.07.2-.17a.29.29,0,0,0-.09-.35.2.2,0,0,0-.31.07Z"></path>
            <path class="rshipcls-3" d="M423.81,9.53c0-.08.07-.15.1-.23s0-.11-.08-.13a.26.26,0,0,0-.32.15.7.7,0,0,1-.13.17h0l.07-.12c.05-.09,0-.15,0-.18s-.12,0-.19.06a.85.85,0,0,0-.22.42c0,.09,0,.18.16.18h.78a.34.34,0,0,0,.32-.21,1,1,0,0,0,.09-.28c0-.06,0-.13-.07-.16a.25.25,0,0,0-.26.06s0,.1-.08.14l-.11.15Z"></path>
            <path class="rshipcls-3" d="M417.21,9.47c0-.06-.07-.12-.11-.17a.23.23,0,0,0-.28-.13c-.09,0-.12.05-.1.13a1.8,1.8,0,0,0,.08.21h0a2.12,2.12,0,0,1-.12-.2.23.23,0,0,0-.28-.13c-.06,0-.11,0-.1.1a.6.6,0,0,0,.28.53l.08,0h.79c.17,0,.21-.05.18-.19a.81.81,0,0,0-.21-.41s0-.05-.06-.05h-.14a.14.14,0,0,0,0,.11,1.66,1.66,0,0,0,.06.16Z"></path>
            <path class="rshipcls-3" d="M420.38,9.07c.21.07.39.14.58.19l1.3.38c.09,0,.12,0,.11-.07a.33.33,0,0,0-.24-.33l-1.19-.38h-.07Z"></path>
            <path class="rshipcls-3" d="M416.39,9.79c-.14.09-.28.17-.45.06l.1-.06c.16-.08.22-.17.19-.32A.28.28,0,0,0,416,9.2a.4.4,0,0,0-.42.12.48.48,0,0,0,.25.77.52.52,0,0,0,.54-.18s0-.06,0-.1Z"></path>
            <path class="rshipcls-3" d="M424.71,9.85a.26.26,0,0,1-.25,0,2,2,0,0,1-.23-.1.18.18,0,0,1,0,.06.57.57,0,0,0,.54.25.45.45,0,0,0,.37-.41.43.43,0,0,0,0-.16.4.4,0,0,0-.5-.33.3.3,0,0,0-.25.25.27.27,0,0,0,.15.32Z"></path>
            <path class="rshipcls-3" d="M421.05,8.83l1.13.29a.42.42,0,0,0,.36-.07.26.26,0,0,0,0-.09.15.15,0,0,0-.09,0l-1-.28a.19.19,0,0,0-.13,0l-.35.16Z"></path>
        </g>
        <path class="rshipcls-56" d="M378,79.17a3.82,3.82,0,0,1-4,3.63,3.72,3.72,0,0,1-3.86-3.44,3.63,3.63,0,0,1,3.65-3.61A3.83,3.83,0,0,1,378,79.17Z"></path>
        <path class="rshipcls-57" d="M444.93,77.3a3.83,3.83,0,0,1-4,3.63,3.73,3.73,0,0,1-3.86-3.44,3.65,3.65,0,0,1,3.66-3.62A3.85,3.85,0,0,1,444.93,77.3Z"></path>
        <path class="rshipcls-58" d="M459.48,77.3a3.83,3.83,0,0,1-4,3.63,3.73,3.73,0,0,1-3.86-3.44,3.65,3.65,0,0,1,3.65-3.62A3.85,3.85,0,0,1,459.48,77.3Z"></path>
    </g>
</g>
<!-- LEFT SHIP -->
<defs>
    <style>
        .lship-cls-1 {
            fill: none;
        }

        .lship-cls-1,
        .lship-cls-48,
        .lship-cls-49,
        .lship-cls-50,
        .lship-cls-51,
        .lship-cls-52,
        .lship-cls-53,
        .lship-cls-54,
        .lship-cls-56,
        .lship-cls-57,
        .lship-cls-58 {
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 0.25px;
        }

        .lship-cls-2 {
            opacity: 0.11;
        }

        .lship-cls-3 {
            fill: #fff;
        }

        .lship-cls-4 {
            fill: url(#lship-linear-gradient);
        }

        .lship-cls-5 {
            fill: url(#lship-linear-gradient-2);
        }

        .lship-cls-6 {
            fill: url(#lship-linear-gradient-3);
        }

        .lship-cls-7 {
            fill: url(#lship-linear-gradient-4);
        }

        .lship-cls-8 {
            fill: url(#lship-linear-gradient-5);
        }

        .lship-cls-9 {
            fill: url(#lship-linear-gradient-6);
        }

        .lship-cls-10 {
            fill: url(#lship-linear-gradient-7);
        }

        .lship-cls-11 {
            fill: url(#lship-linear-gradient-8);
        }

        .lship-cls-12 {
            fill: url(#lship-linear-gradient-9);
        }

        .lship-cls-13 {
            fill: url(#lship-linear-gradient-10);
        }

        .lship-cls-14 {
            fill: url(#lship-linear-gradient-11);
        }

        .lship-cls-15 {
            fill: url(#lship-linear-gradient-12);
        }

        .lship-cls-16 {
            fill: url(#lship-linear-gradient-13);
        }

        .lship-cls-17 {
            fill: url(#lship-linear-gradient-14);
        }

        .lship-cls-18 {
            fill: url(#lship-linear-gradient-15);
        }

        .lship-cls-19 {
            fill: url(#lship-linear-gradient-16);
        }

        .lship-cls-20 {
            fill: url(#lship-linear-gradient-17);
        }

        .lship-cls-21 {
            fill: url(#lship-linear-gradient-18);
        }

        .lship-cls-22 {
            fill: url(#lship-linear-gradient-19);
        }

        .lship-cls-23 {
            fill: url(#lship-linear-gradient-20);
        }

        .lship-cls-24 {
            fill: url(#lship-linear-gradient-21);
        }

        .lship-cls-25 {
            fill: url(#lship-linear-gradient-22);
        }

        .lship-cls-26 {
            fill: url(#lship-linear-gradient-23);
        }

        .lship-cls-27 {
            fill: url(#lship-linear-gradient-24);
        }

        .lship-cls-28 {
            fill: url(#lship-linear-gradient-25);
        }

        .lship-cls-29 {
            fill: url(#lship-linear-gradient-26);
        }

        .lship-cls-30 {
            fill: url(#lship-linear-gradient-27);
        }

        .lship-cls-31 {
            fill: url(#lship-linear-gradient-28);
        }

        .lship-cls-32 {
            fill: url(#lship-linear-gradient-29);
        }

        .lship-cls-33 {
            fill: url(#lship-linear-gradient-30);
        }

        .lship-cls-34 {
            fill: url(#lship-linear-gradient-31);
        }

        .lship-cls-35 {
            fill: url(#lship-linear-gradient-32);
        }

        .lship-cls-36 {
            fill: url(#lship-linear-gradient-33);
        }

        .lship-cls-37 {
            fill: url(#lship-linear-gradient-34);
        }

        .lship-cls-38 {
            fill: url(#lship-linear-gradient-35);
        }

        .lship-cls-39 {
            fill: url(#lship-linear-gradient-36);
        }

        .lship-cls-40 {
            fill: url(#lship-linear-gradient-37);
        }

        .lship-cls-41 {
            fill: url(#lship-linear-gradient-38);
        }

        .lship-cls-42 {
            fill: url(#lship-linear-gradient-39);
        }

        .lship-cls-43 {
            fill: url(#lship-linear-gradient-40);
        }

        .lship-cls-44 {
            fill: url(#lship-linear-gradient-41);
        }

        .lship-cls-45 {
            fill: url(#lship-linear-gradient-42);
        }

        .lship-cls-46 {
            fill: url(#lship-linear-gradient-43);
        }

        .lship-cls-47 {
            clip-path: url(#clip-path-l);
        }

        .lship-cls-48 {
            fill: url(#lship-linear-gradient-44);
        }

        .lship-cls-49 {
            fill: url(#lship-linear-gradient-45);
        }

        .lship-cls-50 {
            fill: url(#lship-linear-gradient-46);
        }

        .lship-cls-51 {
            fill: url(#lship-linear-gradient-47);
        }

        .lship-cls-52 {
            fill: url(#lship-linear-gradient-48);
        }

        .lship-cls-53 {
            fill: url(#lship-linear-gradient-49);
        }

        .lship-cls-54 {
            fill: url(#lship-linear-gradient-50);
        }

        .lship-cls-55 {
            opacity: 0.5;
        }

        .lship-cls-56 {
            fill: url(#lship-linear-gradient-51);
        }

        .lship-cls-57 {
            fill: url(#lship-linear-gradient-52);
        }

        .lship-cls-58 {
            fill: url(#lship-linear-gradient-53);
        }
    </style>
    <linearGradient id="lship-linear-gradient" x1="415.25" y1="54.3" x2="415.25" y2="53.34" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#733318"></stop>
        <stop offset="0.22" stop-color="#763518"></stop>
        <stop offset="0.42" stop-color="#813c19"></stop>
        <stop offset="0.6" stop-color="#93471a"></stop>
        <stop offset="0.78" stop-color="#ad561c"></stop>
        <stop offset="0.96" stop-color="#cd6a1e"></stop>
        <stop offset="1" stop-color="#d66f1f"></stop>
    </linearGradient>
    <linearGradient id="lship-linear-gradient-2" x1="415.25" y1="50.6" x2="415.25" y2="49.65" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-3" x1="415.25" y1="53.34" x2="415.25" y2="50.6" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-4" x1="410.44" y1="53.34" x2="410.44" y2="50.6" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-5" x1="420.07" y1="53.34" x2="420.07" y2="50.6" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-6" x1="415.25" y1="49.65" x2="415.25" y2="43.82" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-7" x1="378.5" y1="98.98" x2="378.5" y2="97.99" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-8" x1="378.5" y1="95.15" x2="378.5" y2="94.16" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-9" x1="378.5" y1="97.99" x2="378.5" y2="95.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-10" x1="371.5" y1="97.99" x2="371.5" y2="95.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-11" x1="385.5" y1="97.99" x2="385.5" y2="95.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-12" x1="378.16" y1="73.05" x2="378.16" y2="72.05" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-13" x1="378.16" y1="69.22" x2="378.16" y2="68.22" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-14" x1="378.16" y1="72.05" x2="378.16" y2="69.22" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-15" x1="373.79" y1="72.05" x2="373.79" y2="69.22" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-16" x1="382.54" y1="72.05" x2="382.54" y2="69.22" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-17" x1="455.85" y1="103.8" x2="455.85" y2="102.81" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-18" x1="455.85" y1="99.97" x2="455.85" y2="98.98" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-19" x1="455.85" y1="102.81" x2="455.85" y2="99.97" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-20" x1="450.32" y1="102.81" x2="450.32" y2="99.97" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-21" x1="461.38" y1="102.81" x2="461.38" y2="99.97" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-22" x1="456.41" y1="81.27" x2="456.41" y2="80.56" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-23" x1="456.41" y1="78.54" x2="456.41" y2="77.83" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-24" x1="456.41" y1="80.56" x2="456.41" y2="78.54" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-25" x1="452.47" y1="80.56" x2="452.47" y2="78.54" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-26" x1="460.35" y1="80.56" x2="460.35" y2="78.54" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-27" x1="417.11" y1="80.24" x2="417.11" y2="79.25" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-28" x1="417.11" y1="76.41" x2="417.11" y2="75.42" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-29" x1="417.11" y1="79.25" x2="417.11" y2="76.41" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-30" x1="411.06" y1="79.25" x2="411.06" y2="76.41" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-31" x1="423.16" y1="79.25" x2="423.16" y2="76.41" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-32" x1="378.5" y1="50.71" x2="378.5" y2="50.05" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-33" x1="378.5" y1="48.15" x2="378.5" y2="47.49" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-34" x1="378.5" y1="50.05" x2="378.5" y2="48.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-35" x1="375.17" y1="50.05" x2="375.17" y2="48.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-36" x1="381.84" y1="50.05" x2="381.84" y2="48.15" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-37" x1="378.5" y1="47.49" x2="378.5" y2="45.19" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-38" x1="456.31" y1="63.32" x2="456.31" y2="62.78" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-39" x1="456.31" y1="61.23" x2="456.31" y2="60.68" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-40" x1="456.31" y1="62.78" x2="456.31" y2="61.23" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-41" x1="453.59" y1="62.78" x2="453.59" y2="61.23" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-42" x1="459.04" y1="62.78" x2="459.04" y2="61.23" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-43" x1="456.31" y1="60.68" x2="456.31" y2="58.8" xlink:href="#lship-linear-gradient"></linearGradient>
    <clipPath id="clip-path-l">
        <path class="lship-cls-1" d="M465.66,99.12a1.71,1.71,0,0,0-.4-.07,1.88,1.88,0,0,0-.48.06l-8.41,3.81-1.24.56-12.71,5.75a51.36,51.36,0,0,1-1.94,5.41c-.21.51-1.74.82-2.67.84-5.14.09-10.29,0-15.43.09-2.06,0-2.67-.78-2.64-2.54,0-1.13,0-2,0-2.71h-2.66c0,.45,0,1,0,1.61,0,3.62,0,3.62-4.08,3.64-.83,0-1.66,0-2.49,0-9.88-.12-7.44,1.09-11.28-6.93-1.48-3.1-3-6.18-4.43-9.3-.05-.11-.1-.23-.16-.35H366.17l-.18.17-.71-.17H361a7.18,7.18,0,0,0-.73,3.36c1.22,6.8,3.29,13.39,7.62,19.18,4.64,6.21,10.54,11.51,18.92,12.73a163.93,163.93,0,0,0,48.05.16c12.87-1.9,22.34-7.73,27.61-18.52,1.91-3.91,3.25-8,4.79-12.09C468,102,468.17,100.2,465.66,99.12Zm-93,13.62a3.63,3.63,0,0,1-3.65-3.61,3.74,3.74,0,0,1,3.86-3.45,3.57,3.57,0,1,1-.21,7.06Zm14.85,0a3.57,3.57,0,1,1,.1-7.06,3.54,3.54,0,1,1-.1,7.06Zm66.89,1.87a3.57,3.57,0,1,1,.1-7.06,3.54,3.54,0,1,1-.1,7.06Z"></path>
    </clipPath>
    <linearGradient id="lship-linear-gradient-44" x1="333.06" y1="-308.82" x2="338.98" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-45" x1="327.14" y1="-308.82" x2="333.06" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-46" x1="338.98" y1="-308.82" x2="344.9" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-47" x1="303.46" y1="-308.82" x2="309.38" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-48" x1="309.38" y1="-308.82" x2="315.3" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-49" x1="321.22" y1="-308.82" x2="327.14" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-50" x1="315.3" y1="-308.82" x2="321.22" y2="-308.82" gradientTransform="translate(722.79 441.06) rotate(-90)" xlink:href="#lship-linear-gradient"></linearGradient>
    <linearGradient id="lship-linear-gradient-51" x1="845.51" y1="206.27" x2="845.51" y2="199.22" gradientTransform="translate(1299.76 313.83) rotate(180)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff" stop-opacity="0.1"></stop>
        <stop offset="0.05" stop-color="#d0dce8" stop-opacity="0.18"></stop>
        <stop offset="0.15" stop-color="#80a0c1" stop-opacity="0.33"></stop>
        <stop offset="0.29" stop-color="#4775a5" stop-opacity="0.43"></stop>
        <stop offset="0.48" stop-color="#275d95" stop-opacity="0.48"></stop>
        <stop offset="1" stop-color="#1e5691" stop-opacity="0.5"></stop>
    </linearGradient>
    <linearGradient id="lship-linear-gradient-52" x1="670.07" y1="200.58" x2="670.07" y2="193.53" gradientTransform="translate(1057.42 306.27) rotate(180)" xlink:href="#lship-linear-gradient-51"></linearGradient>
    <linearGradient id="lship-linear-gradient-53" x1="631.91" y1="200.58" x2="631.91" y2="193.53" gradientTransform="translate(1004.71 306.27) rotate(180)" xlink:href="#lship-linear-gradient-51"></linearGradient>
</defs>
<g id="night_scene_lship" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
        <path d="M434.16,110.31c2.43-2.39,7.24-7.88,7.08-15.32-.14-7-4.66-12.25-7.08-14.63h-33c2.42,2.38,6.94,7.58,7.08,14.63.15,7.44-4.66,12.93-7.08,15.32Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M421.15,95.67A13.65,13.65,0,0,0,417.73,90c-.08-.08-.19-.2-.33-.33a18.77,18.77,0,0,0-6.57-4.07,23.76,23.76,0,0,0-6.5-1.5,24.56,24.56,0,0,1,1.51,2.39A22.22,22.22,0,0,1,407,89a19.85,19.85,0,0,1,.81,2.71,17.28,17.28,0,0,1,.32,2.17,18.27,18.27,0,0,1-.72,6.54,20.42,20.42,0,0,1-3.05,6.07,25.2,25.2,0,0,1-3.25,3.8c9.08-.42,16.52-3.68,18.94-8.52A9.07,9.07,0,0,0,421.15,95.67Z"></path>
        </g>
        <path d="M464,98.78c1.42-1.4,4.23-4.61,4.14-9-.08-4.12-2.72-7.16-4.14-8.55H444.68c1.42,1.39,4.06,4.43,4.14,8.55.09,4.35-2.72,7.56-4.14,9Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M456.38,90.22a7.72,7.72,0,0,0-2-3.32l-.19-.2a10.82,10.82,0,0,0-3.84-2.37,13.71,13.71,0,0,0-3.8-.88,10.68,10.68,0,0,1,.88,1.4,10.19,10.19,0,0,1,.69,1.48,11.64,11.64,0,0,1,.48,1.58,12,12,0,0,1,.19,1.27,10.81,10.81,0,0,1-.42,3.83,12,12,0,0,1-1.79,3.54,15.21,15.21,0,0,1-1.9,2.23c5.31-.25,9.66-2.16,11.07-5A5.21,5.21,0,0,0,456.38,90.22Z"></path>
        </g>
        <path d="M389,94.16c1.71-1.68,5.1-5.55,5-10.8-.1-5-3.28-8.63-5-10.31H365.68c1.71,1.68,4.89,5.34,5,10.31.1,5.25-3.29,9.12-5,10.8Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M379.8,83.84a9.53,9.53,0,0,0-2.42-4l-.23-.24a13,13,0,0,0-4.63-2.86,16.31,16.31,0,0,0-4.58-1.06A15,15,0,0,1,369,77.36a17.43,17.43,0,0,1,.84,1.79,14.49,14.49,0,0,1,.57,1.91,15.27,15.27,0,0,1,.23,1.54,13.08,13.08,0,0,1-.51,4.6A14.48,14.48,0,0,1,368,91.48a17.81,17.81,0,0,1-2.3,2.68c6.41-.3,11.65-2.59,13.36-6A6.37,6.37,0,0,0,379.8,83.84Z"></path>
        </g>
        <path d="M426.86,75.42c1.71-1.69,5.11-5.55,5-10.81-.1-5-3.29-8.63-5-10.31H403.58c1.7,1.68,4.89,5.35,5,10.31.11,5.26-3.28,9.12-5,10.81Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M417.69,65.09a9.61,9.61,0,0,0-2.41-4l-.23-.23A13.18,13.18,0,0,0,410.42,58a17.21,17.21,0,0,0-4.58-1.06,16.81,16.81,0,0,1,1.06,1.69,14.64,14.64,0,0,1,.83,1.79,12.58,12.58,0,0,1,.8,3.44,13.11,13.11,0,0,1-.51,4.61,14.48,14.48,0,0,1-2.15,4.28,18.43,18.43,0,0,1-2.29,2.68c6.4-.3,11.65-2.6,13.35-6A6.39,6.39,0,0,0,417.69,65.09Z"></path>
        </g>
        <path d="M387.31,68.22c1.42-1.39,4.23-4.6,4.14-8.95-.08-4.12-2.73-7.16-4.14-8.56H368c1.41,1.4,4.05,4.44,4.14,8.56.09,4.35-2.72,7.56-4.14,8.95Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M379.7,59.66a8.06,8.06,0,0,0-2-3.32l-.19-.19a10.88,10.88,0,0,0-3.84-2.38,13.65,13.65,0,0,0-3.8-.87,12.54,12.54,0,0,1,.88,1.39,12.05,12.05,0,0,1,.69,1.49,9.27,9.27,0,0,1,.47,1.58,10.09,10.09,0,0,1,.2,1.27,10.77,10.77,0,0,1-.43,3.82A11.82,11.82,0,0,1,369.9,66a15.05,15.05,0,0,1-1.9,2.22c5.31-.24,9.66-2.15,11.07-5A5.24,5.24,0,0,0,379.7,59.66Z"></path>
        </g>
        <path d="M462.9,77.67c1.14-1.12,3.4-3.7,3.33-7.2a10.28,10.28,0,0,0-3.33-6.87H447.38a10.28,10.28,0,0,1,3.33,6.87c.07,3.5-2.19,6.08-3.33,7.2Z"></path>
        <g class="lship-cls-2">
            <path class="lship-cls-3" d="M456.79,70.79a6.39,6.39,0,0,0-1.61-2.66L455,68a8.55,8.55,0,0,0-3.08-1.91,11.44,11.44,0,0,0-3.05-.71,10.74,10.74,0,0,1,.7,1.13,11,11,0,0,1,.56,1.19,9.29,9.29,0,0,1,.38,1.27,8.68,8.68,0,0,1,.15,1,8.41,8.41,0,0,1-.34,3.07,9.35,9.35,0,0,1-1.43,2.85,11.6,11.6,0,0,1-1.53,1.79c4.27-.2,7.76-1.73,8.9-4A4.25,4.25,0,0,0,456.79,70.79Z"></path>
        </g>
        <rect class="lship-cls-4" x="405.14" y="53.34" width="20.22" height="0.96"></rect>
        <rect class="lship-cls-5" x="408.37" y="49.65" width="13.76" height="0.96"></rect>
        <polyline class="lship-cls-6" points="415.74 50.6 415.74 53.34 414.79 53.34 414.77 50.6"></polyline>
        <path class="lship-cls-7" d="M414.77,50.6l-9.63,2.74h2.61l8-2.74Z"></path>
        <path class="lship-cls-8" d="M415.74,50.6l9.62,2.74h-2.6l-8-2.74Z"></path>
        <path class="lship-cls-9" d="M415.74,44.83v4.82h-.95l0-4.82c0-.59.25-1,.51-1S415.72,44.28,415.74,44.83Z"></path>
        <rect class="lship-cls-10" x="363.8" y="97.99" width="29.41" height="0.99"></rect>
        <rect class="lship-cls-11" x="368.5" y="94.16" width="20.01" height="0.99"></rect>
        <polyline class="lship-cls-12" points="379.21 95.16 379.21 97.99 377.83 97.99 377.8 95.16"></polyline>
        <path class="lship-cls-13" d="M377.8,95.15,363.8,98h3.79l11.62-2.84Z"></path>
        <path class="lship-cls-14" d="M379.21,95.15l14,2.84h-3.79L377.8,95.15Z"></path>
        <rect class="lship-cls-15" x="368.97" y="72.05" width="18.38" height="0.99"></rect>
        <rect class="lship-cls-16" x="371.91" y="68.22" width="12.5" height="0.99"></rect>
        <polyline class="lship-cls-17" points="378.6 69.22 378.6 72.06 377.74 72.06 377.72 69.22"></polyline>
        <path class="lship-cls-18" d="M377.72,69.22,369,72.05h2.37l7.26-2.83Z"></path>
        <path class="lship-cls-19" d="M378.6,69.22l8.75,2.83H385l-7.26-2.83Z"></path>
        <rect class="lship-cls-20" x="444.24" y="102.81" width="23.23" height="0.99"></rect>
        <rect class="lship-cls-21" x="447.95" y="98.98" width="15.8" height="0.99"></rect>
        <polyline class="lship-cls-22" points="456.41 99.97 456.41 102.81 455.31 102.81 455.29 99.97"></polyline>
        <path class="lship-cls-23" d="M455.29,100l-11.05,2.84h3l9.18-2.84Z"></path>
        <path class="lship-cls-24" d="M456.41,100l11.06,2.84h-3L455.29,100Z"></path>
        <rect class="lship-cls-25" x="448.13" y="80.56" width="16.56" height="0.71"></rect>
        <rect class="lship-cls-26" x="450.77" y="77.83" width="11.27" height="0.71"></rect>
        <polyline class="lship-cls-27" points="456.81 78.54 456.81 80.56 456.02 80.56 456.01 78.54"></polyline>
        <path class="lship-cls-28" d="M456,78.54l-7.88,2h2.13l6.54-2Z"></path>
        <path class="lship-cls-29" d="M456.8,78.54l7.89,2h-2.14l-6.54-2Z"></path>
        <rect class="lship-cls-30" x="404.4" y="79.25" width="25.42" height="0.99"></rect>
        <rect class="lship-cls-31" x="408.46" y="75.42" width="17.29" height="0.99"></rect>
        <polyline class="lship-cls-32" points="417.72 76.41 417.72 79.25 416.52 79.25 416.5 76.41"></polyline>
        <path class="lship-cls-33" d="M416.5,76.41l-12.1,2.84h3.27l10.05-2.84Z"></path>
        <path class="lship-cls-34" d="M417.72,76.41l12.1,2.84h-3.28l-10-2.84Z"></path>
        <rect class="lship-cls-35" x="371.5" y="50.05" width="14" height="0.66"></rect>
        <rect class="lship-cls-36" x="373.74" y="47.49" width="9.52" height="0.66"></rect>
        <polyline class="lship-cls-37" points="378.84 48.15 378.84 50.05 378.18 50.05 378.17 48.15"></polyline>
        <path class="lship-cls-38" d="M378.17,48.15l-6.67,1.9h1.81l5.53-1.9Z"></path>
        <path class="lship-cls-39" d="M378.84,48.15l6.66,1.9h-1.8l-5.53-1.9Z"></path>
        <path class="lship-cls-40" d="M378.84,45.59v1.9h-.66v-1.9c0-.23.17-.41.35-.39A.38.38,0,0,1,378.84,45.59Z"></path>
        <rect class="lship-cls-41" x="450.58" y="62.78" width="11.46" height="0.54"></rect>
        <rect class="lship-cls-42" x="452.42" y="60.68" width="7.79" height="0.54"></rect>
        <polyline class="lship-cls-43" points="456.59 61.23 456.59 62.78 456.05 62.78 456.04 61.23"></polyline>
        <path class="lship-cls-44" d="M456,61.23l-5.46,1.55h1.48l4.53-1.55Z"></path>
        <path class="lship-cls-45" d="M456.59,61.23,462,62.78h-1.48L456,61.23Z"></path>
        <path class="lship-cls-46" d="M456.59,59.13v1.55h-.54V59.13a.31.31,0,0,1,.29-.33A.33.33,0,0,1,456.59,59.13Z"></path>
        <g class="lship-cls-47">
            <rect class="lship-cls-48" x="356.6" y="102.08" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-49" x="356.6" y="108" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-50" x="356.6" y="96.16" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-51" x="356.6" y="131.69" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-52" x="356.6" y="125.76" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-53" x="356.6" y="113.92" width="114.74" height="5.92"></rect>
            <rect class="lship-cls-54" x="356.6" y="119.84" width="114.74" height="5.92"></rect>
        </g>
        <path class="lship-cls-1" d="M465.66,99.12a1.71,1.71,0,0,0-.4-.07,1.88,1.88,0,0,0-.48.06l-8.41,3.81-1.24.56-12.71,5.75a51.36,51.36,0,0,1-1.94,5.41c-.21.51-1.74.82-2.67.84-5.14.09-10.29,0-15.43.09-2.06,0-2.67-.78-2.64-2.54,0-1.13,0-2,0-2.71h-2.66c0,.45,0,1,0,1.61,0,3.62,0,3.62-4.08,3.64-.83,0-1.66,0-2.49,0-9.88-.12-7.44,1.09-11.28-6.93-1.48-3.1-3-6.18-4.43-9.3-.05-.11-.1-.23-.16-.35H366.17l-.18.17-.71-.17H361a7.18,7.18,0,0,0-.73,3.36c1.22,6.8,3.29,13.39,7.62,19.18,4.64,6.21,10.54,11.51,18.92,12.73a163.93,163.93,0,0,0,48.05.16c12.87-1.9,22.34-7.73,27.61-18.52,1.91-3.91,3.25-8,4.79-12.09C468,102,468.17,100.2,465.66,99.12Zm-93,13.62a3.63,3.63,0,0,1-3.65-3.61,3.74,3.74,0,0,1,3.86-3.45,3.57,3.57,0,1,1-.21,7.06Zm14.85,0a3.57,3.57,0,1,1,.1-7.06,3.54,3.54,0,1,1-.1,7.06Zm66.89,1.87a3.57,3.57,0,1,1,.1-7.06,3.54,3.54,0,1,1-.1,7.06Z"></path>
        <path class="flag" d="M414.89,44.76h2.93c-.48-.25-.68-.74-.65-1.54.08-2.81,0-5.62,0-8.43,0-2,0-2-2.21-1.54a4.93,4.93,0,0,1-.76,0,24.24,24.24,0,0,0-4.53.3,17.14,17.14,0,0,1-7.93.37c-2-.42-2.51,0-2.6,1.93-.11,2.4-.18,4.81-.23,7.22,0,1.82,1.19,2.73,2.95,1.81,4.39-2.28,8.77-.34,13.18-.09Z"></path>
        <g class="lship-cls-55 flag">
            <path class="lship-cls-3" d="M406.76,35.61a1.63,1.63,0,0,0-.09.19c-.09.28-.17.55-.24.82a2.71,2.71,0,0,0,0,.4,1,1,0,0,1,0,.24s0,.06-.05.06-.06,0-.08,0a.37.37,0,0,1-.07-.14,2.22,2.22,0,0,1,0-.89,3.73,3.73,0,0,1,.26-.73,1,1,0,0,1,.58-.46,2.56,2.56,0,0,1,.95-.19,3.57,3.57,0,0,1,.57,0,1.57,1.57,0,0,1,1.15.9,3.35,3.35,0,0,1,.19.53,2.51,2.51,0,0,1,0,.39,1,1,0,0,1-.1.4s0,.07-.06.09-.07.05-.1,0-.06,0-.06-.07l0-.45s0-.08,0-.12-.09,0-.08.09.05.29.06.44a.22.22,0,0,0,.15.22c.14.06.17.12.13.26a1,1,0,0,1-.1.17.26.26,0,0,1-.25.09l-.17,0c-.13,0-.24,0-.27.12a.91.91,0,0,1-.28.39.12.12,0,0,0,0,.08.74.74,0,0,1,0,.14s0,.08,0,.08a.32.32,0,0,1-.17,0s0,0,0-.08a.89.89,0,0,1,0-.15l-.19,0a.42.42,0,0,1,0,.15c0,.08,0,.11-.12.11s-.12,0-.12-.1l0-.16H408l0,.15c0,.08,0,.11-.1.11s-.14,0-.14-.09a1.55,1.55,0,0,1,0-.17h-.12c0,.09.09.17,0,.24a.18.18,0,0,1-.2,0c-.1-.08,0-.16,0-.25l-.12,0a1.11,1.11,0,0,1,0,.17s0,.07,0,.07l-.14,0s0,0,0-.07a1.4,1.4,0,0,1,.09-.17.67.67,0,0,1-.2-.4c0-.17-.13-.21-.32-.15l-.19,0a.16.16,0,0,1-.18,0,2.22,2.22,0,0,1-.19-.27s0-.11.05-.14a.28.28,0,0,0,.15-.3c0-.12,0-.23,0-.35a.79.79,0,0,1,.1-.4,1.43,1.43,0,0,0,.11-.39,3.2,3.2,0,0,1,.1-.42Zm0,1.31V37a.51.51,0,0,0,.19.39.23.23,0,0,0,.26,0l.31-.22a.35.35,0,0,0,.13-.32.21.21,0,0,0-.19-.22,1.88,1.88,0,0,0-.33-.05C406.87,36.59,406.77,36.67,406.78,36.92Zm2.39.06a.29.29,0,0,0-.28-.34.86.86,0,0,0-.42,0c-.21.07-.28.25-.13.41a1.37,1.37,0,0,0,.29.25.5.5,0,0,0,.2.08c.18,0,.29,0,.31-.2S409.17,37,409.17,37Zm-1.23.16-.07.09-.12.38a.89.89,0,0,0,0,.22s0,.05,0,.07.05,0,.06,0l.11-.13.09.1.1.13s.06,0,.1,0a.21.21,0,0,0,.08-.21,1.22,1.22,0,0,0-.32-.6Z"></path>
            <path class="lship-cls-3" d="M402.51,36l.07.06a11,11,0,0,0,2.09,2.12,13.06,13.06,0,0,0,3.87,2.05c.55.19,1.11.35,1.66.52l.13,0,0,0A.48.48,0,0,1,410,41a.36.36,0,0,1-.14,0,17.1,17.1,0,0,1-2.42-.79,11.28,11.28,0,0,1-2.28-1.34l-.05,0h0c.08.07.15.15.24.22a6.37,6.37,0,0,0,1.24.79,13.88,13.88,0,0,0,2.68,1.07l.64.2a.32.32,0,0,1,.19.43l-.36-.1a18.33,18.33,0,0,1-3-1.1,10.78,10.78,0,0,1-3.2-2.26,4.76,4.76,0,0,1-.94-1.38,1.15,1.15,0,0,1-.11-.55.59.59,0,0,1,0-.13Z"></path>
            <path class="lship-cls-3" d="M408.17,40a12,12,0,0,0,5.48-4,.2.2,0,0,1,0,.08,1.34,1.34,0,0,1-.09.63,5.19,5.19,0,0,1-1,1.38,10.84,10.84,0,0,1-3.3,2.29.29.29,0,0,1-.24,0l-.4-.13,1.23-.63a4.09,4.09,0,0,0,1.09-.8l-.06,0a12.66,12.66,0,0,1-2.14,1.26.44.44,0,0,1-.43,0,1.21,1.21,0,0,0-.2-.09Zm3.64-1.45a5.18,5.18,0,0,0,1.43-1.6A8.63,8.63,0,0,1,411.81,38.54Z"></path>
            <path class="lship-cls-3" d="M407.38,39V39c0-.11.08-.17.2-.12a.09.09,0,0,1,.05.08.8.8,0,0,1,0,.15l.14,0a1.55,1.55,0,0,0,0-.15s0-.09.06-.09a.3.3,0,0,1,.19,0s0,.1,0,.16a.14.14,0,0,1,0,.06h.13c0-.08-.07-.17,0-.22a.22.22,0,0,1,.18,0c.1.05,0,.13,0,.2h.11c0-.08-.06-.16.05-.2a.25.25,0,0,1,.17,0c.08,0,0,.1,0,.16a.32.32,0,0,0,.26-.22c0-.11.05-.23.07-.34a.75.75,0,0,1,.2-.42.19.19,0,0,1,.22-.05c0,.11,0,.22-.05.32l-.15.66a.44.44,0,0,1-.1.16l-.41.36a.38.38,0,0,1-.29.11q-.37,0-.75,0a.38.38,0,0,1-.25-.08l-.56-.47a.15.15,0,0,1-.07-.14,2.88,2.88,0,0,0,0-.41,2,2,0,0,0-.06-.23l0-.09a.1.1,0,0,1,.05-.14.15.15,0,0,1,.17,0,.54.54,0,0,1,.1.16,4.91,4.91,0,0,1,.15.51c0,.12.07.24.22.29Z"></path>
            <path class="lship-cls-3" d="M406,41a.7.7,0,0,0-.08.78c0,.07.1.12.15.19.07-.12.13-.17.23-.16a.21.21,0,0,1,.21.18c0,.13.05.26-.1.34l-.13,0a.57.57,0,0,1-.71-.38c-.09-.25-.15-.5-.25-.75a4.67,4.67,0,0,0-.27-.49s0,0-.06-.07-.09,0-.12,0a.23.23,0,0,1-.23.12.31.31,0,0,1-.27-.18.34.34,0,0,1,.06-.38.47.47,0,0,1,.44-.11.81.81,0,0,1,.47.28,3.53,3.53,0,0,1,.24.34A.41.41,0,0,0,406,41Z"></path>
            <path class="lship-cls-3" d="M410,42a.57.57,0,0,0,.23-.45.48.48,0,0,0-.12-.48,1.33,1.33,0,0,1,.12-.06.59.59,0,0,0,.29-.25,2.63,2.63,0,0,1,.3-.38.7.7,0,0,1,.61-.19.33.33,0,0,1,.28.44.28.28,0,0,1-.3.23.2.2,0,0,1-.2-.11c-.05-.08-.09-.08-.15,0a2.27,2.27,0,0,0-.38.72c-.07.21-.12.42-.2.62a.57.57,0,0,1-.71.33.25.25,0,0,1-.2-.17.33.33,0,0,1,.09-.36A.2.2,0,0,1,410,42S410,42,410,42Z"></path>
            <path class="lship-cls-3" d="M404.55,41.34c0-.07-.07-.14-.1-.22s0-.11.08-.13a.26.26,0,0,1,.32.15,1.92,1.92,0,0,0,.13.17h0l-.07-.12c0-.1,0-.15,0-.18s.12,0,.19.06a.85.85,0,0,1,.22.42c0,.09,0,.18-.16.18h-.78a.35.35,0,0,1-.32-.22,1.22,1.22,0,0,1-.09-.27c0-.06,0-.13.08-.16a.24.24,0,0,1,.26.06s0,.09.08.14l.1.14Z"></path>
            <path class="lship-cls-3" d="M411.15,41.28a1,1,0,0,0,.11-.17.24.24,0,0,1,.28-.12c.09,0,.13,0,.11.12s-.06.14-.08.22h0l.12-.2A.22.22,0,0,1,412,41c.06,0,.11,0,.1.11a.58.58,0,0,1-.28.53l-.08,0h-.79c-.17,0-.21,0-.18-.2a1,1,0,0,1,.21-.41s0,0,.06,0a.22.22,0,0,1,.14,0,.13.13,0,0,1,0,.11.94.94,0,0,1-.06.15Z"></path>
            <path class="lship-cls-3" d="M408,40.89l-.58.19-1.3.38c-.09,0-.11,0-.11-.07a.32.32,0,0,1,.24-.33l1.19-.38h.07Z"></path>
            <path class="lship-cls-3" d="M412,41.61c.14.09.28.17.45.06l-.1-.06a.28.28,0,0,1-.19-.32.3.3,0,0,1,.23-.27.42.42,0,0,1,.43.12.48.48,0,0,1-.26.77.5.5,0,0,1-.53-.18s0-.06-.05-.1Z"></path>
            <path class="lship-cls-3" d="M403.66,41.67a.24.24,0,0,0,.24,0,1.46,1.46,0,0,0,.23-.1.13.13,0,0,0,0,0,.55.55,0,0,1-.54.25.45.45,0,0,1-.37-.4.43.43,0,0,1,0-.16.4.4,0,0,1,.5-.34.32.32,0,0,1,.25.26.27.27,0,0,1-.15.32Z"></path>
            <path class="lship-cls-3" d="M407.31,40.65l-1.13.28a.39.39,0,0,1-.35-.06.53.53,0,0,1-.06-.1l.09,0,1-.28a.28.28,0,0,1,.13,0l.35.16Z"></path>
        </g>
        <path class="lship-cls-56" d="M454.51,107.56a3.63,3.63,0,0,1,3.65,3.61,3.74,3.74,0,0,1-3.86,3.45,3.57,3.57,0,1,1,.21-7.06Z"></path>
        <path class="lship-cls-57" d="M387.62,105.69a3.63,3.63,0,0,1,3.65,3.61,3.72,3.72,0,0,1-3.86,3.44,3.56,3.56,0,1,1,.21-7Z"></path>
        <path class="lship-cls-58" d="M373.07,105.69a3.63,3.63,0,0,1,3.65,3.61,3.72,3.72,0,0,1-3.86,3.44,3.56,3.56,0,1,1,.21-7Z"></path>
    </g>
</g>
</svg>
`

const bannerContainer = document.querySelector('.banner-content');
bannerContainer.innerHTML = banner;