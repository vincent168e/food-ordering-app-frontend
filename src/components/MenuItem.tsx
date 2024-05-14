import { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardOnClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 100);
    addToCart();
  };

  return (
    <Card
      className={`cursor-pointer ${isClicked ? "bg-orange-200" : ""}`}
      onClick={handleCardOnClick}
    >
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ${(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
