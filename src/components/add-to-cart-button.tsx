"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "../payload-types";

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSuccess]);

  const onAddToCart = () => {
    addItem(product);
    setIsSuccess(true);
  };

  return (
    <Button onClick={onAddToCart} size="lg" className="w-full">
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
};