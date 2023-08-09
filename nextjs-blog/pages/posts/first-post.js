import Link from "next/link";


export default function FirstPost(){
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">back to the main page</Link>
      </h2>
    </>

  );
}