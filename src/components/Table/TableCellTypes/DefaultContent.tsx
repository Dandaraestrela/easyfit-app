import styled, { css } from "styled-components";

const DefaultContentWrapper = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    position: relative;

    padding: 8px 12px;

    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;

    color: ${colors.g1};

    overflow: hidden;
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
