import { productBlood } from '../assets'
import QuantityStepper from './ui/QuantityStepper'

const formatNaira = (amount) => `NGN ${amount.toLocaleString('en-US')}`

export default function MedicationCard({
  name,
  price,
  quantity = 0,
  onAdd,
  onIncrement,
  onDecrement,
  image = productBlood,
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-martinique-100 bg-martinique-50 px-4 pb-6 pt-4">
      <img src={image} alt="" className="size-12 object-contain" />

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold leading-tight tracking-tightest text-ink-900">
          {name}
        </h3>
        <p className="text-base font-semibold tracking-tightest text-ink-900">
          {formatNaira(price)}
        </p>

        {quantity > 0 ? (
          <QuantityStepper
            value={quantity}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ) : (
          <button
            type="button"
            onClick={onAdd}
            className="w-fit rounded-[63px] border border-violet-700 px-2 py-1 text-sm tracking-tightest text-violet-700 transition-colors hover:bg-violet-700 hover:text-white"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  )
}
