import React from "react";
import { useParams } from "react-router-dom";

type RouteParams = {
  id: string;
};

export function ProductPage() {
  const { id } = useParams<RouteParams>();

  return (
    <div>
      <div>Product Id: {id}</div>
    </div>
  );
}
