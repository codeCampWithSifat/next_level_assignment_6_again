import RootLayout from "@/Components/Layout/RootLayout";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-red-900">Hello Developer Sifat </h1>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
