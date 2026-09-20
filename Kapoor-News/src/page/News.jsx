import { useEffect } from "react";
import Wraper from "../component/Wraper";
import { useNewsContext } from "../context/NewsContext";

const News = ({ className }) => {
  const { news, setNews, fetchNews } = useNewsContext();

  // load data on initial render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  return (
    <Wraper>
      <div className={`grid grid-cols-4 gap-8 ${className}`}>
        {news.map((newsDetails, idx) => {
          if (!newsDetails.urlToImage) {
            return null;
          }

          return <NewsCard key={idx} details={newsDetails} />;
        })}
      </div>
    </Wraper>
  );
};

const NewsCard = ({ details }) => {
  return (
    <div className="card bg-base-300  shadow-sm">
      <figure>
        <img
          className="aspect-video object-contain w-full"
          src={details?.urlToImage}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{details?.title}</h2>
        <p className="line-clamp-3">{details.description}</p>
        <div
          onClick={() => window.open(details.url)}
          className="card-actions justify-end"
        >
          <button className="btn btn-dash mt-4">Read More..</button>
        </div>
      </div>
    </div>
  );
};

export default News;
