import { useGlobal } from "../../context/GlobalContext";
export default function Footer() {
  const { user } = useGlobal();
  return (
    user && (
      <footer className="py-3 my-4">
        <p className="text-center text-muted">© 2025 Pets dashboard</p>
      </footer>
    )
  );
}
