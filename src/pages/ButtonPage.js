import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("Hallo ");
  };
  return (
    <div>
      <div>
        <Button primary outline rounded onClick={handleClick}>
          <GoBell />
          Click
        </Button>
      </div>
      <div>
        <Button success outline rounded>
          <GoCloudDownload />
          Hai
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Hai
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoBell />
          Hai
        </Button>
      </div>
    </div>
  );
}

export default App;
