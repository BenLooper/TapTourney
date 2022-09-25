/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SortDirection } from "@aws-amplify/datastore";
import { Game } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import LeaderboardRecord from "./LeaderboardRecord";
import { Collection } from "@aws-amplify/ui-react";
export default function LeaderboardRecordCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.score(SortDirection.DESCENDING) };
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Game,
    pagination: itemsPagination,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      isPaginated={true}
      searchPlaceholder="Search..."
      direction="column"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "LeaderboardRecordCollection")}
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
