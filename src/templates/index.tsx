import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import "../index.css";
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'

export const config: TemplateConfig = {
  stream: {
    $id: "menu-item",
    fields: [
      "id",
      "name",
      "slug",
      "c_markdown"
    ],
    filter: {
      entityIds: ["tacos-adobada"],
    },
    localization: {
      locales: ["en"]
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "index.html";
};


export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};


const EntityPage: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { 
    name,
    c_markdown
  } = document;


  return (
    <>
      <main>
        <div className="content space-y-12">
          <h1>Entity Powered Page</h1>
          <div>Entity Name: {name}</div>
         <Markdown rehypePlugins={[rehypeRaw]}>
            {c_markdown.markdown}
          </Markdown>
        </div>
      </main>
    </>
  );
};

export default EntityPage;
