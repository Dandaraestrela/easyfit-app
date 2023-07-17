import styled, { css } from "styled-components";

export const Wrapper = styled.table`
  ${({ theme: { colors } }) =>
    css`
      background-color: ${colors.white};
      border: 1px solid ${colors.g3};
      border-radius: 4px;
      border-spacing: 0;

      text-align: left;
      table-layout: fixed;
    `}
`;

export const TableHeader = styled.div`
  ${({ theme: { colors } }) => css`
    width: 100%;
    position: relative;

    padding: 8px 12px;

    border-bottom: 1px solid ${colors.g3};

    font-size: 14px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${colors.g1};

    overflow: hidden;
  `};
`;

export const Row = styled.tr`
  ${({ theme: { colors } }) => css`
    width: 100%;
  `}
`;
