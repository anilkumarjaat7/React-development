// import wTech from "./assets/wtech.png";
import "./Card.css";
function Card({ img, name, expetices, email, phones }) {
  //   let name = "Amit Kumar";
  //   let expetices = "python full satck";
  //   let email = "amit@gmail.com";
  //   let phones = [8973458735, 975498798];

  return (
    <div className="card">
      <img src={img} />
      <h1> Name : {name}</h1>
      <p>expertices: {expetices}</p>
      <p>email: {email}</p>
      <p>
        phone :
        <ul>
          {phones.map((phone) => (
            <li>{phone}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

export default Card;
