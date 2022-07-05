const getData = async (pw) => {

    data = { "password": pw, "origin": "yovonnedawes.com" }

    fetch('https://vamplitude-master-server.herokuapp.com/api/client_sites/yovonnedawes/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.querySelector('.error').textContent = data.error;
                return false;
            }
            fillData(data.data);
        })
        .catch((error) => {
            console.error('Error:', error);
            document.querySelector('.error').textContent = "The site cannot be accessed at this time.";
        });
};


const fillData = (html) => {

    FULLSCREEN_CONTAINER.style.visibility = 'visible';

    FULLSCREEN_CONTAINER.animate([
        { opacity: 0 },
        { opacity: 1 },
    ],
        {
            duration: 250,
            iterations: 1,
            easing: "linear",
            fill: 'forwards',
        }
    );


    setTimeout(() => {
        const innerContainer = document.querySelector('.body-inner-container');
        innerContainer.innerHTML = html;
    }, 1000)

    setTimeout(() => {
        FULLSCREEN_CONTAINER.animate([
            { top: '0px', right: '0px', bottom: '0px', left: '0px' },
            { top: window.innerWidth / 2 + 'px', right: window.innerHeight / 2 + 'px', bottom: window.innerWidth / 2 + 'px', left: window.innerHeight / 2 + 'px' },
        ],
            {
                duration: 500,
                iterations: 1,
                easing: "linear",
                fill: 'forwards',
            }
        );
    }, 2000)
}