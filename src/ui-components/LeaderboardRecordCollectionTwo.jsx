/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Game } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import LeaderboardRecord from "./LeaderboardRecord";
import { Collection } from "@aws-amplify/ui-react";
export default function LeaderboardRecordCollectionTwo(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Game,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "LeaderboardRecordCollectionTwo")}
    >
      {(item, index) => (
        <LeaderboardRecord
          game={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></LeaderboardRecord>
      )}
    </Collection>
  );
}
