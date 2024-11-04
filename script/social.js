let social = [
    {
        image: 'pic/facebook.png',
        name: 'Facebook Profile',
        link: 'https://www.facebook.com/labeebkhan3211',
        alternative: 'facebook-logo',
        css:'profilepic'
    },
    {
        image: 'pic/instagram.avif',
        name: 'Instagram Profile',
        link: 'https://www.instagram.com/',
        alternative: 'instagram-logo'
        ,css:'profilepic'
    },
    {
        image: 'pic/git.png',
        name: 'Git Hub',
        link: 'https://github.com/Labeebkhan',
        alternative: 'github-logo',
        css:'profilepic'
    },
    {
        image: 'pic/linkedin-.webp',
        name: 'LinkedIn Profile',
        link: 'https://www.linkedin.com/in/labeeb-khan-57320622a/',
        alternative: 'linkedin-logo',
        css:'profilepic_link'
    }
];

let html = '';
social.forEach((profile) => {

    let specialClass = '';
    if (profile.name === 'LinkedIn Profile') {
        specialClass = 'linkedin-background';
    } else if (profile.name === 'Git Hub') {
        specialClass = 'github-background';
    }

    html += `
        <div class="social-box">
            <div class="user_profile_pic">
                <img class="${profile.css}" src="${profile.image}" alt="${profile.alternative}">
            </div>
            <div class="user_name">
                <p class="user">${profile.name}</p>
            </div>
            <div class="visit_button">
                <button class="button-social"><a href="${profile.link}" target="_blank">Visit Profile</a></button>
            </div>
        </div>`;
});

document.querySelector('.social').innerHTML = html;
