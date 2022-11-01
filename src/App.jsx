import "./App.css";
import myPhoto from "./photo.jpg";
import singing from "./singing.jpeg";
import embroidery from "./embroidery.jpg";
import bindge from "./bindge-watching.jpg";

function App() {
  const user = {
    name: "Yuliia",
    workingExperience: {
      "English teacher": 9,
      "ELT trainer": 4,
    },
    hobbies: ["Singing", "Embroidery", "Bindge-watching TV series"],
    project: "shchedryk.com.ua",
  };

  const websiteLink = "https://" + user.project;
  return (
    <main className="app">
      <div className="intro">
        <h1 className="title">About me</h1>

        <p className="text">Get to know me a bit!</p>
        <p className="text">My name is {user.name}, nice to meet you!</p>
        <img className="photo" src={myPhoto}></img>
        <p className="text">Fun facts about me:</p>
        <ul>
          <li className="list-item">
            I am an English teacher! I have been teaching for{" "}
            {user.workingExperience["English teacher"]} years now.
          </li>
          <li className="list-item">
            For the last {user.workingExperience["ELT trainer"]} years I have
            been working as an ELT trainer.
          </li>
          <li className="list-item">
            My hobbies are:
            <div>
              <ul className="hobbies">
                {user.hobbies.map((hobby) => (
                  <li key={hobby}>{hobby}</li>
                ))}
              </ul>
            </div>
            <div className="hobbies-img">
              <img className="hobby-img" src={singing}></img>
              <img className="hobby-img" src={embroidery}></img>
              <img className="hobby-img" src={bindge}></img>
            </div>
          </li>
          <li className="list-item">
            I decided to switch to front-end when the war started, although I
            used to create websites before, at school.
          </li>
          <li className="list-item">
            You can see my first commercial project{" "}
            <a href={websiteLink}>here</a>. It's my choir's website!
          </li>
        </ul>
      </div>
    </main>
  );
}

export default App;
