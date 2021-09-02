import React from "react";
import CollectioPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selector";

const ShopPage = ({ collections }) => (
  <div className="shop page">
    {collections.map(({ id, ...otherProps }) => (
      <CollectioPreview key={id} {...otherProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});
export default connect(mapStateToProps)(ShopPage);
