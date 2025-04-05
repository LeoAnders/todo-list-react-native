import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderColor: '#333333',
    borderWidth: 1,
    paddingHorizontal: 12,
    marginHorizontal: 24,
    height: 64,
  },
  containerDone: {
    backgroundColor: '#262626',
  },
  checkbox: {
    marginRight: 8,
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },
  textDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});

