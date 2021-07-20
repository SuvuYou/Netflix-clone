import React from "react";
import { useContent } from "../hooks";
import SelectionFilter from "../Utils/selection-filter";
import BrowseContainer from "../containers/browseContainer";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const contentMap = SelectionFilter({ series, films });
  console.log(contentMap);
  return (
    <>
      <BrowseContainer slides={contentMap}></BrowseContainer>
    </>
  );
}
