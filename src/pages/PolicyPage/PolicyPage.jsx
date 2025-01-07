import { useState, useEffect } from "react";
import { getData } from "../../services/api";
import s from "./PolicyPage.module.css";
import { Layout } from "../../components/Layout/Layout";

export const PolicyPage = ({ token }) => {
  const [policyContent, setPolicyContent] = useState(null);

  useEffect(() => {
    const fetchPolicyContent = async () => {
      if (!token) return;
      try {
        const data = await getData(token, "wp-json/wp/v2/pages/3");
        setPolicyContent(data);
      } catch (error) {
        console.error("Error fetching policy content:", error);
      }
    };

    fetchPolicyContent();
  }, [token]);

  if (!policyContent) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <Layout className={s.container}>
        <div className={s.content}>
          <h1>{policyContent.title?.rendered}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: policyContent.content?.rendered,
            }}
          />
        </div>
      </Layout>
    </main>
  );
};
