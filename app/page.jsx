import HomePage from "@/components/pages";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout pageTitle={"Hi Vedant 👋"}>
      <HomePage />
    </MainLayout>
  );
}
