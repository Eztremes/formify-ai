import QuickActions from "./QuickActions";

export default function WelcomeHeader() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Workspace
        </p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          Welcome back
        </h1>

        <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Create, edit, and understand your documents from one intelligent
          workspace.
        </p>
      </div>

      <QuickActions />
    </div>
  );
}