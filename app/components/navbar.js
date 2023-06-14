import Link from "next/link";

export const Navbar = (params) => {
  return (
    <div className="flex justify-around p-5 items-space bg-slate-400">
      <p>Logo</p>
      <Link href="/">Hjem</Link>

      {Object.values(params).map((item) => {
        return item.map((item) => {
          return (
            <Link key={item._id} href={`/pages/${item.slug}`}>
              {item.name}
            </Link>
          );
        });
      })}
    </div>
  );
};
