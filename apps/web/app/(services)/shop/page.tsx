import { Metadata } from "next";
import { Navbar } from "app/(landing)/_components/Navbar";

export const metadata: Metadata = {
  title: "Shop",
};

export default function Shop() {
  return (
    <>
      <Navbar />
    </>
  );
}
