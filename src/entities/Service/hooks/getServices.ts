import { useState } from "react";
import { Heart } from "@/shared/Heart";
import { Tonometer } from "@/shared/Tonometer";
import { Document } from "@/shared/Document";

export const getServices = () => {
  return useState([
    { Icon: Heart, title: "Онлайн-прием" },
    { Icon: Tonometer, title: "Экстренный Случай" },
    { Icon: Document, title: "Лечение рака" },
  ]);
};
