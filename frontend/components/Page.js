import Header from './Header';

export default function Page({ children }) {
  return (
    <div>
      <Header></Header>
      <h2>I am the Page component</h2>
      {children}
    </div>
  );
}
