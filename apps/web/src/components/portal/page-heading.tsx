type PageHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: React.ReactNode;
};

export function PageHeading({ eyebrow, title, description, action }: PageHeadingProps) {
  return (
    <header className="app-page-heading">
      <div>{eyebrow ? <p className="app-eyebrow">{eyebrow}</p> : null}<h1>{title}</h1><p>{description}</p></div>
      {action ? <div className="app-page-heading__action">{action}</div> : null}
    </header>
  );
}
