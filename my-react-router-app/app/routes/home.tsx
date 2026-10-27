import type { Route } from "./+types/home";
import  Welcome from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "News React Router App" },
    { name: "description", content: "Welcome to website" },
  ];
}

export default function Home() {
  return <Welcome />;
}
