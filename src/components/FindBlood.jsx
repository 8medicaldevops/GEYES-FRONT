import { useState } from 'react'
import Navbar from './Navbar'
import MedicationCard from './MedicationCard'
import PharmacyCartPanel from './PharmacyCartPanel'
import { SearchIcon, ArrowLeftIcon } from './ui/icons'

const PRODUCTS = [
  { id: 'p1', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p2', name: 'Nitroglycerin', price: 12300 },
  { id: 'p3', name: 'Adrenaline', price: 10000 },
  { id: 'p4', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p5', name: 'Adrenaline', price: 10000 },
  { id: 'p6', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p7', name: 'Nitroglycerin', price: 12300 },
  { id: 'p8', name: 'Adrenaline', price: 10000 },
  { id: 'p9', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p10', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p11', name: 'Panadol 500mg * 1 strips', price: 18000 },
  { id: 'p12', name: 'Panadol 500mg * 1 strips', price: 18000 },
]

export default function FindBlood({ onBack }) {
  // Cart as a map of productId -> quantity. Seeded to match the design.
  const [cart, setCart] = useState({ p2: 1, p3: 2 })

  const setQty = (id, delta) =>
    setCart((prev) => {
      const next = { ...prev }
      const qty = (next[id] || 0) + delta
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })

  const add = (id) => setQty(id, 1)
  const increment = (id) => setQty(id, 1)
  const decrement = (id) => setQty(id, -1)
  const remove = (id) =>
    setCart((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  const clear = () => setCart({})

  const cartItems = PRODUCTS.filter((p) => cart[p.id]).map((p) => ({
    ...p,
    quantity: cart[p.id],
  }))

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <div className="mx-auto w-full max-w-[1440px] px-6 py-9 md:px-16">
        {/* Go back + search */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1 text-base font-medium tracking-tightest text-ink-900 transition-colors hover:text-violet-700"
          >
            <ArrowLeftIcon className="size-4" />
            Go Back
          </button>

          <div className="flex w-full items-center gap-3 rounded-lg border border-ink-200 px-3 py-2 md:w-[301px]">
            <SearchIcon className="size-5 shrink-0 text-ink-500" />
            <input
              placeholder="Search pharmacy"
              className="w-full bg-transparent text-sm tracking-tightest text-ink-900 outline-none placeholder:text-ink-500"
            />
          </div>
        </div>

        {/* Two columns */}
        <div className="mt-8 flex flex-col gap-6 lg:flex-row">
          {/* Left: product grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {PRODUCTS.map((product) => (
                <MedicationCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  quantity={cart[product.id] || 0}
                  onAdd={() => add(product.id)}
                  onIncrement={() => increment(product.id)}
                  onDecrement={() => decrement(product.id)}
                />
              ))}
            </div>
          </div>

          {/* Right: pharmacy + cart */}
          <div className="w-full lg:w-[320px] lg:shrink-0">
            <PharmacyCartPanel
              cart={cartItems}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={remove}
              onClear={clear}
              onOrder={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
