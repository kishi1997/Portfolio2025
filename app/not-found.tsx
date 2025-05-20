import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex gap-8 flex-col justify-center items-center">
      <h2 className="text-9xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Back Home</Link>
      </p>
    </div>
  );
}
