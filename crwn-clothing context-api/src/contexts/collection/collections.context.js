import { createContext } from "react";
import SHOP_DATA from "./shop.data";

const CollectionContext = createContext(SHOP_DATA);

const CollectionPreviewContext = createContext()

export default CollectionContext;

