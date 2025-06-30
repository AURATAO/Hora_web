import { Camera } from "lucide-react";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-50">Home Page</h1>
      <p>This is the homepage with 5 sections.</p>
      <Camera color="red" size={48} />
    </div>
  );
}