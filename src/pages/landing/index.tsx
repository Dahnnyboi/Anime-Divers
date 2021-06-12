import React, { useEffect } from "react";
import { useAppDispatch } from "redux/hooks";
import { requestAnime } from "redux/root.actions";

function Index(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestAnime());
  }, [dispatch]);

  return <div>Landing Page</div>;
}

export default Index;
