import styled, { css } from "styled-components";

const ActionsContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 12px;
`;

const TableButton = styled.button`
  ${({ theme: { colors } }) => css`
    padding: 4px 8px;

    background-color: transparent;
    border: none;
    border-right: 1px solid ${colors.g3};

    font-size: 14px;
    color: ${colors.g1};
    cursor: pointer;
    &:last-of-type {
      border-right: none;
    }
    &:hover {
      background-color: ${colors.g3};
    }
  `};
`;

type ActionsProps = {
  buttons: { title: string; action: Function }[];
  cellData: string | number | object | boolean | object[];
};

const ActionsContent = ({ buttons, cellData }: ActionsProps) => {
  return (
    <ActionsContentWrapper>
      {buttons.map((button) => (
        <TableButton key={button.title} onClick={() => button.action(cellData)}>
          {button.title}
        </TableButton>
      ))}
    </ActionsContentWrapper>
  );
};

export default ActionsContent;
