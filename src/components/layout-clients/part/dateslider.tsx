import React, { useEffect, useRef, useState } from "react";
import "./dateSlider.css";
import Left from "../../../assets/LeftArrow.svg";
import Right from "../../../assets/RightArrow.svg";

interface IDateSlider {
  setDateSelected: any
}

const DateSlider = ({setDateSelected}: IDateSlider) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const generateDates = () => {
    const startDate = new Date("2024-02-01");
    const endDate = new Date("2024-02-28");
    const dates = [];
    for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
      dates.push({
        date: date.toISOString().split("T")[0], // Format date to YYYY-MM-DD
        day: date.toLocaleDateString("id-ID", { weekday: "long" }), // Get full weekday name in Indonesian
      });
    }
    return dates;
  };

  const dates = generateDates();
  const tabsBoxRef = useRef(null); 

  const handleIcons = () => {
    const tabsBox = tabsBoxRef.current;
    const arrowIcons = document.querySelectorAll(".icon i");
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

    arrowIcons[0].parentElement.style.display =
      tabsBox.scrollLeft <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display =
      maxScrollableWidth - tabsBox.scrollLeft <= 1 ? "none" : "flex";
  };
  const selectedDate = dates[activeIndex];

  useEffect(()=>{
    setDateSelected(selectedDate)
  },[])

  const handleTabClick = (index) => {
    setActiveIndex(index);
    setDateSelected(selectedDate)
    const tabsBox = tabsBoxRef.current;
    const tabs = tabsBox.querySelectorAll(".tab");

    tabsBox.querySelector(".active").classList.remove("active");
    tabs[index].classList.add("active");
  };

  const handleArrowClick = (direction) => {
    const tabsBox = tabsBoxRef.current;
    const scrollAmount = direction === "left" ? -340 : 340;
    tabsBox.scrollLeft += scrollAmount;
    handleIcons();
  };

  const handleMouseDown = () => {
    tabsBoxRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    const tabsBox = tabsBoxRef.current;
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
  };

  const handleMouseUp = () => {
    tabsBoxRef.current.classList.remove("dragging");
  };

  return (
    <div className="pt-20 pb-6 px-12">
      <div className="wrapper">
        <div className="icon" onClick={() => handleArrowClick("left")}>
          <img src={Left} alt="Left Arrow" />
        </div>
        <ul
          className="tabs-box"
          ref={tabsBoxRef}
          // onMouseDown={handleMouseDown}
          // onMouseMove={handleMouseMove}
          // onMouseUp={handleMouseUp}
        >
          {dates.map((date, index) => (
            <li
              key={index}
              className={`tab ${index === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              <div>
                <h1>{date.date}</h1>
                <h1>{date.day}</h1>
              </div>
            </li>
          ))}
        </ul>
        <div className="icon" onClick={() => handleArrowClick("right")}>
          <img src={Right} alt="Right Arrow" />
        </div>
      </div>
    </div>
  );
};

export default DateSlider;
