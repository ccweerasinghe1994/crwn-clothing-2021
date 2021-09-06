import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import collectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionOverview);

export default CollectionOverviewContainer;
