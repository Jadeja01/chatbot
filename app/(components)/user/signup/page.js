"use client";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Signup() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect to home page if already logged in
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="d-flex m-3 justify-content-center align-items-center flex-wrap">
      <div className="col-12 d-flex justify-content-center align-items-center flex-column">
        <Link href="/" className="btn btn-secondary mb-4">
          Go back
        </Link>
      </div>
      <div className="card p-3" style={{ width: "20rem" }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="line"></div>
          <p className="mx-2" style={{ fontWeight: "bold" }}>
            Or
          </p>
          <div className="line"></div>
        </div>
        <button
          className="d-flex justify-content-center align-items-center btn btn-light w-100 mt-2"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          <Image src="/images/github.svg" alt="github" width={20} height={20} />
          <p style={{ margin: "0 0 0 5px" }}>Signup with Github</p>
        </button>
        <button
          className="d-flex justify-content-center align-items-center btn btn-light w-100 mt-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src="/images/google-color (1).svg" alt="google" width={20} height={20} />
          <p style={{ margin: "0 0 0 5px" }}>Signup with Google</p>
        </button>
      </div>
    </div>
  );
}