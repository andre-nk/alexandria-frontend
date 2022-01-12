import { useAuthContext } from "../hooks/useAuthContext"

export default function Home() {
  const { user } = useAuthContext();

  return (
    <div className="text-xl text-red-400">
      <p>Woi</p>
    </div>
  )
}
