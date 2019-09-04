import { StyleSheet } from "react-native";
import { Metrics, Colors } from "../../Themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Metrics.navBarHeight,
    flexDirection: "row"
  },
  searchBar: {
    backgroundColor: "white",
    borderRadius: Metrics.baseMargin,
    marginHorizontal: Metrics.smallMargin
  },
  searchContainer: {
    flex: 1,
    flexDirection: "column"
  }
});
