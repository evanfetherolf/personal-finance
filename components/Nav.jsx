import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Overview</Link>
        </li>
        <li>
          <Link href="/">Budgets</Link>
        </li>
        <li>
          <Link href="/">Trends</Link>
        </li>
        <li>
          <Link href="/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
