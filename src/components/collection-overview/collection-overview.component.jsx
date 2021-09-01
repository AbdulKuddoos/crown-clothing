import React from "react";
import "./collection-overview.styles.scss";

import CollectionPreview from "../../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

const collectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(collectionOverview);
