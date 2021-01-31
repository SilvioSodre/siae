import db from '../db.json'
import Titulo from '../src/components/Titulo'

export default function Home() {
  return (
    <Titulo>{db.title}</Titulo>
  )
}
