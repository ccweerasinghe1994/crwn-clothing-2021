import React, { useContext } from "react";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collections-overview.styles.scss";
import CollectionContext from "../../contexts/collection/collections.context";

const CollectionsOverview = () => {
  const collectionsObject = useContext(CollectionContext);
  const collections = Object.keys(collectionsObject).map(
    (key) => collectionsObject[key]
  );

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
