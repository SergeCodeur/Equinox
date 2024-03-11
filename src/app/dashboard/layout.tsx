import Sidebar from "@/components/dashboard/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      <section className="flex-1">{children}</section>
    </div>
  );
}
