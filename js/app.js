const info = [
  { name: "amit", email: "amit@gmail.com" },
  { name: "lokesh", email: "amit@gmail.com" },
  { name: "somu", email: "amit@gmail.com" },
];

let num1 =  info.forEach((value) => console.log(value));

<div>
info.map((value) => <h1>{value.name}</h1>);
</div>

// const info = { name: "amit", email: "amit@gmail.com" };

// function msg(names) {
//   console.log(names.name);
//   console.log(names.email);
// }

// msg(info[0]);
// msg(info[1]);
// msg(info[2]);
