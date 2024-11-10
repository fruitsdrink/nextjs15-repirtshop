type Props = {
  children: React.ReactNode;
};
export default function Template({ children }: Props) {
  return <div className="animate-appear">{children}</div>;
}
