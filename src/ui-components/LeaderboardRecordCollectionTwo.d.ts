/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { LeaderboardRecordProps } from "./LeaderboardRecord";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type LeaderboardRecordCollectionTwoProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => LeaderboardRecordProps;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function LeaderboardRecordCollectionTwo(props: LeaderboardRecordCollectionTwoProps): React.ReactElement;
