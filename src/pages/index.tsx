import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Recoil Pages</h1>
      <div>
        <Link href="/character">Character</Link>
      </div>
      <div>
        <Link href="/todo">Todo</Link>
      </div>
      <div>
        <Link href="/user">User(Async Data Fetching)</Link>
      </div>
      <div>
        <Link href="/post">Post(Async Data Fetching with parameters)</Link>
      </div>
    </>
  );
}
