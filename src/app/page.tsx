import Link from "next/link";

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/auth/signup">Sign Up</Link>
        </li>
        <li>
          <Link href="/auth/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
