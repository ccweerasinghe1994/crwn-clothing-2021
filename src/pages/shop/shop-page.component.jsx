import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../../components/collection/collection.component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {
  convertCollectionSnapShotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionOverviewPageWithSpinner = WithSpinner(CollectionOverview);
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapShotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
