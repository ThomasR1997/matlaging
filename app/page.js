import { client } from "./lib/sanity";

export default async function Home() {
  // const data = await getData();
  // console.log(data);
  return (
    <div className="flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold">Ole's matlaging</h1>
      <main>
        {/* <p>Jeg liker å lage pannekaker, taco og eplepai</p>
        {data && data.length > 0 && (
          <ul>
            {data.map((item) => (
              <li key={item._id}>{item?.name}</li>
            ))}
          </ul>
        )}
        {data && !data.length > 0 && <p>Ingen matretter</p>} */}
        {/* {data && data.length > 0 && (
          <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
        {data && !data.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )} */}
      </main>
    </div>
  );
}

// export async function getData() {
//   return client.fetch(`*[_type == "matrett"]`);
// }
