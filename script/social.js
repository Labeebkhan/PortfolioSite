import {social} from '../script/socialLIST.js';//this is done by using the concept of module
//this will help to over come naming convention issues ,Better Way to organize your Project when larger

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
