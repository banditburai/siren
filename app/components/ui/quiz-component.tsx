"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import "./quiz-component.css";

export const QuizComponent = ({
  question,
  options,
  gridColumns = 1,
  imageScale = 1,   
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      const numberPressed = event.key;
      if (numberPressed >= "1" && numberPressed <= options.length.toString()) {
        const optionIndex = parseInt(numberPressed, 10) - 1;
        const element = document.getElementById(`option-${optionIndex}`);
        if (element) {
          element.click();
        }
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [options.length]);

  const containerStyle = {
    maxWidth: `${imageScale * 100}vw`, // Use viewport width to scale the size of the component
    margin: 'auto',
  };

  const defaultGridClass = `grid-cols-${gridColumns}`;

  return (
    <div className="quiz-form" style={containerStyle}>
      <fieldset className="quiz-fieldset">
        <legend className="quiz-legend">{question}</legend>
        <div className={`quiz-options-container ${defaultGridClass}`}>
          {options.map((option, index) => (
            <Card key={index} className="quiz-option-card">
              <Link href={`#${option.path}`} scroll={true} id={`option-${index}`}>
                <CardContent className={`quiz-option-content ${!option.imageUrl ? 'no-image' : ''}`}>
                  {option.imageUrl && (
                    <img
                      src={option.imageUrl}
                      alt={option.label}
                      className="quiz-option-image"
                    />
                  )}
                  <span className={`quiz-option-text ${option.imageUrl ? 'with-image' : 'without-image'}`}>
                    {option.label}
                  </span>
                  <span className="quiz-option-shortcut">{index + 1}</span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </fieldset>
    </div>
  );
};