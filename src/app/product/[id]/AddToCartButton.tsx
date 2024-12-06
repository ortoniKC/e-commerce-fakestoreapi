'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function AddToCartButton({ product }: { product: any }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    // In a real application, you would add the product to the cart here
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Button
      onClick={handleAddToCart}
      className={`w-full ${isAdded ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
    >
      {isAdded ? 'Added to Cart!' : 'Add to Cart'}
    </Button>
  )
}

