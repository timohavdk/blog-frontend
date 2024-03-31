import { useState } from "react";
import ArticleItem from "./ui/ArticleItem/ArticleItem";
import BaseInput from "./ui/BaseInput/BaseInput";
import article from "@/app/mock/articles.json";
import "./page.scss";

export default function Home() {
  const [articleCount, setArticleCount] = useState('2');

  

  let articlesList = article.map((artilcle, index) => {
    return (
      <div key={index} className="home__article">
        <ArticleItem {...artilcle} />
      </div>
    );
  });
  return (
    <>
      <BaseInput />
      {articlesList}
    </>
  );
}
