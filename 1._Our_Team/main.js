const teamMembers = [
{
    "name": "Anders Latif",
    "url": "https://avatars3.   §.com/u/7512403?s=460&v=4",
    "skills": [{"name": "Javascript", "level": 94}, {"name": "CSS and UI", "level": 30}, {"name": "MySQL", "level": 80},  {"name": "MySQL", "level": 80},  {"name": "MongoDB", "level": 75}],
    "background": "Coming from a humaniora background and with keen interest in languages Anders is a late-bloomer when it comes to programming. But once he discovered programming he embraced it and it has taken up most of his spare time."
},
{
    "name": "Cosmin",
    "url": "",
    "skills": [{"name": "PHP", "level": 2}],
    "background": "background"
}
];

let selected = -1;


$('#0').click(() => {
    if (selected === 0) {
        selected = -1;
        clearProfileFields();
    } else {
        selected = 0;
        populateProfileFields(teamMembers[0]);
    }
});

$('#1').click(() => {
    if (selected === 1) {
        selected = -1;
        clearProfileFields();
    } else {
        selected = 1;
        populateProfileFields(teamMembers[1]);
    }
});

function populateProfileFields(person) {
    const profile = $('.profile');
    profile.append('<div class="name">Name: <span class="name">' + person.name + '</span></div>');
    profile.append('<div class="background">Background: <span class="background">' + person.background + '</span></div>');
    profile.append('<div class="background">Skills: <span class="skills">' + person.skills + '</span></div>');

}

function clearProfileFields() {
    $('.profile').empty();
}