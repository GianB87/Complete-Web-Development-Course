var user = {
    username: 'Gian',
    password: '123',
};

var database = [user,
    {
        username: 'Gian4',
        password: '123',
    },
    {
        username: 'Gian2',
        password: '123',
    },
    {
        username: 'Gian3',
        password: '123',
    }
]

var newsfeed = [
    {
        username: 'Gian',
        timeline: 'March',
    },    
    {
        username: 'Mark',
        timeline: 'Javascript',
    },
    {
        username: 'Sussy',
        timeline: 'Go',
    }
];
var userNamePrompt = prompt('What\'s your user name?');
var passwordPrompt = prompt('What\'s your password?');

function userValid(user,pass) {
    for (var i=0; i<database.length;i++){
        if (user===database[i].username && pass===database[i].password) {
            alert('Welcome '+user);
            return true
        } 
    }
    alert('Sorry, wrong user or pass');
    return false
}
function signIn(user,pass) {
    if (userValid(user,pass)){
        console.log(newsfeed);
    }
}
signIn(userNamePrompt,passwordPrompt)