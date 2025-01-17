"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function EditorCanvas() {
  return (
    <section className="flex-1">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #3</Text>
          </View>
        </Page>
      </Document>
    </section>
  );
}
