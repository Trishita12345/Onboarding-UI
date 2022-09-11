import Button from "./components/button";
import Flex from "./components/flex";
import Screen2 from "./screens/Screen2";
import LOGO from "./assets/logo.png";
import PROGRESS_BAR from "./assets/progressBar.png";

const buttonLabel1 = "Create Workspace";

function App() {
  return (
    <div className="App">
      <Flex column justifyCenter alignCenter fullHeight gap="55px">
        <img src={LOGO} alt="logo" />
        <img src={PROGRESS_BAR} alt="PROGRESS_BAR" />
        <Flex column alignCenter>
          <Screen2 />
          <Flex column width="62%">
            <Button label={buttonLabel1} handleClick={() => {}} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
