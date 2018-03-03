const app = "I don't do much.";
fetch('https://api.github.com/user/repos').
  then(res => res.json()).
  then(json => console.log(json))

const token = '74eb26745a661a2ee344ac619c790c4d7ee80fe1'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
