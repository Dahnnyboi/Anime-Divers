import React from "react";
import { CenterLayout } from "components/Layouts";
import { useParams } from "react-router-dom";
import useGetSingleAnime from "./useGetSingleAnime";

function Index(): JSX.Element {
  const { animeId } = useParams<Any>();
  const { anime, isLoading } = useGetSingleAnime(animeId);
  console.log(anime, isLoading);

  return <CenterLayout>anime id</CenterLayout>;
}

export default Index;
