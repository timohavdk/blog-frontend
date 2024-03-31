import BaseHeader from "./ui/BaseHeader/BaseHeader";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="main__header">
        <BaseHeader />
      </div>
      <main className="main">
        <div className="main__wrapper">{children}</div>
      </main>
    </>
  );
}
