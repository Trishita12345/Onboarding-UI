import Button from "./components/button";
import Flex from "./components/flex";
import ScreenOne from "./screens/screenOne";
import ScreenTwo from "./screens/screenTwo";
import ScreenThree from "./screens/screenThree";
import ScreenFour from "./screens/screenFour";
import LOGO from "./assets/logo.png";
import { useState } from "react";
import ProgressBar from "./components/progressBar";

const buttonLabel1 = "Create Workspace";

function App() {
  const [currScreen, setCurrScreen] = useState(0);
  const screens = [<Screen1 />, <ScreenTwo />, <ScreenThree />, <ScreenFour />];
  const handleButtonClick = () => {
    if (currScreen < 3) {
      setCurrScreen(() => currScreen + 1);
    } else {
      setCurrScreen(() => 0);
    }
  };

  return (
    // <MyContext.Provider value={{ currScreen, setCurrScreen }}>
    <div className="App">
      <Flex column justifyCenter alignCenter fullHeight gap="55px">
        <img src={LOGO} alt="logo" />
        {/* <img src={PROGRESS_BAR} alt="PROGRESS_BAR" /> */}
        <ProgressBar currScreen={currScreen} />
        <Flex column alignCenter gap="25px">
          {screens[currScreen]}
          <Flex column width="60%">
            <Button label={buttonLabel1} handleClick={handleButtonClick} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
}

export default App;
