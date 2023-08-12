import { SideNav } from ".";
import { ChildrenProps } from "../common";

export const AppLayout = ({ children }: ChildrenProps) => {
  return (
    <main className="flex gap-8">
      <nav className="h-screen">
        <SideNav />
      </nav>
      <section className="w-screen">{children}</section>
    </main>
  );
};
