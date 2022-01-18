import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({pathname, title}) {
  const router = useRouter();

  return (
    <Link href={pathname}>
      <p
        className={
          `text-md cursor-pointer ` +
          (router.pathname == pathname ? `font-medium` : `font-normal`)
        }
      >
        {title}
      </p>
    </Link>
  );
}
