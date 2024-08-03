import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TemplateCards() {
  const templates = [
    { name: "Marketing Doc", image: "1.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "2.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "3.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "4.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "5.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "6.png", user: "Adnan", price: "1,20,000" },
    { name: "Marketing Doc", image: "7.png", user: "Adnan", price: "1,20,000" },
  ];

  return (
    <section className="flex flex-wrap gap-md">
      <Link
        href={"/dashboard/editor"}
        className="p-xs flex flex-col justify-center items-center gap-sm flex-grow w-72 min-h-64 cursor-pointer transition-colors hover:bg-primary/15 bg-primary/10 rounded-lg border-2 border-primary"
      >
        <PlusIcon className="icon my-0" />
        <p className="text-sm font-semibold">Create New Doc</p>
      </Link>
      {templates.map((item, i) => (
        <div className="flex flex-col gap-xs p-xs flex-grow w-72 bg-light rounded-lg" key={i}>
          <Image
            className="rounded-md w-full h-52 object-cover"
            src={"/images/templates/" + item.image}
            width={600}
            height={600}
            alt=""
          />
          <div>
            <span className="flex justify-between">
              <p className="text-sm font-semibold truncate">{item.name}</p>
              <p className="text-xs text-dark/50 truncate">By {item.user}</p>
            </span>
            <p className="text-xs text-dark/50">PKR. {item.price}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
