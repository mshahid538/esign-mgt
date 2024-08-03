import Link from "next/link";

export default function LoginForm() {
  return (
    <form>
      <input placeholder="name" />
      <input placeholder="email" />
      <button className="btn-p" type="submit">
        Login
      </button>
      <p>
        Don't have an account{" "}
        <Link className="link" href={"/signup"}>
          signup
        </Link>
      </p>
    </form>
  );
}
