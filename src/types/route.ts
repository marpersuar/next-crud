export interface Route {
  path: string;
  icon: JSX.Element;
  title: string;
  children?: Route[];
}
