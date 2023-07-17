import styled, { css } from "styled-components";

const DefaultContentWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;

    padding: 8px 12px;

    font-size: 14px;

    color: ${colors.g1};
  `};
`;

const TableButton = styled.button``;

type ActionsProps = {
  buttons: { title: string; action: Function }[];
  cellData: string | number | object | boolean | object[];
};

const ActionsContent = ({ buttons, cellData }: ActionsProps) => {
  return (
    <DefaultContentWrapper>
      {buttons.map((button) => (
        <TableButton onClick={() => button.action(cellData)}>
          {button.title}
        </TableButton>
      ))}
    </DefaultContentWrapper>
  );
};

export default ActionsContent;
