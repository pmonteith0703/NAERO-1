import Layout from "@/components/layouts/Layout";
import { useState } from "react";

export default function NewCommitmentPage() {
  const [title, setTitle] = useState("New Commitment");

  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <Layout
      title={title}
      drawBackBtn
      saveTitle={handleTitleChange}
      recordName="New"
      sectionName="Commitment"
    >
      WORK IN PROGRESS
    </Layout>
  );
}