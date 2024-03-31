import Image from 'next/image';
import { ArticleItemProps } from "./ArticleItemProps";
import "./ArticleItem.scss";

export default function ArticleItem(props: ArticleItemProps) {
  let imageUrl = props.imageUrl;
  let imageDescription = props.imageDescription;
  let title = props.title;
  let description = props.description;

  return (
    <>
      <article className="article-item">
        <Image className="article-item__image" src={imageUrl} alt={imageDescription} width={150} height={150}/>
        <div className="article-item__text-section">
          <h2 className="article-item__title">{title}</h2>
          <p className="article-item__description">{description}</p>
        </div>
      </article>
    </>
  );
}
