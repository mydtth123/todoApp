import React from "react";
import { View, FlatList, TextInput ,Text} from "react-native";
import { styles } from "../Styles/HomeStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class HomeComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBar}>
        <Text >
          Take a look at the code structure.
        </Text>
        </View>
      </View>
    );
  }
}
