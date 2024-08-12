import { Spinner } from "@material-tailwind/react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Spinner color="red" className="h-16 w-16 text-gray-900/50" />
    </div>
  );
}
