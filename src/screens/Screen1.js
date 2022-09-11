import React from "react";
import { C_LABEL_VARIANTS } from "../common/constants";
import Flex from "../components/flex";
import Label from "../components/label";
import TextInput from "../components/textInput";

const heading = "Welcome! First things first...";
const subHeading = "You can always change them later.";
const fieldLabel1 = "Full Name";
const fieldLabel2 = "Display Name";
const Screen1 = () => {
  return (
    <Flex column alignCenter gap="60px">
      <Flex column alignCenter>
        <Label variant={C_LABEL_VARIANTS.HEADING} label={heading}></Label>
        <Label variant={C_LABEL_VARIANTS.SECONDARY} label={subHeading}></Label>
      </Flex>
      <Flex column width="60%">
        <Label variant={C_LABEL_VARIANTS.PRIMARY} label={fieldLabel1}></Label>
        <TextInput />
        <Flex>
          <Label variant={C_LABEL_VARIANTS.PRIMARY} label={fieldLabel2}></Label>
        </Flex>
        <TextInput />
      </Flex>
    </Flex>
  );
};

export default Screen1;
