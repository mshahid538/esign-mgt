"use client";

import React, { useState, useEffect } from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
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

const MyDocument = ({ headings }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {headings.map((heading, index) => (
        <View style={styles.section} key={index}>
          <Text>{heading}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const App = () => {
  const [isClient, setIsClient] = useState(false);
  const [headings, setHeadings] = useState(["Section #1", "Section #2"]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const addHeading = () => {
    const newHeading = prompt("Enter the heading:");
    if (newHeading) {
      setHeadings([...headings, newHeading]);
    }
  };

  if (!isClient) {
    return <section className="flex-1"></section>;
  }

  return (
    <section className="flex-1">
      <div>
        <button className="btn-p" onClick={addHeading}>
          Add Heading
        </button>
        <ul style={styles.headingList}>
          {headings.map((heading, index) => (
            <li key={index} style={styles.headingItem}>
              {heading}
            </li>
          ))}
        </ul>
        <div className="btn-p">
          <PDFDownloadLink document={<MyDocument headings={headings} />} fileName="example.pdf">
            {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
          </PDFDownloadLink>
        </div>
      </div>
    </section>
  );
};

export default App;
