import { useState } from "react";
import { CaretDown, CaretUp, WarningCircle } from "@phosphor-icons/react";
import * as S from "./Dropdown.styles";
import { theme } from "@/styles/theme";

interface DropdownProps {
  title: string;
  attention?: boolean;
  children?: React.ReactNode;
}

export function Dropdown({ title, attention, children }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.DropdownHeaderButton
        type="button"
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {title}
        <S.IconsWrapper>
          {attention && (
            <WarningCircle
              size={24}
              color={theme.colors.redMedium}
              weight="bold"
            />
          )}
          {isOpen ? (
            <CaretUp size={32} color={theme.colors.redDark} weight="bold" />
          ) : (
            <CaretDown size={32} color={theme.colors.redDark} weight="bold" />
          )}
        </S.IconsWrapper>
      </S.DropdownHeaderButton>
      {isOpen && <S.ContentWrapper>{children}</S.ContentWrapper>}
    </S.Wrapper>
  );
}
