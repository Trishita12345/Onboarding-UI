import React from "react";
import { C_LABEL_VARIANTS } from "../common/constants";
import Flex from "../components/flex";
import Label from "../components/label";
import TextInput from "../components/textInput";

const heading = "Let's set up a home for all your work";
const subHeading = "You can always create another workspace later.";
const fieldLabel1 = "Workspace Name";
const fieldLabel2 = "Workspace URL";
const fieldLabeOptional = "(optional)";
const prefixLabel = "www.eden.com/";
const ScreenTwo = () => {
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
          <Label
            variant={C_LABEL_VARIANTS.TERTIARY}
            label={fieldLabeOptional}
          ></Label>
        </Flex>
        <TextInput
          prefix
          prefixLabel={prefixLabel}
          placeholderText={"Example"}
        />
      </Flex>
    </Flex>
  );
};

export default ScreenTwo;
