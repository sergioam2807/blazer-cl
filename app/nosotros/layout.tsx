export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col  justify-center gap-4 py-8">
      <div className="px-8">{children}</div>
    </section>
  );
}
