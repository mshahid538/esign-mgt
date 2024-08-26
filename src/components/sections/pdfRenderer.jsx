"use client";

import { PDFDownloadLink, Document, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "@/components/ui/pdfStyles";
import { useEffect, useState } from "react";

export default function PdfRenderer({ headings }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
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
}

const PdfDownloadBtn = () => {
  <div className="btn-p">
    <PDFDownloadLink document={<MyDocument headings={headings} />} fileName="example.pdf">
      {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
    </PDFDownloadLink>
  </div>;
};
