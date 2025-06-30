import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="bg-primary text-accent">Home Page</h1>
      <p>This is the homepage with 5 sections.</p>
      <Camera color="blue" size={48} />
    </div>
  );
}