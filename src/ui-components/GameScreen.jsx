/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function GameScreen(props) {
  const { timerSlot, score, homeButtonSlot, overrides, ...rest } = props;
  return (
    <Flex
      gap="26px"
      direction="column"
      height="950px"
      alignItems="center"
      position="relative"
      padding="9px 90px 9px 90px"
      backgroundColor="rgba(0,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "GameScreen")}
    >
      <View
        width="482px"
        height="88px"
        shrink="0"
        overflow="hidden"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        children={timerSlot}
        {...getOverrideProps(overrides, "TimerSlot")}
      ></View>
      <Heading
        display="flex"
        gap="0"
        width="fit-content"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="2"
        children={score}
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Button
        display="flex"
        gap="0"
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="41px"
        padding="8px 16px 8px 16px"
        backgroundColor="rgba(135,0,0,1)"
        size="large"
        isDisabled={false}
        variation="default"
        children="TAP"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Flex
        gap="10px"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(0,0,0,1)"
        children={homeButtonSlot}
        {...getOverrideProps(overrides, "HomeButtonSlot")}
      ></Flex>
    </Flex>
  );
}
