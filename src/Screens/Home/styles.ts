import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#0D0D0D',
    height: 173,
    width: '100%',
  },
  logo: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 24,
    paddingHorizontal: 24,
    marginTop: -62,
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    color: '#FFF',
    padding: 12,
    height: 54,
    borderRadius: 6,
    marginRight: 8,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    padding: 12,
    height: 54,
    width: 54,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
  counterContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  created: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 16,
  },
  done: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 16,
  },
  counter: {
    color: '#FFF',
    paddingHorizontal: 8,
    borderRadius: 999,
    marginLeft: 4,
  },
  divider: {
    height: 2,
    backgroundColor: '#333333',
    marginVertical: 16,
    marginHorizontal: 24,
  },
  emptyList: {
    alignItems: 'center',
    marginTop: 48,
  },
  clipboard: {
    width: 56,
    height: 56,
    marginBottom: 16,
    tintColor: '#808080',
  },
  emptyTextBold: {
    color: '#808080',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  emptyText: {
    color: '#808080',
    textAlign: 'center',
  },
});
