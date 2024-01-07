import ArticlesList from "@/components/ArticlesList";

async function getData() {
  const req = await fetch("http://localhost:2000/articles");
  const data = await req.json();

  return data;
}
async function Articles() {
  const  articles = await getData();

  return (
    <div>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </div>
  );
}

export default Articles;
