import ArticleItem from "./ui/ArticleItem/ArticleItem";
import articles from "@/app/mock/articles.json";
import "./page.scss";

export default function Home() {
  let articlesList = articles.map((artilcle, index) => {
    return (
      <div key={index} className="home__article">
        <ArticleItem {...artilcle} />
      </div>
    );
  });
  return <>{articlesList}</>;
}
