import Link from "next/link";
import { Loader, Button } from "ui";
export default function Home() {
  return (
    <div>
      <Link href="/itays">{`Itay's profile`}</Link>
      <Button />
    </div>
  );
}
