import { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import * as S from "./Dropdown.styles";

interface DropdownProps {
  title: string;
  children?: React.ReactNode;
}

export function Dropdown({ title, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.DropdownHeaderButton
        isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        {isOpen ? (
          <CaretUp size={32} color="#985252" weight="bold" />
        ) : (
          <CaretDown size={32} color="#985252" weight="bold" />
        )}
      </S.DropdownHeaderButton>
      {isOpen && children}
    </S.Wrapper>
  );
}
