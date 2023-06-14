import { getData } from "../../lib/sanity";
import Image from "next/image";

export default async function Page({ params }) {
  const data = await getData(params.slug);

  return (
    <div>
      <h1>{data?.name}</h1>
      <h2>Ingredienser:</h2>
      <ul>
        {Object.values(data.ingredients)?.map((item) => {
          return item.children.map((item, index) => {
            return <li key={index}>{item.text}</li>;
          });
        })}
      </ul>
      <Image src={data.image} width={300} height={300} alt={data.name} />

      <h2>Fremgangsmåte:</h2>
      <ol>
        {Object.values(data.steps)?.map((item) => {
          return item.children.map((item, index) => {
            return <li key={index}>{item.text}</li>;
          });
        })}
      </ol>
    </div>
  );
}
