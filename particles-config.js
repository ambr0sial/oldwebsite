// particles-config.js
particlesJS('particles', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#c89efc'
        },
        shape: {
            type: 'star',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 5
            },
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 250,
                size: 8,
                duration: 2,
                opacity: 0.3,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function redirectToAsh() {
    window.location.href = 'https://ash.ambrosial.space';
}

const text = 'ambrosial';
let index = 0;

function writeText() {
    const typedText = document.getElementById('typed-text');
    typedText.innerText = text.slice(0, index);

    if (index < text.length) {
        index++;
        setTimeout(writeText, 100);
    } else {
        typedText.classList.add('underline');
        document.getElementById('cursor').style.display = 'none';
    }
}

writeText();
