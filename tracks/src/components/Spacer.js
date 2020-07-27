import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = ({ children }) => {
	return <View style={styles.view}>{children}</View>
}
const styles = StyleSheet.create({
	view: {
		margin: 15
	}
});
export default Spacer;