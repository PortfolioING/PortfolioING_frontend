import React, { useState, useRef, useEffect } from "react";
import {
  SideStyleBarWrapper,
  Header,
  StyleWrapper,
  StyleTitle,
  FontStyleWrapper,
  DropDownWrapper,
  DropDownHeader,
  DropDownList,
  DropDownItem,
  ButtonWrapper,
  StyleMain,
  TextToolBar,
  DropDownBtn,
  TextImg,
} from "./SideStyleBar.styles";
import Button from "../Button/Button";
import centerSort from "../../asset/icons/SideStyleBar/centerSort.svg";
import leftSort from "../../asset/icons/SideStyleBar/leftSort.svg";
import rightSort from "../../asset/icons/SideStyleBar/rightSort.svg";
import boldBtn from "../../asset/icons/SideStyleBar/boldBtn.svg";
import underLineBtn from "../../asset/icons/SideStyleBar/underLineBtn.svg";
import italicBtn from "../../asset/icons/SideStyleBar/italicBtn.svg";
import selectBtn from "../../asset/icons/SideStyleBar/selectBtn.svg";

const COLORS = ["#FFFFFF", "#E4FF0D", "#000000"];
const FONT_WEIGHTS = ["400", "500", "600", "700", "800"];
const FONT_SIZES = ["12px", "14px", "16px", "18px", "20px"];

const SideStyleBar = () => {
  return (
    <div style={{ height: "100vh" }}>
      <SideStyleBarWrapper>
        <Header>Design</Header>
        <StyleMain>
          <StyleWrapper>
            <StyleTitle>Font</StyleTitle>
            <FontStyleWrapper>
              <DropDown options={FONT_WEIGHTS} defaultText="폰트 굵기" />
              <DropDown options={FONT_SIZES} defaultText="폰트 크기" />
            </FontStyleWrapper>
            <TextToolBar>
              <TextImg src={leftSort} />
              <TextImg src={centerSort} />
              <TextImg src={rightSort} />
              <TextImg src={boldBtn} />
              <TextImg src={underLineBtn} />
              <TextImg src={italicBtn} />
            </TextToolBar>
          </StyleWrapper>
          <StyleWrapper>
            <StyleTitle>Color</StyleTitle>
            <DropDown options={COLORS} defaultText="폰트 색상" />
            <DropDown options={COLORS} defaultText="텍스트 배경 색상" />
          </StyleWrapper>
        </StyleMain>
        <ButtonWrapper>
          <Button
            size="m"
            color="Normal"
            children={"저장하기"}
            onClick={() => {}}
          />
          <Button
            size="m"
            color="Normal"
            children={"완료"}
            onClick={() => {}}
          />
        </ButtonWrapper>
      </SideStyleBarWrapper>
    </div>
  );
};

export default SideStyleBar;
const DropDown = ({
  options,
  defaultText,
}: {
  options: string[];
  defaultText: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultText);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  // 바깥 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <DropDownWrapper ref={dropdownRef}>
      <DropDownHeader onClick={toggleDropdown}>
        {selected}
        <DropDownBtn src={selectBtn} />
      </DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options.map((option) => (
            <DropDownItem key={option} onClick={() => selectOption(option)}>
              {option}
            </DropDownItem>
          ))}
        </DropDownList>
      )}
    </DropDownWrapper>
  );
};
