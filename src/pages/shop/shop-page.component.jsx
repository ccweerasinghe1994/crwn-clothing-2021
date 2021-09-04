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
class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapShotToMap(snapshot);
      updateCollections(collectionMap);
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
