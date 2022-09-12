import React, { useState } from "react";
import { C_LABEL_VARIANTS } from "../common/constants";
import Card from "../components/card";
import Flex from "../components/flex";
import Label from "../components/label";

const heading = "How are you planning to use Eden?";
const subHeading = "We'll streamline your setup experience accordingly.";
const cardHeading1 = "For myself";
const cardSubHeading1 = "Write better. Think more clearly. Stay organized.";
const cardHeading2 = "With my team";
const cardSubHeading2 = "Wikis, docs, tasks & projects, all in one place.";
const Screen3 = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Flex column alignCenter gap="40px">
      <Flex column alignCenter>
        <Label variant={C_LABEL_VARIANTS.HEADING} label={heading}></Label>
        <Label variant={C_LABEL_VARIANTS.SECONDARY} label={subHeading}></Label>
      </Flex>
      <Flex justifyBetween width="60%" gap="30px">
        <Card
          userType={"individual"}
          heading={cardHeading1}
          subHeading={cardSubHeading1}
          isSelected={selected === 1}
          onClick={() => setSelected(() => 1)}
        />
        <Card
          userType={"group"}
          heading={cardHeading2}
          subHeading={cardSubHeading2}
          isSelected={selected === 2}
          onClick={() => setSelected(() => 2)}
        />
      </Flex>
    </Flex>
  );
};

export default Screen3;
