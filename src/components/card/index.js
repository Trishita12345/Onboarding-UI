import React from "react";
import StyledCard from "./StyledCard";
import { RiUserFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

import Label from "../label";
import { C_LABEL_VARIANTS } from "../../common/constants";
import Flex from "../flex";

const Card = ({ heading, subHeading, userType }) => {
  return (
    <StyledCard>
      <Flex column gap={"20px"}>
        {userType == "individual" ? (
          <RiUserFill size={"1.2vw"} />
        ) : (
          <HiUserGroup size={"1.2vw"} />
        )}
        <Flex column gap={"10px"}>
          <Label
            variant={C_LABEL_VARIANTS.PRIMARY}
            label={heading}
            size={"0.9vw"}
          />
          <Label
            variant={C_LABEL_VARIANTS.SECONDARY}
            label={subHeading}
            size={"0.8vw"}
          />
        </Flex>
      </Flex>
    </StyledCard>
  );
};

export default Card;
