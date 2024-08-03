import Link from "next/link";

export default function SignupForm() {
  return (
    <form>
      <input placeholder="name" />
      <input placeholder="email" />
      <input placeholder="password" />
      <button className="btn-p" type="submit">
        Signup
      </button>
      <p>
        Already have an account{" "}
        <Link className="link" href={"/login"}>
          login
        </Link>
      </p>
    </form>
  );
}
