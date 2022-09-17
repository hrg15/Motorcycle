import React from "react";
import HeaderOfPages from "../Layout/HeaderOfPages";
import MainContent from "../Layout/MainContent";
import Navigation from "./Navigation/Navigation";

export default function MainPage() {
  return (
    <div className="min-h-full">
      <Navigation />
      <HeaderOfPages />
      <MainContent />
    </div>
  );
}
