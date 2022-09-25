/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function LeaderboardRecord(props) {
  const { index, game, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      width="500px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="13px 0px 13px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "LeaderboardRecord")}
    >
      <Flex
        gap="5px"
        width="345px"
        height="28px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Frame 4")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="203px"
          height="31px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={game?.preferred_username}
          {...getOverrideProps(overrides, "Username")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="right"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="96px"
          height="31px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={game?.score}
          {...getOverrideProps(overrides, "Score")}
        ></Text>
      </Flex>
    </Flex>
  );
}
