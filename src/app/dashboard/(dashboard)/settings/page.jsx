"use client";

import Input from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  return (
    <main className="gap-md py-sm px-xs flex flex-col">
      <PersonalInformation />
      <AccountSecurity />
      <TwoFactorAuthentication />
      <Signature />
    </main>
  );
}

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");

  const updateFields = (e) => {};

  return (
    <section className="gap-sm p-sm flex w-full justify-between rounded bg-light max-md:flex-col">
      <CardTitle title={"Personal Information"} description={"Update your personal information"} />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <Image className="h-16 w-16" src={"/images/pfp.png"} width={200} height={200} alt="" />
          <button className="link text-sm text-primary">Upload profile</button>
        </div>

        <div className="gap-md grid grid-cols-2">
          <Input value={firstName} onChange={updateFields} placeholder={"First Name"} />
          <Input value={lastName} onChange={updateFields} placeholder={"Last Name"} />
          <Input className={"col-span-2"} value={title} onChange={updateFields} placeholder={"Title"} />
        </div>
      </div>
    </section>
  );
};

const AccountSecurity = () => {
  const [email, setEmail] = useState("Em********le.com");
  const [password, setPassword] = useState("Some password");

  const updateFields = (e) => {};

  return (
    <section className="gap-sm p-sm flex w-full justify-between rounded bg-light max-md:flex-col">
      <CardTitle title={"Account Security"} description={"Protect your account"} />
      <div className="gap-md grid flex-1">
        <Input disabled type="email" value={email} onChange={updateFields} placeholder={"Email"} />
        <Input disabled type="password" value={password} onChange={updateFields} placeholder={"Password"} />
      </div>
    </section>
  );
};

const TwoFactorAuthentication = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleEnabled = () => {
    setEnabled((prev) => !prev);
  };

  return (
    <section className="gap-sm p-sm flex w-full justify-between rounded bg-light max-md:flex-col">
      <CardTitle
        title={"Enable two factor authentication"}
        description={"To help keep your account safe. enable two factor authentication."}
      />
      <div className="flex flex-1 justify-end">
        <button className="btn-p h-fit bg-primary text-light" onClick={toggleEnabled}>
          {enabled ? "Disable" : "Enable"}
        </button>
      </div>
    </section>
  );
};

const Signature = () => {
  const [signature, setSignature] = useState("");

  const updateFields = (e) => {};

  return (
    <section className="gap-sm p-sm flex w-full justify-between rounded bg-light max-md:flex-col">
      <CardTitle title={"Signature"} description={"Add your signature and Stamp for all proposal. "} />
      <div className="flex flex-1 justify-end">
        <div className="bg-dark/5">
          <nav className="gap-sm flex justify-between border-b-2 border-light">
            <span className="p-xs border-b-2 border-primary text-sm text-primary">Type</span>
            <span className="p-xs text-sm">Draw</span>
            <span className="p-xs text-sm">Upload</span>
          </nav>
          <div className="gap-md p-xs flex min-w-96 justify-between">
            <div className="gap-sm flex flex-1 flex-col justify-between">
              <br />
              <input
                className="rounded-none border-b border-dark/50 bg-transparent px-0 py-2 text-dark/70 outline-none"
                placeholder="Type here"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="h-7 w-7 cursor-pointer rounded-full bg-primary" />
              <div className="h-7 w-7 cursor-pointer rounded-full bg-dark" />
              <div className="h-7 w-7 cursor-pointer rounded-full bg-dark/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CardTitle = ({ title, description }) => {
  return (
    <div className="flex-1">
      <h6 className="pb-1.5 font-normal">{title}</h6>
      <p className="max-w-96 text-wrap text-sm text-dark/50">{description}</p>
    </div>
  );
};
