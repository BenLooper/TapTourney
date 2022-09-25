/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function BigButton(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(174,179,183,1)"
      borderRadius="21px"
      padding="8px 16px 8px 16px"
      backgroundColor="rgba(130,0,0,1)"
      {...rest}
      {...getOverrideProps(overrides, "BigButton")}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="TAP"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </Flex>
  );
}
