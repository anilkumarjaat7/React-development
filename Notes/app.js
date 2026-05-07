function app(user) {
  school(user);
}

function school(user) {
  student(user);
}

function student(user) {
  console.log(user);
}

app("amit");
