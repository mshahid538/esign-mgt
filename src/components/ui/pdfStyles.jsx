import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    width: "21cm",
    height: "29.7cm",
    padding: "2cm",
    margin: "auto",
    border: "1px #D3D3D3 solid",
    borderRadius: "5px",
    background: "white",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: "1px solid #ccc",
  },
  headingList: {
    margin: 10,
    padding: 10,
    listStyleType: "none",
    width: "100%",
    maxWidth: "600px",
  },
  headingItem: {
    marginBottom: 5,
    padding: 5,
    borderBottom: "1px solid #ccc",
  },
});
