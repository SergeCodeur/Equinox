export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="overflow-y-scroll h-full">{children}</section>;
}
