import { Overview } from '@/api/models/item'

const Description = (props: { overview: Overview }) => {
  return (
    <div>
      <h1>{props.overview.item_id}</h1>
      <p>{props.overview.properties.details.description}</p>
    </div>
  )
}
export default Description
