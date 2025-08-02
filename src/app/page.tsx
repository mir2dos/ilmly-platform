import { BookMarked, GraduationCap, ShieldCheck } from "lucide-react";
import Link from "next/link";

const DASHBOARD_OPTIONS = [
  {
    url: "/admin",
    icon: <ShieldCheck size={32} />,
    name: "Admin",
    color: "blue",
  },
  {
    url: "/teacher",
    icon: <BookMarked size={32} />,
    name: "Teacher",
    color: "yellow",
  },
  {
    url: "/student",
    icon: <GraduationCap size={32} />,
    name: "Student",
    color: "green",
  },
];

const Home = () => {
  return (
    <div className="grid min-h-screen place-content-center gap-8">
      <h1 className="text-5xl font-semibold text-center">Join as a</h1>
      <ul className="flex flex-wrap gap-8">
        {DASHBOARD_OPTIONS.map((option) => (
          <li key={option.name}>
            <Link
              href={option.url}
              className={`grid gap-4 text-2xl font-semibold justify-items-center rounded-lg border-2 border-${option.color}-400 py-4 px-8 bg-${option.color}-50 w-fit hover:bg-${option.color}-100`}
            >
              {option.icon}
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
