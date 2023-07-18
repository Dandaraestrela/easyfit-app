import styled, { css } from "styled-components";

const DefaultContentWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    padding: 8px 12px;

    font-size: 14px;
    white-space: nowrap;

    color: ${colors.g1};
  `};
`;

type ContentProps = {
  cellData: string | number | object | boolean | object[];
  readonlyTable?: boolean;
  formatter?: Function;
};

const DefaultContent = ({ cellData, formatter }: ContentProps) => {
  return (
    <DefaultContentWrapper>
      {formatter ? formatter(cellData) : cellData}
    </DefaultContentWrapper>
  );
};

export default DefaultContent;
