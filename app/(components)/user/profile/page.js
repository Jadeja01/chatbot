"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(false);
  const profileRef = useRef(null);
  const Profile = session?.user;
  console.log("profile", profile);

  useEffect(() => {
    console.log("profileRef", profileRef);
    console.log("profileRef.current", profileRef.current);
    console.log("profileRef.current?.contains", profileRef.current?.contains);

    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfile(false);
      }
    }

    if (profile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profile]); // ✅ Fixed dependency

  return (
    <div>
      <Image
        style={{ cursor: "pointer" }}
        onClick={() => setProfile((prev) => !prev)}
        src={`${Profile?.image}`}
        alt="profile"
        width={40}
        height={40}
        className="rounded-circle"
      />
      {profile && (
        <div
          ref={profileRef}
          className="absolute top-10 right-10 bg-white p-4 rounded-md shadow"
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            backgroundColor: "white",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            borderRadius: "5px",
            zIndex: 1000,
          }}
        >
          <div>
            <p>Name: {Profile?.name}</p>
            <p>Email: {Profile?.email}</p>
          </div>
          <button onClick={() => signOut()} className="btn btn-primary">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
