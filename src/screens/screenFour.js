import React from "react";
import { C_LABEL_VARIANTS } from "../common/constants";
import Flex from "../components/flex";
import Label from "../components/label";
import { HiCheckCircle } from "react-icons/hi";

const heading = "Congratulations, Eren!";
const subHeading =
  "You have completed onboarding, you can start using the Eden!";
const ScreenFour = () => {
  return (
    <Flex column alignCenter gap="20px">
      <Flex column alignCenter gap="40px">
        <Flex column alignCenter>
          <HiCheckCircle color="var(--violet)" size={"4vw"} strokeWidth={1} />
        </Flex>
        <Flex column alignCenter>
          <Label variant={C_LABEL_VARIANTS.HEADING} label={heading}></Label>
          <Label
            variant={C_LABEL_VARIANTS.SECONDARY}
            label={subHeading}
          ></Label>
        </Flex>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default ScreenFour;
